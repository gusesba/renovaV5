import { useEffect, useState } from "react";
import Tabela from "./Tabela";

export default function TabelaClientes() {
  const headers = [
    { name: "ID", id: "id" },
    { name: "Nome", id: "nome" },
    { name: "Contato", id: "telefone" },
  ];

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/clientes")
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return <Tabela headers={headers} dados={dados} />;
}
