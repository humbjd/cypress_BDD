/// <reference types="cypress" />

import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import register_page from '../pages/register_page'

const name = 'OnlyTest'
const email = 'test@test.com'
const password = '123456'

// Cadastro com campo nome vazio
Given("I am on register screen", () => {
    home_page.accessRegister()
})

When("I click on Register", () => {
    register_page.doRegister()
})

Then("I see message {string} on register", (message) => {
    register_page.checkErrorMessage(message)
})

// Cadastro com campo e-mail invalido
Given("I fill name", () => {
    register_page.fillName(name)
})

Given("I fill e-mail {string}", () => {
    register_page.fillEmail(email)
})

Given("I fill with e-mail {string}", () => {
    register_page.fillEmail("invalidEmail")
})

Given("I fill password {string}", () => {
    register_page.fillPassword(password)
})

Given("I fill with password {string}",() => {
    register_page.fillEmail('123')
})

// Cadastro com campo senha vazio
Given("I fill my credentials of register", () => {
    register_page.fillName(name)
    register_page.fillEmail(email)
    register_page.fillPassword(password)
})

Then("I see success message on register", () => {
    register_page.checkSucessMessage(name)
})