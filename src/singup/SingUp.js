
import React from 'react'
import styled from 'styled-components'

const Singdiv = styled.div`
display: grid;
    place-items: center;
height: 100%;

`

const Headercontainer = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 58px;

.imgheader{
    background-image: url(https://s0.shbdn.com/assets/images/header_2x:e128c32e6c3632344852d5d52f683bba.png);
    height: 34px;
    width: 160px;
    background-position: -245px 0;
    background-size: 405px 222px;
    text-indent: -9999px;
}`

const Bodycontainer = styled.div`
position: relative;
width: 442px;
height: 751.125px;
background-color: #fff;
border: 1px solid #dedede;
padding: 50px;


.sing-up-form{
    font-family: "Avenir Next",sans-serif;
}
.h1{
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 25px;
    color: #3d3d3d;
}
.form-container{
    font-family: "Avenir Next",sans-serif;
    font-weight: 500;
    
}
.form-user-name{
    display: flex;
    flex-direction:column;
}
.split-form{
    display: flex;
    zoom:1;
}
.split-form:after{
    display: table;
    content: "";
    zoom:1;
    clear: both;
}
.dl{
    width: 161px;
    margin-bottom: 3px;
}
.dll{
    width: 342px;
    margin-bottom: 3px;
}
.dd{
    position: relative;
    margin-bottom: 15px;
}
.tt-trigger{
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 15px;
    top: 15px;
    background: url(https://s0.shbdn.com/assets/images/info@2x:3adb7367bc5fee3c69ca9f7085d58ff0.png);
    background-size: cover;
    z-index: 5;
}
.tipitip {
    height: 70px;
    left: 50px;
    display: none;
}
.tt-trigger:focus+.tipitip{
    display: block;
}


.input-tasarım{
    width: 100%;
    height: 50px;
    padding: 10px 14px 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: #fff;
    outline: 0;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: border-color .2s;
    appearance: none;
    :focus{
        border:solid 1px #438ed8 ;
        box-shadow: 0 0 3px 0 #438ed8;
    }
}

.show-hide-trigger{
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    right: 16px;
    top: 16px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png) no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
    :focus{
        background: url(https://s0.shbdn.com/assets/images/password_show:893e09be95762713a91c214a7514aacf.png) no-repeat;
    -webkit-background-size: 21px 16px;
    -moz-background-size: 21px 16px;
    background-size: 21px 16px;
    top: 17px;
    }
}
.label{
    position: absolute;
    top:17px;
}
`

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