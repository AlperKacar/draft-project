import { useState } from "react"
import {CardDiv,CrediCardimg,CrediForm} from "./Credicardcss.js"
import Input from "./components/Input.js"
import { useEffect } from "react"

export default function CrediCard() {
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  const [show2,setShow2] = useState(false)
  const [cardnumber,setCardnumber] = useState('')
  const [cardholder,setCardholder] = useState('')
  const [month,setMonth] = useState('')
  const [year,setYear] = useState('')
  const [cvv,setCvv] = useState('')

  useEffect(() => {
    if(show){
      setShow2(false)
    }
    else if(!show){
      setShow2(false)
    }
  },[show])
  
  useEffect(() => {
    if(show1){
      setShow2(true)
    }
    else if(!show1){
      setShow2(true)
    }
  },[show1])

  

    return (
      <CardDiv>
        <CrediCardimg>
          <div className="img-responsive">
            <div className="user-info" >
            {show2 &&  (
              <div>
              {cardnumber}
              {cardholder}  
              {month}
              {year}
              </div>  )
                }      
              
            </div>
            <div>
              {!show2 && (
                <div>
            {cvv}

                </div>
              )}
            </div>
          </div>
        </CrediCardimg>
        <CrediForm>
          <div onClick={() => setShow1(show1 =>!show1)}>
            <div   className="user-form-holdernumber">
              <Input label="Card Number" onChange={e => setCardnumber(e.target.value)}/>
              <Input label="Card Holder" onChange={e => setCardholder(e.target.value)}/>
            </div>
            <div  className="user-form-date">
              <dd className="dd">
                <Input label="Mouht" onChange={e => setMonth(e.target.value)}/>
              </dd>
              <p className="p">/</p>
              <dd className="dd">
                <Input label="Year" onChange={e => setYear(e.target.value)}/>
              </dd>
            </div>
          </div>
          <div className="user-form-cvv">
            <dl className="dl" onClick={() => setShow(show =>!show)}>
              <Input label="CVV"  onChange={e => setCvv(e.target.value)}/>
            </dl>
          </div>
          
          <div className="button-form">
            <button type="submit" className="button-setting">Gönder</button>
          </div>
        </CrediForm>
      </CardDiv>
    )
}
