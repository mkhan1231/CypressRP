///<reference types ="cypress"/>

describe("Implicit assertions", ()=>{

    it("to check assertions", ()=>{
        cy.visit("https://www.fidelity.com/")
        cy.title().should('eq', 'Fidelity Investments - Retirement Plans, Investing, Brokerage, Wealth Management, Financial Planning and Advice, Online Trading.')
        //cy.contains('Assertions').click()
        cy.wait(3000)
        cy.scrollTo("bottom")
        cy.get('section > :nth-child(14)').should('be.visible').and('have.text', '782377.113.0')
        //.should('be.visible')
        //.should('be.selected')
        //.should('be.disabled')
        cy.scrollTo('topRight')
        cy.get('.pntlt > .pnlogout > .pnls > a').should('be.visible')
        
        //MouseHover
        cy.get('#nsat').trigger('mouseover','bottom').click()

    })
})