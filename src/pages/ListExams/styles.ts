import styled from "styled-components";

export const ContainerExam = styled.div`
  #container {
    background: #ffffff;
    max-width: 100%;
    margin-top: -10px;
    height: 100%;
  }
  
  .containerLint01 {
    background: #f1f1f1;
    max-width: 90%;
    margin: auto;
    height: 100%;
    border-radius: 2px;
    padding: 10px;  
    #page_header {
      /* border: 1px solid #ff0000; */
      width: 50%;
      height: 80%;
      max-width: 80%;
      margin-left: -2px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      
      /* font-size: 100%; */
      margin-top: 0px;
      border-radius: 2px;
    }
  }
  
  #header_logo {
    /* border: 1px solid #ff0000; */
    width: 90%;
  }
  #logo02 {
    /* margin-bottom: 1px; */
    /* border: 1px solid #ff0000; */
    width: 90%;
    margin-left: 5px;
    display: flex;
    margin-top: 1px;
    
  }
  #textHeader {
    /* border: 1px solid #ff0000; */
    max-width: 90%;
    max-height: 90%;
    width: 78%;
    padding-bottom: 0px;
    margin-left: 5px;
    /* align-items: -50px; */
    /* margin-right: -50%; */
    
    .text01 {
      /* border: 1px solid #cc6600; */
      margin-top: 10px;
      font-size: 2.4vw;
      color: gray;
      border-radius: 2px;
      font-weight: bold;
      padding-bottom: 2px;
      width: 99%;
      height: 1%;
      margin-bottom: 0px;
      max-width: 100%;
      min-width: 90%;
      justify-content: center;
      /* font-size: clamp(1em, 1em + 1vw, 1.5em); */
    }
  } 
  .navigation_header {
    /* border: 1px solid #ff0000; */
    /* text-align: center; */
  }
  #line {    
    margin-top: 8px;
    width: 90%;
    height: 3px;
    margin-left: 5%;
    background: #f1f1f1;
  }
  #containerLint02 {
    background: #f1f1f1;
    border: 1px solid #e6e6e6;
    max-width: 90%;
    margin: auto;
    margin-top: 8px;
    border-radius: 2px;
    padding: 3.5px;
    display: flex;
  }
  #conteinerHist {
    background: #ffffff;
    border: 1px solid #e6e6e6;    
    width: 98%;
    margin: auto;
    display: flex;
    height: 70%;
    margin-top: 8px;
    border-radius: 3px;
    display: inline-block;
    /* color: gray; */
  }    
  
  #containerWelcome {
    /* border: 1px solid #ff0000; */
    background: var(--green);
    color: #009985;
    width: 99%;
    font-size: 50%;
    padding: 2vw;
    height: 90px;
    border-radius: 3px;
    margin-top: 4px;
    margin-left: 0.5%;
    float: left;
    
    /* justify-items: flex-start; */
    h2 {
      font-size: 12%;
    }
  }
  #textAndButton {
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #ff0000; */
    font-weight: bold;
    width: 70vw;
    height: 35px;
    margin-top: 4px;
  }
  #patientInformation {
    /* border: 1px solid #FFFFFF; */
    color: #FFFFFF;
    font-weight: bold;
    font-size: 12px;
    max-width: 87%;
    margin-top: 4px;
    
  }
  .buttonPower {
    /* border: 1px solid #ff0000; */
    background: var(--green);
    border: none;
    margin-top: -15px;
    width: 28px;
    height: 28px;
    margin-left: 72vw;
    position: absolute;
    display: flex;
    
    #power {
      display: flex;
      width: 25px;
      height: 25px;
      margin: 1px;
      background: var(--green);
    }
  }
  .inputFilter {
    width: 35vw;
    height: 40px;
    text-align: 50px;
    border: 2.5px solid var(--green);
    border-radius: 5px;
    margin: 7px 15px;
    margin-left: 1px;
    display: flex;
    padding: 9px;
  }
  #divbuttonconsulta {    
    background: #ffffff;
    width: 96%;
    display: flex;
    align-items: center;
    padding: 1px;
    margin-top: 87px;
    margin-left: 2%;
    border-top: 3px solid #f1f1f1;
    border-bottom: 3px solid #f1f1f1;   
    height: 70px;
  }
  .buttonConsultar {
    background: var(--green);
    width: 40px;
    height: 40px;
    margin-left: -10px;
    border-radius: 5px;
    border-color: #f1f1f1;
    border: 1px solid #e6e6e6;
    padding: 4px 10px 4px 10px; 
    font-weight: bold;
    
    #pesquisa{
      width: 25px;
      height: 25px;
      margin-top: 3px;
      margin-left: -2px;
    }
    
  }
  #text_hist02 {
    background: #ffffff;
    width: 96%;
    display: flex;
    height: 490px;
    margin: 0 auto;
    margin-top: 5px;
    margin-left: 2%;
    border-radius: 2px;
    flex-direction: column;
  }
  
  .text02 {
    /* background: #6699ff; */
    background: #f1f1f1;
    border: 1px solid #e6e6e6;
    width: 100%;
    margin: 0 auto;
    margin-top: 1px;
    align-items: center;
    height: 55px;
    text-align: center;
    /* margin-left: 40%; */
    font-size: 15px;
    color: black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: bold;
  }
  #text_hist03 {
    width: 96%;
    display: block;
    margin: 0 auto;
    margin-left: 2%;
    border-radius: 2px;
  }
  .examList {
    flex-direction: column;
    background: #f1f1f1;
    /* border: 1px solid #e6e6e6; */
    /* border: 1px solid #ff0000; */
    width: 100%;
    height: 25%;
    margin: 0 auto;
    top: 0;
    margin-top: 10px;
    align-items: center;
    text-align: center;
    color: gray;
    font-size: 19px;
    justify-content: space-between;
    
    display: flex;    
        
    border-radius: 5px;
    
    #examData {
      /* border: 1px solid #ff0000; */
      width: 70%;
      height: 80%;
      margin-left: 20px;
      font-size: 80%;
      color: gray;
      text-align: left;
      font-weight: bold;
      .patientName {
        font-size: 120%;
        color: var(--green);
        font-weight: bold;
      }
    }
    #PDF {
      width: 90px;
      height: 90px;
      display: flex;
      margin-left: 10%;
      display: flex;
      /* flex-direction: row-reverse; */
      justify-content: flex-end;
      /* position: absolute; */
      /* max-width: 10%; */
      
      .buttonPDF {
        float:right;
        max-width: 20%;
        /* border: 1px solid #ff0000; */
        border: none;
        width: 80px;
        height: 80px;
        margin-top: 20px;
        position: absolute;
        /* position: relative; */
        display: flex;
        border-radius: 5px;
        /* flex-direction: row-reverse; */
        #pdf_icon {
          width: 99%;
          height: 99%;
          margin-top: 1px;
          margin-left: -5px;
        }
      }
    }
  }
  
  .PgE {
    border: 1px solid #d9d9d9;
    max-width: 30px;
    /* margin-left: 0px; */
    /* margin-right: 0px; */
    width: 20px;
    height: 18px;
  }
  .caixaEx {
    float: left;
    font-size: 70%;
    font-weight: bold;
  } 
`;