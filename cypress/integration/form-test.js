// variabel input

var inputfirstname = "wahyu"
var inputlastname = "adjie"
var userEmail = "wahyuadjieprasetya1@gmail.com"
var userNumber = "0289929292"
var dateOfBirthInput = "Jan 2022"
var subjectsInput = "Hindi"
var currentAddress = "jalan H. kiming"

var testPositif = true


if (testPositif == true) {
    it('form-practice-test', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type(inputfirstname)
        cy.get('#lastName').type(inputlastname)
        cy.get('#userEmail').type(userEmail)
        cy.get('[type="radio"]').first().check({ force: true })
        cy.get('#userNumber').type(userNumber)
        cy.get('.react-datepicker__input-container')
        cy.get('#subjectsInput').type(subjectsInput).click()
        cy.get('[type="checkbox"').first().check({ force: true })
        cy.get('textarea').type(currentAddress)
        cy.get('form').submit()
    })
} else {
    var inputfirstname = "123411"
    var inputlastname = "ewewewe"
    var userEmail = "wahyu-123"
    var userNumber = "122222222222222222222222222222"
    var subjectsInput = "ddddddddsdsdwq"
    var currentAddress = "rr"
    it('form-practice-test', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type(inputfirstname)
        cy.get('#lastName').type(inputlastname)
        cy.get('#userEmail').type(userEmail)
        cy.get('[type="radio"]').first().check({ force: true })
        cy.get('#userNumber').type(userNumber)
        cy.get('.react-datepicker__input-container')
        cy.get('#subjectsInput').type(subjectsInput).click()
        cy.get('[type="checkbox"').first().check({ force: true })
        cy.get('textarea').type(currentAddress)
        cy.get('form').submit()
    })
}


