describe('DELETE /characters/id', function(){

  

     const jeanGrey = {
        name: 'Jean Grey',
        alias: 'Fénix',
        team: [
            'X-men'
        ],
        active: true
     }

     context('Quando tenho um personagem cadastrado', function(){

        before(function(){
            cy.postCharacter(jeanGrey).then(function(response){
                Cypress.env('characterId', response.body.character_id)
            })
        })

        it('Deve remover o personagem pelo ID', function(){
            const id = Cypress.env('characterId')
            cy.deleteCharacterById(id).then(function(response){
                expect(response.status).to.eql(204)
            })
        })
     }) 
})