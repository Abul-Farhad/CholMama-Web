import LoginForm from "../components/LoginForm/LoginForm"


const UserLoginContainer = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Can't find anyone to share your ride? No worries.
                        Let's Chol Mama
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default UserLoginContainer
