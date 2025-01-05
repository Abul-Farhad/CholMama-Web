import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm } from './LoginForm.interfaces';
import { Link } from 'react-router';


const LoginForm = () => {
    const { register, handleSubmit } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                alert("Login successful!");
                console.log("Authorization Token: ", result);
            } else {
                alert(result.error || "Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
        console.log(data);
    }
    return (

        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input className="input input-bordered"
                    {...register("email", { required: true })}
                    placeholder='bob@xyz.com' />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                {/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */}
                <input className="input input-bordered"
                    {...register("password", { required: true })}
                    type='password' />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit' >
                <span>
                        <Link to={'/ride/request-from'}>Login</Link>
                    </span>
                </button>
            </div>
            <div className="text-center">
                <p>
                    Don't have an account? Click
                    <span>
                        <Link to={'/register'} className="underline ml-1 mr-1">here</Link>
                    </span>
                    to register.
                </p>
            </div>
        </form>
    )
}

export default LoginForm
