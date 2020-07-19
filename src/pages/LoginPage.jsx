// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import config from '../config';
// import { setUser } from '../store/userReducer';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// const LoginPage = ({ user, setUser}) => {
//     const responseGoogle = response => {
//         if (response.error) {
// 			console.error(response.error)
// 		}
// 		setUser({ ...response.profileObj, ...response.tokenObj })
// 	}
	
// 	if (user) return <Redirect to="/" />
// 	return (
// 		<div>
//             <br/><br/>
// 			<GoogleLogin
//                 clientId={config.CLIENT_ID}
//                 isSignedIn={true}
// 				render={(renderProps) => (
// 					<button onClick={renderProps.onClick} disabled={renderProps.disabled}>
// 						Login with Google button
// 					</button>
// 				)}
// 				buttonText="Login"
// 				onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 scope="https://www.googleapis.com/auth/youtube"
// 				cookiePolicy={'single_host_origin'}
// 			/>
// 		</div>
// 	);
// }

// const mapStateToProps = storeState => {
// 	return {
// 		user: storeState.features.users.user
// 	}
// }

// export default connect(mapStateToProps, { setUser })(LoginPage);