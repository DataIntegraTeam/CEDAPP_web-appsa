import { useState } from "react";
import { Container } from "./styles";
import axios from "axios";
import { ListExams } from "../../components/ListExams";
import { Link } from "react-router-dom";
// import { mask } from "../../util/format";
// import { useForm } from "react-hook-form";
// import { api } from "../../serveles";

type PropsUser ={
  cpf: string,
  crm: string,
  isDoctor: boolean
}

type Data={
  token: string,
  user:{
    crm: string,
    cpf: string,
    nome: string,
    dtNascimento: string,
  }
}

export function Login() {

  const [valuePlaceHolder, setValuePlaceHolder] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<Data>();

  const [user, setUser] = useState<PropsUser>({
    cpf: "",
    crm: "",
    isDoctor: true
  });
const handleInputCrm = (e: any) => {
    setUser({
      ...user,
      crm: e.currentTarget.value,
    });
}
const handleInputCpf = (e: any) => {
  setUser({
    ...user,
    cpf: e.currentTarget.value,
  });
}


const handleSubmit = async () => {
  axios.post("http://vpn.hnsn.com.br:8283/session",{
    login: user.crm,
    password: user.cpf,
    isMedico: user.isDoctor
  }).then(async (res)=>{
    if(res.status === 200){
      await setData(res.data);
      setIsAuthenticated(true);
      console.log(data)
    }else{
      axios.post("http://138.185.33.188:3333/session",{
        login: user.crm,
        password: user.cpf,
        isMedico: user.isDoctor
       }).then(async (res)=>{
        await setData(res.data);
        setIsAuthenticated(true);
        console.log(data, "segunda api")
      })
    }
  })
}
return (
    <Container>
     <div className="form">
        <p>Faça seu login</p>
        <div className="medical_access">
          <input className="radio1" type="radio" id="access1" name="radio" value="CRM" v-model="checked"
            onChange={() => {
              setValuePlaceHolder(!valuePlaceHolder)
            }}
          />
          <label className="medical" htmlFor="medical"> Acesso médico </ label>
        </ div>
        <div className="patient_access">
          <input className="radio2" type="radio" id="access2" name="radio" value="CPF" v-model="checked"
            onChange={() => {
              setValuePlaceHolder(!valuePlaceHolder)
              // setValuePlaceHolder2('Data de nascimento')
            }}
          />
          <label className="patient" htmlFor="patient"> Acesso paciente </ label>
        </ div>

        <div className="login">
          <label htmlFor="input"></label>
          <input
            type="number"
            name="crm"
            placeholder={valuePlaceHolder? "CRM": "CPF"}
            onChange={handleInputCrm}
            value={user.crm}
            // ref={register()}
          />
        </div>
        <div className="pw">
          <label htmlFor="input"></label>
          <input
            type="text"
            name="cpf"
            placeholder={valuePlaceHolder? "CPF": "Data de nascimento"}
            onChange={handleInputCpf}
            value={user.cpf}
            // ref={register()}
          />{" "}
        </div>
            <button onClick={handleSubmit}>
              Entrar
            </button>
        <div className="line" ></div>
      </div>
      <footer>
        <div style={{display: isAuthenticated ? "flex" : "none"}}>
            <ListExams close={()=>setIsAuthenticated(false)} data={data}/>
        </div>
      </footer>
    </Container>
  );
}

// export const Input = forwardRef()