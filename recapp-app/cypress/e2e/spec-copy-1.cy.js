describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe("render the home page", ()=>{
  it('renders correctly', ()=> {
    cy.visit('http://localhost:3000/')
    cy.get("#Landing").should("exist")

  })
})

describe('Navigation', () => {
  it('can navigate around the website', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="header-link-about"]').click();
    cy.get('main:contains("Practice")');

    cy.get('[data-cy="Glossary"]').click();
    cy.get('main weeks:contains("weeks")');
  });
});