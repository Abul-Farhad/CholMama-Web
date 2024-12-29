import { createBrowserRouter } from "react-router";
import UserRegistrationContainer from "./modules/user-registration/container/UserRegistrationContainer";
import UserLoginContainer from "./modules/user-login/container/UserLoginContainer";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: () => <UserRegistrationContainer/>,
    },
    {
        path: "/login",
        Component: () => <UserLoginContainer/>
    }
    
])