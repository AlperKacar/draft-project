import { useAuth } from "../context/AuthContext"
import { useNavigate ,useLocation} from "react-router-dom"

export default function Login() {

    const {setUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
console.log(location)
    const loginHandle = () => {
        setUser({
            id:1,
            username: 'alper'
        })
        navigate(location?.state?.return_url || '/')
    }
    return (
        <div>
            login Page <br/>
            <button onClick={loginHandle}>Giriş yap</button>
        </div>
    )
}