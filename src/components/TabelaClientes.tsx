import Tabela from "./Tabela";

export default function TabelaClientes() {
  const headers = [
    { name: "ID", id: "id" },
    { name: "Nome", id: "nome" },
    { name: "Contato", id: "contato" },
  ];
  const dados = [{ id: 1, nome: "João", contato: "99999999999" }];
  return <Tabela headers={headers} dados={dados} />;
}
