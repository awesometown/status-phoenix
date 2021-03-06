import Constants from '../constants';
import { normalize, Schema, arrayOf } from 'normalizr';
import { service } from '../schema';

const initialState = {
	list: [],
	listFetched: false,
	fetching: true,
};

export default function reducer(state = initialState, action = {}) {
	switch(action.type) {
		case Constants.SERVICES_FETCHING:
			return { ...state, fetching: true };

		case Constants.SERVICES_RECEIVED:
			const normalized = normalize(action.list, arrayOf(service));
			return { ...state,
				fetching: false,
				listFetched: true,
				items: normalized.entities.services };
		//case Constants.CURRENT_USER:
		//	return { ...state, currentUser: action.currentUser };
		//case Constants.USER_SIGNED_OUT:
		//	return initialState;

		default:
			return state;
	}
}