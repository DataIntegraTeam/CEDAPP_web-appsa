import styled from "styled-components";

export const ContainerExam = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  header{
    display: flex;
    flex-direction: column;
    background: var(--caixaLogin);
    width: 90%;
    padding: 20px;
    border-radius: 5px;
    margin: 0 auto;
    img{
      width: 50%;
    }
    .textHeader{
      font-size: 2.4vw;
      color: gray;
      font-weight: 800;
      margin-top: 5px;
    }
  }
  .separator{
    display: flex;
    background: var(--caixaLogin);
    height: 6px;
    width: 90%;
    border-radius: 5px;
    margin: 10px auto;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: var(--caixaLogin);
    .dados{
      display: flex;
      flex-direction: column;
      width: 96%;
      margin: 15px auto;
      border-radius: 5px;
      background: var(--width);
      padding: 2px;
      .cabecalho{
        display: flex;
        background: #007565;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        height: 120px;
        border-radius: 10px;
        .welcome{
          h1{
            color: #009985;
            margin-bottom: 5px;
            font-size: 150%;
            margin-left: 2px;
          }
          h2{
            color: #fff;
            font-size: 90%;
            margin-left: 2px;
            margin-top: 15px;
          }
        }
        button{
          background: #007565;
          border: none;
          outline: none;
          img{
            height: 30px;
            
          }
        }
      }
      .search{
        display: flex;
        align-items: center;
        margin-left: 20px;        
        margin-top: 20px;
        input{
          width: 45vw;
          height: 40px;
          text-align: 50px;
          border: 2.5px solid var(--green);
          border-radius: 5px;
          margin: 7px 15px;
          margin-left: 1px;
          display: flex;
          padding: 9px;
        }
        button{
          height: 40px;
          width: 40px;
          padding: 4px 5px 2px 5px; 
          background-color: var(--green);
          border-radius: 5px;
          border: 1px solid #e6e6e6;
          img{
            height: 80%;
            width: 80%;
          }
        }
      }
      .separator{
        width: 100%;
        background: var(--caixaLogin);
      }
      .body{
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--white);
        .data{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 96%;
          margin: 0 auto;
          h3{
            display: inline-flex;
            background: #d9d9d9;
            margin: 5px auto;
            width: 100%;
            height: 50px;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
          }
          .exame{
            display: flex;
            width: 100%;
            margin: 10px auto;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            background: #d9d9d9;
            border-radius: 10px;
            .infoExame{
              display: flex;
              flex-direction: column;
              height: 90%;
              justify-content: space-around;
            }
          }
        }
      }
    }
  }
`;