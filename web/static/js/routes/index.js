import { IndexRoute, Route }	from 'react-router';
import React					from 'react';
import MainLayout				from '../layouts/main';
import AuthenticatedContainer	from '../containers/authenticated';
import Dashboard				from '../views/dashboard';
import AdminDashboard			from '../views/admin/dashboard';
import RegistrationsNew			from '../views/registrations/new';
import SessionsNew				from '../views/sessions/new';
import ServiceShowView			from '../views/services/show';

export default function configRoutes(store) {
	return(<Route component={MainLayout}>
		<Route path="/sign_up" component={RegistrationsNew}/>
		<Route path="/sign_in" component={SessionsNew}/>
		<Route path="/admin" component={AuthenticatedContainer}>
			<IndexRoute component={AdminDashboard} />
			<Route path="/admin/services/:serviceId" component={ServiceShowView}/>
		</Route>
		<Route path="/" component={Dashboard} />
		
	</Route>)
}