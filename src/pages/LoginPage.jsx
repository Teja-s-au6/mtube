import React from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../config'

export default function LoginPage() {
    const responseGoogle = response => {
        console.log(response)
    }
	return (
		<div>
            <br/><br/>
			<GoogleLogin
                clientId={config.CLIENT_ID}
                isSignedIn={true}
				render={(renderProps) => (
					<button onClick={renderProps.onClick} disabled={renderProps.disabled}>
						Login with Google button
					</button>
				)}
				buttonText="Login"
				onSuccess={responseGoogle}
                onFailure={responseGoogle}
                scope="https://www.googleapis.com/auth/youtube"
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
}
