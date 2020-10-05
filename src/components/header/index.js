/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { close, cog } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import SaveButton from './save-button';
import './style.css';

export default function Header( { onToggleInspector } ) {
	return (
		<div className="block-pattern-creator__header">
			<h1 className="block-pattern-creator__header-title">
				{ __( 'Block Pattern Creator', 'block-pattern-creator' ) }
			</h1>
			<div className="block-pattern-creator__header-actions">
				<SaveButton />
				<Button
					icon={ cog }
					onClick={ onToggleInspector }
					label="Toggle Inspector"
				/>
			</div>
		</div>
	);
}
