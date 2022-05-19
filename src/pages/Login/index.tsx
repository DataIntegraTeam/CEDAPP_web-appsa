import { useState } from "react";
import { Container } from "./styles";  
import { apiHnsn, apiLaureano } from "../../service";
import { useAuth } from "../../hooks/auth"; 
import Link from "next/link";

type PropsUser = {
  cpf: string,
  crm: string,
  isDoctor: boolean
}
 
export function Login() {

  const [valuePlaceHolder, setValuePlaceHolder] = useState(false);
  const { loadStorageData } = useAuth();
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
    await apiLaureano
      .post("/session", {
        login: user.crm,
        password: user.cpf,
        isMedico: user.isDoctor
      })
      .then(async (response) => {
        var { token, user } = response.data;

        localStorage.setItem("@cedapp:tokenLaureano", token);
        localStorage.setItem(
          "@cedapp:userLaureano",
          JSON.stringify(user)
        );

        apiLaureano.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      })
      .catch((error) => {
        console.log(error);
      });

    await apiHnsn
      .post("/session", {
        login: user.crm,
        password: user.cpf,
        isMedico: user.isDoctor
      })
      .then(async (response) => {
        var { token, user } = response.data;

        localStorage.setItem("@cedapp:tokenHnsn", token);
        localStorage.setItem("@cedapp:userHnsn", JSON.stringify(user));

        apiHnsn.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      })
      .catch((error) => {
        console.log(error);
      });

    await loadStorageData();
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
            placeholder={valuePlaceHolder ? "CRM" : "CPF"}
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
            placeholder={valuePlaceHolder ? "CPF" : "Data de nascimento"}
            onChange={handleInputCpf}
            value={user.cpf}
          // ref={register()}
          />{" "}
        </div>
          <a href="/ListExams">
            <button onClick={handleSubmit}>
              Entrar
            </button>
          </a>
        <div className="line" ></div>
      </div>
      {/* <footer>
        <div style={{ display: isAuthenticated ? "flex" : "none" }}>
          <ListExams close={() => setIsAuthenticated(false)} data={data} isAthenticated={isAuthenticated} />
        </div>
      </footer> */}
    </Container>
  );
}

// export const Input = forwardRef()