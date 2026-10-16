export async function onRequestGet(context) {
  const nome = context.params.nome || "teste";
  const result = await context.env.DB.prepare("SELECT * FROM notas WHERE aluno = ?").bind(nome).all();
  return Response.json(result);
}