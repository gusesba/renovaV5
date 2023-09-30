import { useQuery } from "react-query";
import Alert from "./Alert";
import Tabela from "./Tabela";

export default function TabelaClientes() {
  const headers = [
    { name: "ID", id: "id" },
    { name: "Nome", id: "nome" },
    { name: "Contato", id: "telefone" },
  ];

  const { data, isLoading, error } = useQuery(
    "clientes",
    () => {
      return fetch("http://localhost:3000/api/clientes")
        .then((resposta) => resposta.json())
        .then((data) => {
          if (data.error) throw new Error(data.message);
          return data;
        });
    },
    {
      retry: 0,
    }
  );

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <Alert mensagem={"Erro ao carregar clientes"} />;

  return <Tabela headers={headers} dados={data} />;
}
