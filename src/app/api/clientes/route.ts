import { createCliente, getAllClientes } from "@/lib/controllers/clientes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const clientes = await getAllClientes();

  if ("error" in clientes)
    return NextResponse.json(
      { error: "Erro ao buscar clientes" },
      { status: 500 }
    );

  return NextResponse.json(clientes, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { nome, telefone } = await req.json();

  if (!nome || !telefone)
    return NextResponse.json({ error: "Faltando Campos" }, { status: 400 });

  const cliente = await createCliente(nome, telefone);
  if ("error" in cliente) {
    return NextResponse.json(
      { error: "Erro ao buscar clientes" },
      { status: 500 }
    );
  }

  return NextResponse.json(cliente, { status: 201 });
}
