import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import config from '../config';
import { connect } from 'react-redux';
import { logOutUser } from '../store/userReducer';
const Navbar = ({user, logOutUser}) => {
	const handleLogoutFailure = (err) => {
		console.error(err)
	}
	const handleLogoutSuccess = () => {
		alert("logged out successfully")
		logOutUser();
	}
	return (
		<div>
			<ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<ReactBootstrap.Navbar.Brand href="#home">MTube.co</ReactBootstrap.Navbar.Brand>
				<ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
					<ReactBootstrap.Nav className="mr-auto">
						<ReactBootstrap.Nav.Item>
							<Link to="/">
								<button variant="secondary">Home</button>
							</Link>
						</ReactBootstrap.Nav.Item>
					</ReactBootstrap.Nav>
					<ReactBootstrap.Nav>
						{ !user ? 
						<ReactBootstrap.Nav.Item>
							<Link to="/login">
								<button variant="secondary">Login</button>
							</Link>
						</ReactBootstrap.Nav.Item>
						:
						<>
						<ReactBootstrap.Nav.Item>
							<Link to="/profile">
								<button variant="secondary">Profile</button>
							</Link>
						</ReactBootstrap.Nav.Item>
						<GoogleLogout clientId={config.CLIENT_ID} buttonText="Logout"
						 onLogoutSuccess={handleLogoutSuccess} onFailure={handleLogoutFailure} />
						</>
						}
					</ReactBootstrap.Nav>
				</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>
		</div>
	);
};

const mapStateToProps = storeState => {
	return {
		user: storeState.features.users.user
	}
}

export default  connect(mapStateToProps, { logOutUser })(Navbar);
