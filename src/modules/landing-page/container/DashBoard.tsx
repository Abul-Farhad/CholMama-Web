import { Link } from "react-router"

const DashBoard = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CholMama</h1>
                        <p className="mb-5">
                            CholMama is a unique ride-sharing platform that connects riders and drivers.
                            We provide a safe and secure platform for you to share your ride.
                            Need a ride? Let's Chol Mama!
                        </p>
                        <Link to={"/login"}>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
