<?php
/**
 * Plugin Name: Block Pattern Creator
 * Description: Create block patterns on the frontend of a site.
 * Version: 1.0.0
 * Requires at least: 5.5
 * Author: WordPress Meta Team
 * Text Domain: block-pattern-creator
 * License: GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Block_Plugin_Creator;

/**
 * Register the assets.
 *
 * @throws WP_Error If the build files don't exist.
 */
function init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error( 'You need to run `npm start` or `npm run build` for the "create-block/gutenpride" block first.' );
	}

	$script_asset = require( $script_asset_path );
	wp_register_script(
		'block-pattern-creator-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_set_script_translations( 'block-pattern-creator-script', 'block-pattern-creator' );

	$settings = array(
		'isRTL' => is_rtl(),
		'__experimentalFeatures' => array(
			'global' => array(
				'typography' => array(
					// Needed to avoid error in useFontSize.
					'fontSizes' => array(),
				),
			),
		),
	);
	wp_add_inline_script(
		'block-pattern-creator-script',
		sprintf(
			'const wporgBlockPattern = {"settings": %1$s, "postId": %2$s}',
			wp_json_encode( $settings ),
			// @todo this could be pulled from the URL/query?
			wp_json_encode( 5 )
		),
		'before'
	);

	wp_enqueue_script( 'block-pattern-creator-script' );

	wp_register_style(
		'block-pattern-creator-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(
			'wp-components',
			'wp-block-editor',
			'wp-edit-blocks', // Includes block-library dependencies.
			'wp-format-library',
		),
		filemtime( "$dir/build/style-index.css" )
	);

	wp_enqueue_style( 'block-pattern-creator-style' );

	// @todo this will need to be adapted to whatever theme we use for wp.org
	remove_action( 'wp_enqueue_scripts', 'twentytwenty_register_styles' );
}
add_action( 'init', __NAMESPACE__ . '\init' );

/**
 * Bypass WordPress template system to load only our editor app.
 */
function inject_editor_template( $template ) {
	// @todo do this conditionally on a page.
	return __DIR__ . '/view/editor.php';
}
add_filter( 'template_include', __NAMESPACE__ . '\inject_editor_template' );

/**
 * Registers block editor 'wp_template_part' post type.
 */
function register_post_type() {
	\register_post_type(
		'wp-pattern',
		array(
			'public'        => true,
			'label'         => 'Block Pattern',
			'show_in_rest'  => true,
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\register_post_type' );
