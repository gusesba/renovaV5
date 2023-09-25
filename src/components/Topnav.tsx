import Image from "next/image";

export default function Topnav() {
  return (
    <nav className="top-nav">
      {/* Logo
    Clientes
    Estoque
    Saídas
    Efetuar Venda
    Fechamento Cliente
    Recibos
    Excel 
    Insta*/}
      <Image src="/logo.jpg" alt="Logo" width={180} height={60} />
      <a href="/clientes">Clientes</a>
      <a href="/estoque">Estoque</a>
      <a href="/saidas">Saídas</a>
    </nav>
  );
}
