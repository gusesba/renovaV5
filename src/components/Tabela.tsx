import { Table } from "react-bootstrap";

export type Props = {
  headers: { name: string; id: string }[];
  dados: any[];
};

export default function Tabela({ headers, dados }: Props) {
  return (
    <div className="tabela-holder">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.id}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.id}>{dado[header.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
