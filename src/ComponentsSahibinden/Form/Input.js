import { useRef } from "react"
import { useEffect, useState } from "react"

export default function Input({label, type = 'text', ...props}) {

    const [show, setShow] = useState(false)
    const inputRef = useRef()
    const [inputType,setInputType] = useState(type)
    const InputRef = () =>{
        inputRef.current.focus()
    }
    useEffect(() => {
        if (show) {
            setInputType('text')
            InputRef()

        }
        else if (type == 'password') {
            setInputType('password')
            InputRef()
        }
    }, [show])

    return(
        <>
            <div>
                <input ref={inputRef} required={true} type={inputType} className='input-tasarım' {...props}/>
                <small className="input-text">{label}</small>
                {type == 'password' && props?.value &&  (
                    <a type="button" onClick={() => setShow(show =>!show)}>
                       {
                        show? <a className="hide-show-trigger"></a> : <a className="show-hide-trigger"></a>
                       } 
                    </a>
                )
                }            
            </div>
        </>
    )
    
} 