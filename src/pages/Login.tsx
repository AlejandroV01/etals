import React from 'react';

const Login: React.FC = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
