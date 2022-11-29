import { useAuth } from "../context/AuthContext"
import { Formik,Form , Field} from "formik"
import { useNavigate ,useLocation} from "react-router-dom"

export default function Login() {

    const {setUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    
    
    return (
        <div>
            <Formik 
                initialValues=
                {{
                    usurname: '',
                    password: ''
                }}  
                onSubmit={values => {
                    setUser(values)
                    navigate(location?.state?.return_url || '/', {
                    replace: true,
                    
                }) 
                }}>
                {({ values }) => (
                    <Form>
                        <Field name="username"/> <br/>
                        <Field name="password" type="password"/> <br/>
                        <button type="submit">Giriş yap</button>
                    </Form>
                )}
            </Formik>
    </div>
    )
}