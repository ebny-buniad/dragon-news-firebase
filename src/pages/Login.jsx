import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { logIn } = use(AuthContext);

    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-76px)]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className='text-center font-bold text-2xl mt-5'>Login your account</h3>
                <div className="card-body">
                    <form onSubmit={handelLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <p>Don't Have an Account <Link to="/auth/register" className='underline'>Register</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;