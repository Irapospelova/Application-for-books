describe("Удаление книги из избранного", () => {
    before(() => {
        cy.visitHomePage();
        cy.login('bropet@mail.ru', '123');
        cy.get('h4').should('contain.text', 'Favorites');
    });

    it("Yдалить книгу 'Книга 1'", () => {
        cy.get('h4').click();
        cy.get('.card-title')
          .contains('Книга 1')
          .parents('.card')
          .find('.btn')
          .contains('Delete from favorite')
          .click();
        cy.get('.card-title').should('not.contain.text', 'Книга 1'); 
    });
});
