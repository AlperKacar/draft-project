import { useRef } from "react"

export default function Input({label, ...props}) {


    const inputRef = useRef()

    return(
        <>
            <div>
                <input ref={inputRef} required={true}  className="input-form" {...props}/>
                <span className="input-text">{label}</span>
            </div>
        </>
    )
    
} 