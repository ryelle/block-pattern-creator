/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */
import Layout from './components/layout';
import './store';
import './style.scss';

registerCoreBlocks();

render(
	<Layout
		settings={ wporgBlockPattern.settings }
		postId={ wporgBlockPattern.postId }
	/>,
	document.getElementById( 'block-pattern-creator' )
);
