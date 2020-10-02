/**
 * External dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Editor from '../editor';
import Header from '../header';
import Provider from '../provider';

export default function Layout( { settings, postId } ) {
	const [ patternId ] = useState( postId );
	// setPatternId
	return (
		<Provider patternId={ patternId } blockEditorSettings={ settings }>
			<Header />
			<Editor />
		</Provider>
	);
}
