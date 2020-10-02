/**
 * External dependencies
 */
import { BlockList, ObserveTyping, WritingFlow } from '@wordpress/block-editor';
import { Popover } from '@wordpress/components';

export default function Editor() {
	return (
		<div className="editor-styles-wrapper">
			<Popover.Slot name="block-toolbar" />
			<WritingFlow>
				<ObserveTyping>
					<BlockList />
				</ObserveTyping>
			</WritingFlow>
		</div>
	);
}
