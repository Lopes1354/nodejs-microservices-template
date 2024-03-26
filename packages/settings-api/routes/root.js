export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

//   fastify.get('/settings/:user_id', async function (request, reply) {
//     const userId = request.params.user_id;
//     // Aqui você recuperaria as configurações do usuário com o ID fornecido do banco de dados ou de algum armazenamento
//     // Por enquanto, vamos supor que você tem um objeto de configurações hardcoded
//     return userSettings;
// });

//   fastify.put('/settings/:user_id', async function(request, reply){
//   const userId = request.params.user_id;
//   let newSettings = {};

//   if (request.body) {
//     newSettings = request.body;
//   }

//   // Assumindo que o corpo da solicitação contém os novos dados de configuração
//   // Aqui você atualizaria as configurações do usuário com o ID fornecido no banco de dados ou em algum armazenamento
//   // Por enquanto, vamos apenas retornar as novas configurações
//   return newSettings;
// });

}
