import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from "react";
import { apiLaureano, apiHnsn } from "../service";

interface AuthContextData {
  usuarioHnsn?: Usuario;
  usuarioLaureano?: Usuario;
  signInLaureano(credentials: SignInCredentials): Promise<any>;
  signInHnsn(credentials: SignInCredentials): Promise<any>;
  signOut(): void;
  setData(state: AuthState): Promise<void>;
  tokenLaureano: string | null;
  tokenHnsn: string | null;
  loadStorageData(): Promise<void>;
}

interface SignInCredentials {
  login: string;
  password: string;
  isMedico: boolean;
}

interface AuthState {
  tokenLaureano: string | null;
  tokenHnsn: string | null;
  usuarioLaureano: any;
  usuarioHnsn: any;
}

interface Usuario {
  id: number;
  nome: string;
  crm?: string;
  cpf?: string;
  dtNascimento: string;
  cdPrestadorArray?: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    const tokenLaureano = localStorage.getItem("@cedapp:tokenLaureano");
    const usuarioLaureano = localStorage.getItem("@cedapp:userLaureano");
    const usuarioHnsn = localStorage.getItem("@cedapp:userHnsn");
    const tokenHnsn = localStorage.getItem("@cedapp:tokenHnsn");

    if (usuarioLaureano || usuarioHnsn) {
      apiLaureano.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokenLaureano}`;

      apiHnsn.defaults.headers.common["Authorization"] = `Bearer ${tokenHnsn}`;

      setData({
        tokenHnsn,
        tokenLaureano,
        usuarioLaureano: JSON.parse(usuarioLaureano as string),
        usuarioHnsn: JSON.parse(usuarioHnsn as string),
      });
    }
  }

  const signInLaureano = useCallback(async ({ login, password, isMedico }) => {
    apiLaureano
      .post("/session", {
        login,
        password,
        isMedico,
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
      .catch((err) => console.error(err));
  }, []);

  const signInHnsn = useCallback(async ({ login, password, isMedico }) => {
    await apiHnsn
      .post("/session", {
        login,
        password,
        isMedico,
      })
      .then(async (response) => {
        var { token, user } = response.data;

        localStorage.setItem("@cedapp:tokenHnsn", token);
        localStorage.setItem("@cedapp:userHnsn", JSON.stringify(user));

        apiHnsn.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      })
      .catch((err) => console.error(err));
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem("@cedapp:tokenLaureano");
    localStorage.removeItem("@cedapp:userLaureano");

    localStorage.removeItem("@cedapp:tokenHnsn");
    localStorage.removeItem("@cedapp:userHnsn");

    setData({} as AuthState);

  }, []);

  const setDataAuth = useCallback(async (data: AuthState) => {
    setData(data);
  }, []);

  return (<AuthContext.Provider
    value={{
      usuarioHnsn: data.usuarioHnsn,
      usuarioLaureano: data.usuarioLaureano,
      signInLaureano,
      signInHnsn,
      signOut,
      setData: setDataAuth,
      tokenLaureano: data.tokenLaureano,
      tokenHnsn: data.tokenHnsn,
      loadStorageData,
    }} >
    {children}
  </AuthContext.Provider>);
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
