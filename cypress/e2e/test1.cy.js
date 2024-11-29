///<reference types ="cypress"/> 
// the above command is to ensure that we get cypress library so that code can be helpful

it('Testing google page',()  => {
    cy.visit('https://google.com')
    cy.wait(15000)
    cy.get('#APjFqb3', {timeout:6000}).type('Paul Pogba{enter}')
    //cy.contains('Google Search').click()
})

it('Testing google page',()  => {
cy.log('This is a welcome text')
})