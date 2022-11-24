import {Singdiv, Headercontainer, Bodycontainer} from "./singupcss"



function SingUp() {
  return (
    <Singdiv>
        <Headercontainer>
            <a className='imgheader'  alt='resim' href='https://www.sahibinden.com'>
                ana sayfaya dön
            </a>
        </Headercontainer>
        <Bodycontainer>
            <div className='sing-up-form'>
                <h1 className='h1'>Hesap Aç</h1>
                <form className='form-container'>
                    <div className='form-user-name'>
                        <div className='split-form'>
                            <dl className='dl'>
                                <dd className='dd'>
                                    <div>
                                    <input id='name' className='input-tasarım' placeholder='Adınız'/>
                                    </div>
                                </dd>
                            </dl>
                            <dl className='dl' style={{marginLeft:20}}>
                                <dd className='dd'>
                                    <div >
                                    <input id='surname' className='input-tasarım' placeholder='Soyadınız'/>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <dl className='dll'>
                            <dd className='dd'>
                                <div>
                                <span className='tt-trigger'></span>
                                    <input className='input-tasarım' placeholder='Eposta'/>
                                    <div  className="tipitip">E-posta adresiniz güncel olarak kullandığınız bir adres olmalı. Size özel fatura dahil tüm bilgilendirmeleri bu adresinize göndereceğiz.</div>
                                </div>
                            </dd>
                        </dl>
                        <dl className='dll'> 
                            <dd className='dd'>
                                <div>
                                <input type="password" className="input-tasarım" placeholder='Sifre'/>
                                    <a href='javascript:' className="show-hide-trigger"></a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </form>
            </div>
        </Bodycontainer>
    </Singdiv>
  )
}

export default SingUp