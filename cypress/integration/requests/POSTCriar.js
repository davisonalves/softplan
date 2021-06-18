/// <reference types = "cypress"/>
it('Criar usuário', () => {
    var criarUser = `
mutation{
        insert_users(objects: {name: "testequatro", rocket: "Thor-Ablestar", timestamp: "2021-06-17", twitter: "teste.twitter.com"}, on_conflict: {constraint: users_pkey, update_columns: id}) {
          returning {
            id
            name
        }
    }
}
`
cy.request({
    method: 'POST',
    url: 'https://api.spacex.land/graphql/',
    body: {
       query: criarUser
    }
})
});