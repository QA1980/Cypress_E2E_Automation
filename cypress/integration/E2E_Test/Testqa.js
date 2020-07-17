/// <reference types="cypress" />



/// <reference types="cypress" />

describe('Valid login',()=> {
  it('navigate to home page',()=>{
  cy.visit('https://www.rewardbee.com')
    cy.get('._1pcZ335O').click
    cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(1) > a').click()
    cy.get('#email').type('testrewardbee12@gmail.com').blur()
    cy.get('#password').type('test1234').blur()
    cy.get('.btn-default').click()
  })
})


