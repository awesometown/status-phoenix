import React from "react";
import {Jumbotron, Grid, Col, Row, Table} from "react-bootstrap";

import ServicesList from './services'
import IncidentsList from '../components/incidents/list'

export default React.createClass({

	getInitialState() {
		return {
			services: [],
			incidents: [
				{
					id: '1',
					title: 'foo',
					state: 'bar',
					type: 'bash',
					serviceStatusId: 'degraded',
					affectedServiceIds: [],
					incidentUpdates: [],
				},
				{
					id: '2',
					title: 'zorp',
					state: 'derp',
					type: 'blarg',
					serviceStatusId: 'ok',
					affectedServiceIds: [],
					incidentUpdates: [],
				}
			]
		}
	},

	render() {
		return (
			<div className="container" role="main">
				<Jumbotron>
					<h1>Service Statuses</h1>

					<p>How's it going?</p>
				</Jumbotron>
				<PageContent services={this.state.services} incidents={this.state.incidents}/>
			</div>
		)
	}
});

const PageContent = React.createClass({
	render: function () {
		return (<Grid>
			<Row>
				<Col md={8}>
					<IncidentsList incidents={this.props.incidents}/>
				</Col>
				<Col md={4}>
					<ServicesList services={this.props.services}/>
				</Col>
			</Row>
		</Grid>);
	}
});