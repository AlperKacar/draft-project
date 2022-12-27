import styled from "styled-components";

export const Signdiv = styled.div`
display: grid;
    place-items: center;
height: 100%;

`

export const Headercontainer = styled.div`
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

export const Bodycontainer = styled.div`
position: relative;
width: 442px;
height: 751.125px;
background-color: #fff;
border: 1px solid #dedede;
padding: 50px;


.sign-up-form{
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
.tipitip{
    display: none;
}
.tt-trigger:hover + .tipitip{
    display: block;
    background-color: #7f8500;
    width: 100px;
    height: 100px;
    font-size: x-small;
    color: #438ed8;
    }

.input-tasarım{
    width: 100%;
    height: 50px;
    padding: 3px 18px 0 ;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
    :focus {
        border:solid 1px #438ed8 ;
        box-shadow: 0 0 3px 0 #438ed8;
    }
    :valid{
    padding: 20px 43px 0 18px ;

    }
}
.input-text{

    position: absolute;
    bottom: 15px;
    left: 19px;
    font-size: 15px;
    color: #8e8e8e;
    pointer-events: none;

}
.input-tasarım:valid + .input-text{
    scale: 0.89;
    transition: 350ms;
    bottom: 27px;
    translate: -5px;
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
}
.hide-show-trigger{
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    right: 16px;
    top: 16px;
    background: url(https://s0.shbdn.com/assets/images/password_show:893e09be95762713a91c214a7514aacf.png) no-repeat;
    -webkit-background-size: 21px 16px;
    -moz-background-size: 21px 16px;
    background-size: 21px 16px;
    top: 17px;
}
.label{
    position: absolute;
    top:17px;
}
.signupbutton{
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: lightyellow;
    color: gray;
    :enabled{
        color: black;
        background-color: yellow;
        border: 1px solid #ccc;
    border-radius: 5px;
    }
    :enabled:hover{
        
        box-shadow: 0 0 4px #7f8500;
        
    }
}
.cheachbox{
    display: flex;
    padding: 0 0 10px 0;

}
.cheachboxtext{
    font-size: small;
    margin-left: 10px;
    pointer-events: none;
}
`