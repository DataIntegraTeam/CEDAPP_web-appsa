import { ContainerExam } from "./styles";
import logo03 from "../../assets/logo03.png";
import pesquisa from "../../icon/pesquisa.png";
import power from "../../icon/power.png";
import pdf from "../../icon/pdf_icon.png";
import { useEffect } from "react";
import axios from "axios";

type PropsList={
  data?:{
    token: string,
    user:{
      crm: string,
      cpf: string,
      nome: string,
      dtNascimento: string,
    }
  },
  close: ()=>void;
}

export function ListExams({data, close}: PropsList) {
  console.log(data);
  
  // useEffect(()=>{
  //   const handleSubmit = async () => {
  //     axios.post("http://vpn.hnsn.com.br:8283/session",{
  //     }).then(async (res)=>{
  //       if(res.status === 200){
         
  //       }else{
  //         axios.post("http://138.185.33.188:3333/session",{
  //          }).then(async (res)=>{
  //           console.log(data, "segunda api")
  //         })
  //       }
  //     })
  //   }
  // },[]);

  return (
    <ContainerExam>
      <header>
        <img src={logo03} alt="" />
        <div className="textHeader">
          SisLab - Sistema de Gerenciamento Laboratorial <br />
          CEDAPP - Centro de Diagnostico Anatomopatológico
        </div>
      </header>
      <span className="separator"></span>
      <div className="wrapper">
        <div className="dados">
          <div className="cabecalho">
            <div className="welcome">
              <h1>Bem vindo!</h1>
              <h2>{data?.user.nome}</h2>
            </div>
            <button onClick={close}>
              <img src={power} alt="" />
            </button>
          </div>
          <div className="body">
            <div className="search">
              <input type="search" placeholder="filtrar dados..." />
              <button>
                <img src={pesquisa} alt="" />
              </button>
            </div>
            <span className="separator"></span>
            <div className="data">
              <h3>Exames</h3>
              <div className="exame">
                <div className="infoExame">
                  <h4>Nome: Ezequias</h4>
                  <h5>N° 4</h5>
                  <span>00/00/00</span>
                  <strong>tipo de exame</strong>
                </div>
                <img src={pdf} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerExam>
  )
}