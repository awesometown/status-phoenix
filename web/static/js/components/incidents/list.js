import React from "react";

import Incident from './incident';

class IncidentList extends React.Component {
	render() {
		var incidentNodes = this.props.incidents.map(incident =>
				<Incident key={incident.id} incident={incident}/>
		);
		return (
			<div className="currentIssues">
				{incidentNodes}
			</div>
		);
	}
}

export default IncidentList;