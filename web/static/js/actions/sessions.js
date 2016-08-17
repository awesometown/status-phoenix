import { push }                           from 'react-router-redux';
import Constants                          from '../constants';
import { Socket }                         from 'phoenix';
import { httpGet, httpPost, httpDelete }  from '../utils';

export function setCurrentUser(dispatch, user) {
	
}

const Actions = {
	signIn: (email, password) => {
		return dispatch => {
			const data = {
				session: {
					email: email,
					password: password,
				}
			};

			httpPost('/api/v1/sessions', data)
			.then((data) => {
				localStorage.setItem('phoenixAuthToken', data.jwt);
				setCurrentUser(dispatch, data.user);
				dispatch(push('/admin'));
			})
			.catch((error) => {
				error.response.json()
				.then((errorJSON) =>  {
					dispatch({
						type: Constants.SESSIONS_ERROR,
						error: errorJSON.error,
					});
				});
			});
		};
	},

	signOut: () => {
		return dispatch => {
			httpDelete('/api/v1/sessions')
			.then((data) => {
				localStorage.removeItem('phoenixAuthToken');
				dispatch({ type: Constants.USER_SIGNED_OUT })
				dispatch(push('/sign_in'));
			})
			.catch((error) => {
				console.log(error);
			});
		};
	},

	currentUser: () => {
		return dispatch => {
			const authToken = localStorage.getItem('phoenixAuthToken');

			httpGet('/api/v1/current_user')
			.then(function (data) {
				setCurrentUser(dispatch, data);
			})
			.catch(function (error) {
				console.log(error);
				dispatch(push('/sign_in'));
			});
		};
	},
};

export default Actions;