/**
 * External dependencies
 */
import { TabPanel } from '@wordpress/components';
import { BlockInspector } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './style.css';

export default function Inspector() {
	return (
		<div className="block-pattern-creator__inspector">

			<BlockInspector />
		</div>
	);
}
