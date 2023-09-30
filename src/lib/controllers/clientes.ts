import { prisma } from "@/lib/database/db";

export async function getAllClientes() {
  try {
    const clientes = await prisma.cliente.findMany();

    return clientes;
  } catch (error) {
    return { error: "Erro ao encontrar clientes" };
  }
}

export async function createCliente(nome: string, telefone: string) {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: nome,
        telefone: telefone,
      },
    });
    return novoCliente;
  } catch (error) {
    console.log(error);
    return { error: "Erro ao criar cliente" };
  }
}
