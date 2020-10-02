/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { BlockInspector } from '@wordpress/block-editor';
import { close } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.css';

export default function Inspector( { onClose } ) {
	return (
		<div className="block-pattern-creator__inspector">
			<div className="block-pattern-creator__inspector-header">
				<Button
					icon={ close }
					onClick={ onClose }
					label="Close Inspector"
				/>
			</div>

			<BlockInspector />
		</div>
	);
}
