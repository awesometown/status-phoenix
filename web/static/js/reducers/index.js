import { combineReducers }	from 'redux';
import { routerReducer }	from 'react-router-redux';
import session				from './session';
import registration			from './registration';
import services             from './services';

export default combineReducers({
	routing: routerReducer,
	session: session,
	registration: registration,
	services: services,
});