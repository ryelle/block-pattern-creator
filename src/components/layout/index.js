/**
 * Internal dependencies
 */
import Editor from '../editor';
import Provider from '../provider';

export default function Layout( { blockEditorSettings } ) {
	return (
		<div className="editor-styles-wrapper">
			<Provider blockEditorSettings={ blockEditorSettings }>
				<header>
					<h1>{ 'Test' }</h1>
				</header>
				<Editor />
			</Provider>
		</div>
	);
}
