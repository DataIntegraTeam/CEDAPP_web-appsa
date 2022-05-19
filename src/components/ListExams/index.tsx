import { ContainerExam } from "./styles";
import logo03 from "../../assets/logo03.png";
import pesquisa from "../../icon/pesquisa.png";
import power from "../../icon/power.png";
import pdf from "../../icon/pdf_icon.png"; 
import { apiHnsn, apiLaureano } from "../../service";

type PropsList={
  data?:{
    user:{
      crm: string,
      cpf: string,
      nome: string,
      dtNascimento: string,
      cdPrestador: number,
      token: string,
    }
  },
  isAthenticated?: boolean,
  close: ()=>void;
}

export function ListExams({data, close, isAthenticated}: PropsList) {
  // console.log(data);
  
  if(isAthenticated) {
        
  }

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