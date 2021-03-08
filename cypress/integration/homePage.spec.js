import {question} from '../page_objects/question.js'
import {lexplore} from '../page_objects/userLoginValidation.js'
const data = require("../fixtures/data.json")
const dataTwo = require("../fixtures/dataTwo.json")
const dataData = require("../fixtures/dataData.json")

describe("Lexplore test", () => {
    before(() => {
        cy.visit('https://check.lexplore.com/instructions?id=1')
    })

    it ('Visit page 1', () => {
        cy.get('p')
         .should('contain',data.pageOneText )

    })

    it("NextPageButton2", () => {
        cy.get(data.buttonNext).click()
        
    })

    it ('Visit page 2', () => {
        cy.get('p')
         .should('contain',data.pageTwoText )

    })

    it("NextPageButton3", () => {
        cy.get(data.buttonNext).click()
        
    })

    it ('Visit page 3', () => {
        cy.get('p')
         .should('contain',data.pageTreeText )

    })

    it("NextPageButton4", () => {
        cy.get(data.buttonNext).click()
        
    })

    it ('Visit page 5', () => {
        cy.get('p')
         .should('contain',data.pageFourText )

    })

    it("NextPageButton5", () => {
        cy.get(data.buttonNext).click()
        
    })

    it("NextPageButton", () => {
        cy.get(data.buttonNext).click()
        
    })

    it("EnterUser",() =>{
        lexplore.toType(dataTwo.mode,dataTwo.grade,dataTwo.opinion,dataTwo.email)
        cy.get(dataTwo.button).click()
    })    

    it ('Select words', () => {
        for (let i = 0; i < 5; i++) {          
            cy.get(dataTwo.reading).eq(Math.floor(Math.random() * 20)).click()
        }
    })

    it("StartReading", () => {
        cy.get(dataTwo.startReadingButton).click()
        cy.get(dataTwo.stopReadingButton).click()
        
    })

    it ('Select words Second', () => {
        for (let i = 0; i < 5; i++) {          
            cy.get(dataTwo.reading).eq(Math.floor(Math.random() * 20)).click()
        }
    })
    it("StartReading Second", () => {
        cy.get(dataTwo.startReadingButton).click()
        cy.get(dataTwo.stopReadingButton).click()
        
    })

    it("EnterQuestion",() =>{
        question.toType(dataData.eat,dataData.called,dataData.enemies,dataData.tentacles)
         cy.get(dataTwo.button).click()
    })  
    


})