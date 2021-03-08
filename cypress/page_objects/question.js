class Question {
    get eat() {
        return cy.get(':nth-child(1) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get called() {
        return cy.get(':nth-child(2) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get enemies() {
        return cy.get(':nth-child(3) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get tentacles() {
        return cy.get(':nth-child(4) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container')
    }
  
    toType(eat,called,enemies,tentacles){
        this.eat.type("Swordfish and turtles{enter}")
        this.called.type("A bloom{enter}")
        this.enemies.type("They bite them{enter}")
        this.tentacles.type("To kill the plants{enter}")
    }
}
export const question = new Question ()