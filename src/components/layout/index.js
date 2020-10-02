/**
 * Internal dependencies
 */
import Editor from '../editor';
import Header from '../header';
import Provider from '../provider';

export default function Layout( { settings, postId } ) {
	const [ patternId, setPatternId ] = useState( postId );
	return (
		<Provider
			patternId={ patternId }
			blockEditorSettings={ blockEditorSettings }
		>
			<Header />
			<Editor />
		</Provider>
	);
}
