describe("Добавление книги в избранное", () => {

    before(() => {
      cy.visitHomePage();
      cy.login('bropet@mail.ru', '123');
      cy.get('h4').should('contain.text', 'Favorites');
    });
  
    it("Добавить в избранное", () => {
      cy.get('[href="book/b17a4313-a042-4e4e-ac8a-1c85a3866c8a"] > .h-100 > .card-footer > .btn').click(); 
      cy.get('h4').click(); // Нажать на элемент h4
      cy.get('.card-title').should('contain.text', 'Книга 1'); 
      cy.get('.card-footer > .btn').should('contain.text', 'Delete from favorite'); 
    });

   });
