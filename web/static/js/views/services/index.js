import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Panel, Button } from "react-bootstrap";

import { setDocumentTitle } from '../../utils';
import Actions from '../../actions/services';
import Constants from '../../constants'

class ServicesList extends React.Component {

	componentDidMount() {
		setDocumentTitle('Services');

		const { dispatch } = this.props;

		dispatch(Actions.fetchServices());
	}

	render() {
		const { fetching, items } = this.props;

		if (fetching) return (<h1>Fetching</h1>);

		var serviceNodes = Object.keys(items).map((id, index) => {
			const service = items[id];
			return (
				<Row key={id}>
					<Col md={4}><Link to={"/admin/services/" + id}>{service.name}</Link></Col>
				</Row>
			);
		});

		return (
			<div id="services-list">
				<ul>
					{serviceNodes}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	state.services
);

export default connect(mapStateToProps)(ServicesList)