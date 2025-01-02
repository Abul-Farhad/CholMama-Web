import { createBrowserRouter } from "react-router";
import UserRegistrationContainer from "./modules/user-registration/container/UserRegistrationContainer";
import UserLoginContainer from "./modules/user-login/container/UserLoginContainer";
import DashBoard from "./modules/landing-page/container/DashBoard";
import MainLayout from "./shared/components/layout/MainLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <UserRegistrationContainer/>,
            },
            {
                path: "/login",
                element: <UserLoginContainer/>
            },
            {
                path: "/register",
                element: <UserRegistrationContainer/>
            },
        ],
        
    },
    {
        path: "/dashboard",
        element: <DashBoard/>
    }
    
])