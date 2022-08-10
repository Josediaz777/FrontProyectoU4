import React from 'react'


function Login() {

    return (
        <div className="body">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="form">
                <h3>Login Here</h3>

                <label>Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </div>
        </div>
    );
}

export default Login;