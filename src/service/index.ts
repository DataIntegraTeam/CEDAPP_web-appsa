import axios from "axios";

const apiHnsn = axios.create({
  baseURL: "http://vpn.hnsn.com.br:8283/"
});

const apiLaureano = axios.create({
  baseURL:
    "http://138.185.33.188:3333/"
})

export { apiHnsn, apiLaureano };