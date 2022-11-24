
import Login from "../auth/Login"
import AuthLayout from "../auth/AuthLayout"
import Home from "../Pages/Home"
import Profile from "../Pages/Profile"
import PrivateRoute from "../components2/PrivateRoute"
import SingUp from "../singup/SingUp"


const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>    
            }
        ]
    },
    {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
    },
    {
        path: "/singup",
        element: <SingUp/>
    }
]

export default routes