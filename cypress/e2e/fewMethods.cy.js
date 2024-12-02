///<reference types= "cypress"/>

context("to check context", ()=>{

    beforeEach("to check before block for each test", ()=>{
        cy.log("I am before block")
    })

    describe("Covering few tests", ()=>{
        it("just checking", ()=>{
            cy.log("This is a test")
            cy.wait(5000)
            cy.log("to check if it waits for 5 seconds")
        })
        it("just checking2", ()=>{
            cy.log("This is a test2")
            //cy.wait(5000)
            cy.log("to check if it comes to test 2")
        })
        
        })
})

