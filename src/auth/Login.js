import { useAuth } from "../context/AuthContext"
import { useFormik } from "formik"
import { useNavigate ,useLocation} from "react-router-dom"

export default function Login() {

    const {setUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: values => {
            setUser(values)
            navigate(location?.state?.return_url || '/', {
                replace: true,
                
            })
        }
        
    })
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">kullanıcı adı</label>
            <input type="text" id="username" value={values.username} onChange={handleChange}/> <br/>

            <label htmlFor="password">sifre</label>
            <input type="password" id="password" value={values.password} onChange={handleChange}/> <br/>

            <button type="submit">Girişyap</button>
        </form>
    </div>
    )
}