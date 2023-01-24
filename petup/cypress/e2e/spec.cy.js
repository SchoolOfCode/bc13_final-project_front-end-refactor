describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000");
    /* ==== Generated with Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#pets').select('2');
    cy.get('.input-field').clear('W');
    cy.get('.input-field').type('WIgan');
    cy.get(':nth-child(1) > .btn').click();
    cy.get('#dog-btn-check').check({force: true});
    cy.get('.budget').clear('9');
    cy.get('.budget').type('90');
    cy.get('.search-button').click();
    cy.get('.search-input-field').click();
    // cy.get('#pets').select('home sitting');
    cy.get('#pet-type').select('Cat');
    cy.get('.contact-us').click();
    cy.get('.title > a').click();
    cy.get('[href="/"] > img').click();
    /* ==== End Cypress Studio ==== */
  })
  })
//     cy.get('#pets').select('2');
//     cy.get('.input-field').clear('w');
//     cy.get('.input-field').type('wigan');
//     cy.get(':nth-child(1) > .btn').click();
//     cy.get('#dog-btn-check').check({force: true});
//     cy.get('.budget').clear('9');
//     cy.get('.budget').type('90');
//     cy.get('.search-button').click();
//     cy.get('[href="/"] > img').click();
//     cy.get('.title > a').click();
//     cy.get('[href="/"] > img').click();
//     /* ==== End Cypress Studio ==== */
//   })
// })
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit("http://localhost:3000");
//   } )
// })
// describe('takes in the user inputs', () => {
//   test('pets select', () => {
//     cy.get('#pets').select('2');
//   } )
//   test('city input', () => {
//     cy.get('.input-field').type('wigan');
//   } )
//   test('radio button', () => {
//     cy.get(':nth-child(1) > .btn').click({force: true});
//     cy.get('#dog-btn-check').check();
//   } )
//   it('rate input', () => {
//     cy.get('.budget').clear('9');
//     cy.get('.budget').type('90');
//   } )
//   it('search button works', () => {
//     cy.get('.search-button').click();
//   } )
// })
// describe('Returns on home page after clicking logo', () => {
//   it('visits Url', () => {
//     cy.get('[href="/"] > img').click();
//   } )
// })
// describe('Goes to sitter page', () => {
//   it('visits Url', () => {
//     cy.get('.title > a').click();
//   } )
// })
// describe('Returns on home page after clicking logo', () => {
//   it('visits Url', () => {
//     cy.get('[href="/"] > img').click();
//   } )
// })