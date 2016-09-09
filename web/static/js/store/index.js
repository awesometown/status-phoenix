import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware }				from 'react-router-redux';
import createLogger						from 'redux-logger';
import thunkMiddleware					from 'redux-thunk';
import devTools							from 'remote-redux-devtools';
import reducers							from '../reducers';

const loggerMiddleware = createLogger({
	level: 'info',
	collapsed: true,
});

export default function configureStore(browserHistory) {
	const reduxRouterMiddleware = routerMiddleware(browserHistory)

	const enhancer = compose(
		applyMiddleware(reduxRouterMiddleware, thunkMiddleware, loggerMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

	const store = createStore(reducers, enhancer);
	//const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware, loggerMiddleware)(createStore);
	return store;
	//return createStoreWithMiddleware(reducers);
}