import React from 'react';
import { Navbar, NavBrand, Nav, NavItem, Grid, Row, Col } from "react-bootstrap";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

import Actions from '../actions/sessions';

export default class Header extends React.Component {
	constructor() {
		super();
	}

	_renderSignOutLink() {
		return (
			<NavItem eventKey={1} onClick={this._handleSignOutClick.bind(this)}>Sign Out</NavItem>
		);
	}

	_handleSignOutClick(e) {
		e.preventDefault();
		this.props.dispatch(Actions.signOut());
	}

	render() {
		return(
			<Navbar fixedTop={true} inverse={true} fluid={true}>
				<Navbar.Header>
					<Navbar.Brand>
						Status Dashboard
					</Navbar.Brand>
					<Nav pullRight>
						{this._renderSignOutLink()}
					</Nav>
				</Navbar.Header>
			</Navbar>
		);
	}
}