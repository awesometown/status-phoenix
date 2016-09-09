import Constants from '../constants';
import { normalize, Schema, arrayOf } from 'normalizr';
import { instance } from '../schema';

const initialState = {
	list: [],
	listFetched: false,
	fetching: true,
};

export default function reducer(state = initialState, action = {}) {
	switch(action.type) {
		case Constants.INCIDENTS_FETCHING:
			return { ...state, fetching: true };

		case Constants.INCIDENTS_RECEIVED:
			const normalized = normalize(action.list, arrayOf(incident));
			return { ...state,
				fetching: false,
				listFetched: true,
				items: normalized.entities.services };
		default:
			return state;
	}
}