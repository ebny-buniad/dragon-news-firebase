import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);


    const handelRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password)

        createUser(email, password).then((result => {
            // console.log(result)
            setUser(result)
        })).catch((error) => console.log(error))

    }

    return (
        <div className="min-h-[calc(100vh-76px)] flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>
                <form onSubmit={handelRegistration} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input
                            name='photo'
                            type="text"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="text-sm">
                            Accept <span className="font-semibold">Term & Conditions</span>
                        </span>
                    </div>

                    <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
                    <p>Already Have an Account <Link to="/auth/login" className='underline'>Login</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Register;