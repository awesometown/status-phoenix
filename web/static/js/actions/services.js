import { pushPath } from 'react-router-redux';
import Constants from '../constants';
import { httpGet } from '../utils';

const Actions = {
	fetchServices: () => {
		return dispatch => {
			const authToken = localStorage.getItem('phoenixAuthToken');

			httpGet('/api/v1/services')
				.then((data) => {
					dispatch({
						type: Constants.SERVICES_RECEIVED,
						list: data.services
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		};
	},
};

export default Actions;