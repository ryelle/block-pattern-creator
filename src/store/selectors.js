/**
 * External dependencies
 */
import { createRegistrySelector } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { KIND, POST_TYPE } from './utils';

export const isSavingBlockPattern = createRegistrySelector(
	( select ) => ( state, patternId ) => {
		return select( 'core' ).isSavingEntityRecord(
			KIND,
			POST_TYPE,
			patternId
		);
	}
);

export function getEditingBlockPatternId( state ) {
	return state.currentPatternId;
}
