/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';

/**
 * Internal dependencies
 */
import Layout from './components/layout';
import './style.scss';

registerCoreBlocks();

render(
	<Layout blockEditorSettings={ bpcSettings } />,
	document.getElementById( 'block-pattern-creator' )
);
