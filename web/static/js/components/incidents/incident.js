import React from "react";
import { Link } from "react-router";
import moment from "moment";

class Incident extends React.Component {
	render() {
		var incident = this.props.incident;
		var className = 'alert incident-' + incident.serviceStatusId;
		return (
			<div className={className}>
				<p className="issue-state">{incident.state}</p>

				<h2><Link to={`/incidents/${incident.id}`}>{incident.title}</Link></h2>

				<p className="issue-updated">last updated {moment(incident.updatedAt).fromNow()}</p>
			</div>

		);
	}
}

export default Incident;