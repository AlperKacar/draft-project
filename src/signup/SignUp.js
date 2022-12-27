import { useState } from "react"
import Input from "../ComponentsSahibinden/Form/Input"
import {Singdiv, Bodycontainer} from "./signupcss"
import Checkbox from "../ComponentsSahibinden/Form/Checkbox"
import Header from "../components/Header"


function SingUp() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [eposta, setEposta] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheackbox] = useState(true)

    const enable = name && surname && eposta && password && checkbox
  return (
        <Singdiv>
           <Header/>
        <Bodycontainer>
            <div className='sing-up-form'>
                <form className='form-container'>
                    <div className='form-user-name'>
                        <div className='split-form'>
                            <dl className='dl'>
                                <dd className='dd'>
                                    <Input type="text" value={name} label="Adınız" onChange={e => setName(e.target.value)}/>
                                </dd>
                            </dl>
                            <dl className='dl' style={{marginLeft:20}}>
                                <dd className='dd'>
                                <Input type="text" value={surname} label="Soyadınız" onChange={e => setSurname(e.target.value)}/> 
                                </dd>
                            </dl>
                        </div>
                        <dl className='dll'>
                            <dd className='dd'>
                                <div>
                                <span className='tt-trigger'>
                                <div  className="tipitip">E-posta adresiniz güncel olarak kullandığınız bir adres olmalı. Size özel fatura dahil tüm bilgilendirmeleri bu adresinize göndereceğiz.</div>

                                </span>
                                    <Input type="e-mail" value={eposta} label="Eposta" onChange={e => setEposta(e.target.value)}/>
                                </div>
                            </dd>
                        </dl>
                        <dl className='dll'> 
                            <dd className='dd'>
                       <Input type="password" value={password} label="Şifre" onChange={e => setPassword(e.target.value)}/> 

                            </dd>
                        </dl>
                    </div>
                    <div >
                    <Checkbox type="cheackbox" Cheackbox={setCheackbox} value={checkbox} onChange={e => setCheackbox(e.target.value)}  label="Kuralları kabul ediyorum"/>
                    </div>
                    <button className="singupbutton" type="submit" disabled={!enable}><h3>Kaydol</h3></button>
                </form>
            </div>  
        </Bodycontainer>
    </Singdiv>
  )
}

export default SingUp