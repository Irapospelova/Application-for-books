describe("Модалка добавления книги", () => {

    before(() => {
      cy.visitHomePage();
    });
  
    it("Успешная авторизация и проверка попапа добавления книги", () => {
      cy.login('bropet@mail.ru', '123');
      cy.get('h4').should('contain.text', 'Favorites');
      cy.get('.p-0 > .btn').contains('Add new').click();
      cy.get('.modal-header').should('be.visible');
      cy.get('.close').click();
      cy.get('.modal-header').should('not.exist');
    });

});
