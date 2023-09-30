export default function Alert({ mensagem }: { mensagem: string }) {
  return (
    <div className="my-alert">
      <div>
        <h1>Alerta</h1>
        <p>{mensagem}</p>
      </div>
    </div>
  );
}
