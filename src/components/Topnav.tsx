import Image from "next/image";
import Link from "next/link";

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
      <Link href="/" passHref>
        <Image src="/logo.jpg" alt="Logo" width={180} height={60} />
      </Link>
      <Link href="/clientes" passHref>
        Clientes
      </Link>
      <Link href="/estooque" passHref>
        Estoque
      </Link>
      <Link href="/saidas" passHref>
        Saídas
      </Link>
    </nav>
  );
}
