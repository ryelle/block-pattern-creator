/**
 * External dependencies
 */
import { BlockEditorProvider } from '@wordpress/block-editor';
import {
	DropZoneProvider,
	FocusReturnProvider,
	SlotFillProvider,
} from '@wordpress/components';
import { useEntityBlockEditor } from '@wordpress/core-data';

export default function Provider( { blockEditorSettings, ...props } ) {
	const [ blocks, onInput, onChange ] = useEntityBlockEditor(
		'postType',
		'wp-pattern',
		{ id: 5 }
	);

	return (
		<div className="editor-styles-wrapper">
			<SlotFillProvider>
				<DropZoneProvider>
					<FocusReturnProvider>
						<BlockEditorProvider
							value={ blocks }
							onInput={ onInput }
							onChange={ onChange }
							settings={ blockEditorSettings }
							{ ...props }
						/>
					</FocusReturnProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</div>
	);
}
