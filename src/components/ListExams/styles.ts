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
    background: #d9d9d9;
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
    background: #f1f1f1;
    height: 6px;
    width: 90%;
    border-radius: 5px;
    margin: 20px auto;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #d9d9d9;
    .dados{
      display: flex;
      flex-direction: column;
      width: 96%;
      margin: 15px auto;
      border-radius: 5px;
      background: var(--background);
      padding: 5px;
      .cabecalho{
        display: flex;
        background: #007565;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        height: 120px;
        border-radius: 10px;
        .welcome{
          h1{
            color: #009985;
            margin-bottom: 5px;
            font-size: 2rem;
          }
          h2{
            color: #fff;
            font-size: 2.5rem;
          }
        }
        button{
          background: #007565;
          border: none;
          outline: none;
          img{
            height: 70px;
            
          }
        }
      }
      .search{
        display: flex;
        align-items: center;
        margin-left: 30px;
        margin-top: 20px;
        input{
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
        button{
          height: 40px;
          width: 50px;
          padding: 4px 10px 4px 10px; 
          background-color: var(--green);
          border-radius: 5px;
          border: 1px solid #e6e6e6;
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
      .separator{
        width: 100%;
      }
      .body{
        display: flex;
        flex-direction: column;
        width: 100%;
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