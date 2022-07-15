describe('POST /characters', function () {

    it('Deve cadastrar um personagem', function () {
        const character = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Hydra', 'Vingadores'],
            active: true
        }

        cy.postCharacter(character)
            .then(function (response) {
                expect(response.status).to.eql(201)
                cy.log(response.body.character_id)
                expect(response.body.character_id.length).to.eql(24)
            })
    })


    context('quando o personagem já existe', function () {

        const character = {
            name: 'Natalia Alianovna Romanova',
            alias: 'Viúva Negra',
            team: ['S.H.I.E.L.D.', 'Vingadores'],
            active: true
        }

        before(function () {
            cy.postCharacter(character).then(function (response) {
                expect(response.status).to.eql(201)

            })

        })
        it('não deve cadastrar duplicado', function () {
            cy.postCharacter(character).then(function (response) {
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })


        })
    })
})

