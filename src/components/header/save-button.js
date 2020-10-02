/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

function SaveButton() {
	const isSaving = useSelect( ( select ) =>
		select( 'wporg/block-pattern-creator' ).isSavingBlockPattern()
	);
	const { saveBlockPattern } = useDispatch( 'wporg/block-pattern-creator' );

	return (
		<Button
			isPrimary
			isBusy={ isSaving }
			aria-disabled={ isSaving }
			onClick={ saveBlockPattern }
		>
			{ isSaving
				? __( 'Saving…', 'block-pattern-creator' )
				: __( 'Update', 'block-pattern-creator' ) }
		</Button>
	);
}

export default SaveButton;
