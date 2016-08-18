import Constants from '../constants';

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
			return { ...state, fetching: false, listFetched: true, list: action.list }
		//case Constants.CURRENT_USER:
		//	return { ...state, currentUser: action.currentUser };
		//case Constants.USER_SIGNED_OUT:
		//	return initialState;

		default:
			return state;
	}
}