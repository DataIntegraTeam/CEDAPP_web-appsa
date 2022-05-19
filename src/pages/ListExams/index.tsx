import { useContext, useEffect, useState } from "react";
import { ContainerExam } from "./styles";
import logo03 from "../../assets/logo03.png";
import pesquisa from "../../icon/pesquisa.png";
import power from "../../icon/power.png";
import pdf from "../../icon/pdf_icon.png";
import { AuthContext } from "../../hooks/auth";
import { apiHnsn, apiLaureano } from "../../service";

interface listFinalLaudos {
  nmPaciente: string;
  nrControle: string;
  dtLaudo: string;
  dsExame: string;
}

export function ListExams() {
  const { usuarioHnsn, usuarioLaureano } = useContext(AuthContext);
  const [data, setData] = useState<listFinalLaudos[]>([])
  let LaudoExames: listFinalLaudos[] = [];
  console.log(LaudoExames, "Test")
  useEffect(() => {
    apiHnsn.get(`/medico/${usuarioHnsn?.cdPrestadorArray}`).then((resp) => {
      setData(resp.data)
      console.log(resp.data[0])
    })
    LaudoExames.push(...data.slice(0, 200));
  }, [])
  if(!usuarioHnsn && usuarioLaureano) {
    return (<h1>Hello Word</h1>)    
  };
  // console.log(usuarioHnsn, usuarioLaureano)

  return (
    <>
      <ContainerExam>
        <div id="container">
          <div className="containerLint01">

            <header
              id="page_header"
            >
              <div id="header_logo">
                <img
                  id="logo02"
                  src={logo03}
                  alt="Logo do cabeçalho"
                />
              </div>                

              {/* <nav className="navigation_header">
                <ul>
                </ul>
              </nav> */}
            </header>

            <div id="textHeader">
              <div className="text01">
                SisLab - Sistema de Gerenciamento Laboratorial <br />
                CEDAPP - Centro de Diagnostico Anatomopatológico
              </div>
            </div>
            
          </div>

          <div id="line" ></div>

          <div id="containerLint02">
            <div id="conteinerHist">
              <div id="containerWelcome">

                <div id="textAndButton">
                  <div>
                    Bem-vindo,
                    <button className="buttonPower">
                      <img
                        id="power"
                        src={power}
                        alt="Desligar"
                      />
                    </button>
                  </div>                  
                </div>
                
                <div id="patientInformation">
                  <div>
                    {usuarioHnsn?.nome || usuarioLaureano?.nome}
                  </div>
                  {/* <div>                    
                  </div> */}
                </div>

              </div>

              <div id="divbuttonconsulta">
                <input className="inputFilter" type="text" name="Filtro" placeholder="Filtrar dados..." />
                <button className="buttonConsultar">
                  <img
                    id="pesquisa"
                    src={pesquisa}
                    alt="incoPesquisa"
                  />
                  {/* <a href=""></a> */}
                </button>
              </div>

              <div id="text_hist02">
                <div className="text02">
                  Exame(s)
                </div>

                <div className="examList">
                  {data.map(item => (
                    <div id="examData">
                      <p className="patientName">{item.nmPaciente}</p><br />
                      <p>{item.nrControle}</p>
                      <p>{item.dtLaudo}</p>
                      <p>{item.dsExame}</p>
                    </div>
                  ))}
                  <div id="PDF">
                    <button className="buttonPDF">
                      <img
                        id="pdf_icon"
                        src={pdf}
                        alt="incoPDF"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerExam>
    </>
  )
}