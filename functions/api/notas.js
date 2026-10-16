export async function onRequestGet(context) {
  const nome = context.params.nome || "teste";
  const query = `SELECT * FROM notas WHERE aluno = '${nome}'`;
  const result = await context.env.DB.prepare(query).all();
  return Response.json(result);
}