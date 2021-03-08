class Lexplore {
    get mode() {
        return cy.get(':nth-child(1) > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get grade() {
        return cy.get(':nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get opinion() {
        return cy.get(':nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container')
    }
    get email() {
        return cy.get("input[type='email']")
    }
  
    toType(mode,grade,opinion,email){
        this.mode.type("parent{enter}")
        this.grade.type("4{enter}")
        this.opinion.type("Average{enter}")
        this.email.type("blabla@bice.com{enter}")
    }
}
export const lexplore = new Lexplore ()