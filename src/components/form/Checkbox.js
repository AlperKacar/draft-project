import { Field, useField } from "formik"
import { FiCheck} from "react-icons/fi"

export default function Input({label, ...props}) {
 
    const [field, meta , helpers] = useField(props)
    
    return(
        <label >
            <button onClick={() => {
                helpers.setValue(!field.value)
            }}>
                <FiCheck size={16}/>
            </button>
            {label}
        </label>
    )
} 