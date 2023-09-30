import { useEffect } from "react";
import { useQuery } from "react-query";
import Tabela from "./Tabela";

export default function TabelaClientes() {
  const headers = [
    { name: "ID", id: "id" },
    { name: "Nome", id: "nome" },
    { name: "Contato", id: "telefone" },
  ];

  const { data, isLoading } = useQuery("clientes", () => {
    return fetch("http://localhost:3000/api/clientes").then((resposta) =>
      resposta.json()
    );
  });

  useEffect(() => {}, []);

  if (isLoading) return <p>Carregando...</p>;

  return <Tabela headers={headers} dados={data} />;
}
