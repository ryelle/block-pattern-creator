/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import SaveButton from './save-button';
import './style.scss';

export default function Header() {
	return (
		<div className="block-pattern-creator__header">
			<h1 className="block-pattern-creator__header-title">
				{ __( 'Block Pattern Creator', 'block-pattern-creator' ) }
			</h1>
			<div className="block-pattern-creator__header-actions">
				<SaveButton />
			</div>
		</div>
	);
}
