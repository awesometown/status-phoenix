import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";
import {PageHeader, Grid, Col, Row, Table} from "react-bootstrap";

class ServiceShowView extends React.Component {
	componentDidMount() {
		//const { dispatch, params } = this.props;
	}

	_getService(id) {
		return this.props.items[id];
	}

	render() {
		const { dispatch, params } = this.props;
		let service = this._getService(params.serviceId);

		return(
			<div>
			<h1>Hi</h1>
			<p>{service.name}</p>
			</div>)
	}
}

const mapStateToProps = (state) => (
	state.services
);

export default connect(mapStateToProps)(ServiceShowView);