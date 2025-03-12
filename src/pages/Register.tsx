import React from 'react';

const Register: React.FC = () => {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input id="confirmPassword" type="password" name="confirmPassword" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
