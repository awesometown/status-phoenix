import React 				from 'react';
import { connect } 			from 'react-redux';
import { routerActions } 	from 'react-router-redux';
import { Nav, NavItem, Grid, Row, Col } from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

import Actions from '../actions/sessions';
import Header from '../layouts/header';

import '../../css/admin.css';

class AuthenticatedContainer extends React.Component {
	componentDidMount() {
		const { dispatch, currentUser } = this.props;

		if (localStorage.getItem('phoenixAuthToken')) {
			dispatch(Actions.currentUser());
		} else {
			dispatch(routerActions.push('/sign_in'));
		}
	}

	render() {
		const { currentUser, dispatch } = this.props;

		return (
			<div id="authentication_container" className="application-container">
				<Header currentUser={currentUser}
					dispatch={dispatch} />

				<Grid fluid={true}>
					<Row>
						<Col sm={3} md={2} className="sidebar">
							<Nav stacked activeKey={1} className="nav-sidebar">
								<LinkContainer to="/admin">
									<NavItem eventKey={1}>Home</NavItem>
								</LinkContainer>
								<LinkContainer to="/admin/incidents">
									<NavItem eventKey={2} title="Item">Incidents</NavItem>
								</LinkContainer>
								<LinkContainer to="/admin/maintenance">
									<NavItem eventKey={3}>Maintenance</NavItem>
								</LinkContainer>
								<LinkContainer to="/admin/services">
									<NavItem eventKey={4}>Services</NavItem>
								</LinkContainer>
							</Nav>
						</Col>
						<Col sm={3} smOffset={3} md={6} mdOffset={2} className="main">
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);