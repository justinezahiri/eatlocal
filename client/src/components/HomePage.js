import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

class HomePage extends React.Component {
	state = { show: true };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div className="homepage">
				<Modal show={this.state.show} handleClose={this.hideModal}>
					<p>Modal</p>
				</Modal>
				<div className="container">
					<img src={'/images/eatlocalblue.svg'} alt="logo" />
					<p className="between3font">
						You are what you eat
						<br />
						You are who you meet
					</p>
					<div className="content">
						<Link className="btn signup" to="/register" style={{ textDecoration: 'none' }}>
							Sign up
						</Link>
						<Link className="btn" to="/login" style={{ textDecoration: 'none' }}>
							Log in
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
