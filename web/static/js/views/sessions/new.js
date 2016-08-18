import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Panel, Button } from "react-bootstrap";

import { setDocumentTitle } from '../../utils';
import Actions from '../../actions/sessions';

class SessionsNew extends React.Component {
	componentDidMount() {
		setDocumentTitle('Sign In');
	}

	_handleSubmit(e) {
		e.preventDefault();

		const { email, password } = this.refs;
		const { dispatch } = this.props;

		dispatch(Actions.signIn(email.value, password.value));
	}

	_renderError() {
		let { error } = this.props;

		if (!error) return false;

		return (
			<div className="error">
				{error}
			</div>
		);
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col mdOffset={4} md={4}>
						<Panel className="text-center">
							<form id="sign_in_form" role="form" onSubmit={::this._handleSubmit}>
								{::this._renderError()}
								<div className="form-group">
									<label>
										<input className="form-control text-center"
										       ref="email"
										       type="Email"
										       id="user_email"
										       placeholder="Email"
										       required="true"
										       defaultValue="test@example.com"/>
									</label>
								</div>
								<div className="form-group">
									<label>
										<input ref="password"
										       type="password"
										       className="form-control text-center"
										       id="user_password"
										       placeholder="Password"
										       required="true"
										       defaultValue="asdfg"/>
									</label>
								</div>
								<Button bsStyle="success" onClick={::this._handleSubmit}>Login</Button>
							</form>
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => (
	state.session
);

export default connect(mapStateToProps)(SessionsNew)