import RegistrationForm from "../components/RegistrationForm/RegistrationForm"

const UserRegistrationContainer = () => {
    return (

        <>
            <div className="hero bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Can't find anyone to share your ride? No worries.
                            Let's Chol Mama.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <RegistrationForm />
                       

                    </div>

                </div>



            </div>

        </>



    )
}

export default UserRegistrationContainer
