
import Login from "../auth/Login"
import AuthLayout from "../auth/AuthLayout"
import Home from "../Pages/Home"
import Profile from "../Pages/Profile"
import PrivateRoute from "../components2/PrivateRoute"
import SignUp from "../signup/SignUp"
import Contact from "../Pages/Contact"
import CrediCard from "../Credipage/CrediCard"


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
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/odeme",
        element: <CrediCard/>
    }
]

export default routes