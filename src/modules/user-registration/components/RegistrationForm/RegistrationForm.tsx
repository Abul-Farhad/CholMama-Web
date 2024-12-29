import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistrationForm } from "./RegistrationForm.interfaces";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegistrationForm>();

    const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                alert("Registration successful!");
            } else {
                alert(result.error || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input
                    className="input input-bordered"
                    {...register("name", { required: "Full Name is required" })}
                    placeholder='Mr. Bob'
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">NID No.</span>
                </label>
                <input
                    className="input input-bordered"
                    {...register("nid_number", { required: "NID is required" })}
                    placeholder='XXXXXXXXXX'
                />
                {errors.nid_number && <p className="text-red-500">{errors.nid_number.message}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    className="input input-bordered"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address"
                        }
                    })}
                    placeholder='bob@xyz.com'
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input
                    className="input input-bordered"
                    {...register("phone", { required: "Phone number is required" })}
                    placeholder='01XXXXXXXXX'
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    className="input input-bordered"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        }
                    })}
                    type='password'
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Register</button>
            </div>
        </form>
    );
};

export default RegistrationForm;
