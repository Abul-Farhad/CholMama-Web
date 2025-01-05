import { createBrowserRouter } from "react-router";
import UserRegistrationContainer from "./modules/user-registration/container/UserRegistrationContainer";
import UserLoginContainer from "./modules/user-login/container/UserLoginContainer";
import DashBoard from "./modules/landing-page/container/DashBoard";
import MainLayout from "./shared/components/layout/MainLayout";
import FromLocationPickerContainer from "./modules/ride-request/container/FromLocationPickerContainer";
import ToLocationPickerContainer from "./modules/ride-request/container/ToLocationPickerContainer";

export const routes = createBrowserRouter([
    {
        path: '/ride',
        element: <MainLayout/>,
        children:[
            
            {
                path: "/ride/request-from",
                element: <FromLocationPickerContainer/>
            },
            {
                path: "/ride/request-to",
                element: <ToLocationPickerContainer/>
            }
        ],
        
    },
    {
        path: "/",
        element: <DashBoard/>,
    },
    {
        path: "/login",
        element: <UserLoginContainer/>
    },
    {
        path: "/register",
        element: <UserRegistrationContainer/>
    },
    
    
])