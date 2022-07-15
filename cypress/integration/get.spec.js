describe('GET /characters', function () {

    const characters = [
        {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Hydra','Vingadores'],
            active: true
        },
        {
            name: 'Carol Susan Jane Danvers',
            alias: 'Capitã Marvel',
            team: 'Vingadores',
            active: true
        }, {
            name: 'Desconhecido',
            alias: 'Gamora',
            team: 'Guardiões da Galáxia',
            active: true
        }
    ]

    before(function () {
        cy.populateCharacters(characters)
    })


    it('Deve retornar uma lista de perosnagens', function () {

        cy.getCharacters().then(function (response) {
            expect(response.status).to.eql(200)
            expect(response.body).to.be.a('array')
            expect(response.body.length).greaterThan(0)
        })

    })

    it('Deve buscar personagem por nome', function(){
        cy.searchCharacters('Wanda').then(function(response){
            expect(response.status).to.eql(200) 
            expect(response.body.length).to.eql(1)
            expect(response.body[0].alias).to.eql('Feiticeira Escarlate')
            expect(response.body[0].team).to.eql(['Hydra','Vingadores'])
            expect(response.body[0].active).to.eql(true)
        })
    })


})

describe('GET /charcters/id', function(){

    const wandaMaxi  = {
        name: 'Wanda Maximoff',
        alias: 'Feiticeira Escarlate',
        team: ['Hydra','Vingadores'],
        active: true
    }

    

    context('Quando tenho uma personagem cadastrado', function(){

        before(function(){
            cy.postCharacter(wandaMaxi).then(function(response){
                Cypress.env('characterId', response.body.character_id)
            })
        })

        it('Deve buscar o personagem pelo ID', function(){
            const id = Cypress.env('characterId')
            cy.getCharacterById(id).then(function(response){
                expect(response.status).to.eql(200)
                expect(response.body.alias).to.eql('Feiticeira Escarlate')
                expect(response.body.team).to.eql(['Hydra','Vingadores'])
                expect(response.body.active).to.eql(true)
            })
        })
    })

    it('Deve buscar 404 ao buscar por ID não cadastrado', function(){
        const id = '62d1889cfc59dba1ea0d73ff'
        cy.getCharacterById(id).then(function(response){
            expect(response.status).to.eql(404)
            
        })
    })

})