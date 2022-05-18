import { ContainerExam } from "./styles";
import logo03 from "../../assets/logo03.png";
import pesquisa from "../../icon/pesquisa.png";
import power from "../../icon/power.png";
import pdf from "../../icon/pdf_icon.png";

export function ListExams() {

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
                    NOME DO PACIENTE
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
                  <div id="examData">
                    <p className="patientName">Nome:</p><br />
                    <p>N°</p>
                    <p>00/00/0000</p>
                    <p>TIPO DE EXAME</p>
                  </div>
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