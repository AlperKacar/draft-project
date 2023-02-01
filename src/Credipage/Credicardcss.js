import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://www.ziraatbank.com.tr/PublishingImages/Landing/dijitalBankacilik/Musteri_iletisim_Merkezi.jpg);
  height: 100vh;
  `
export const CrediCardimg = styled.div`
display: flex;
    margin-bottom: -70px;
    z-index: 9999;
  
  .img-responsive{
    background: center;
    border-radius: 10px;
    width: 295px;
    height: 184px;
    background-image: url(https://bireysel.ziraatbank.com.tr/Content/assets/img/cards/dashboard/bankkart_genc_visa@2x.png);
    -webkit-box-shadow: 0 0 100px 1px white;
    -moz-box-shadow: 0 0 100px 1px white;
	  box-shadow: 0 0 100px 1px white;
  } 
  
  .user-info{
    display: flex;
    flex-direction: column;
    justify-content:center;
  }
 `
 
export const CrediForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    width: 500px;
    height: 450px;
    background-color:rgba(255,0,0,0.5);
  
  .user-form-holdernumber{
    display: flex;
    flex-direction: column;
    justify-content:center; 
    margin: 105px 60px 0 60px;
  }
  .user-form-date{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p{
    margin-bottom:25px;
    user-select: none;
    font-size: 30px;
  }
  .dd{
    margin: 0px 10px;
    width: 80px;

  }

  .user-form-cvv{
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .dl{
    width: 70px;
  }
  

  .input-form{
    width: 100%;
    font-size: 15px;
    height: 40px;
    padding: 3px 18px 0 ;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    :focus {
      box-shadow: 0 0 10px 3px white;
    }
    :valid{
    padding: 14px 18px 0 18px ;
    }
  }

  .input-text{
    position: relative;
    bottom: 30px;
    left: 19px;
    font-size: 15px;
    color: #8e8e8e;
    pointer-events: none;
  }
 
 
  .input-form:valid + .input-text{
    transition: 500ms;
    bottom: 40px;
    left: 13px;
  } 

  .button-form{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-setting{
    width: 200px;
    height: 30px;
    background-color:white;
    border: none;
    font-size: large  ;
    color: #8e8e8e;
    :focus{
      background-color:black;
      color: white;
      box-shadow: 0 0 10px 3px black;

    }

  }
  `