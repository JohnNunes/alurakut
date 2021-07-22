import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

  if (request.method === 'POST') {
    const TOKEN = '51a24ca51bd2a93084c51c496e5a56';
    const client = new SiteClient(TOKEN);

    // Utilizar DTO ao receber o body e validar os dados.

    const registroCriado = await client.items.create({
      itemType: "975965", // Id de model de comunidades criado pelo DATOCMS
      ...request.body
    })

    response.json({
      dados: 'Algum dados',
      registroCriado: registroCriado
    })

    return;
  }

  response.status(404).json({
    message: 'Get não implementado, somente o POST'
  })
}