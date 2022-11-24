/*import { useFormik } from "formik"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function SingUp1() {
    const {setUser} = useAuth()
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: values => {
            setUser(values)
            Navigate(state?.return_url || '/', {
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

export default SingUp1

*/