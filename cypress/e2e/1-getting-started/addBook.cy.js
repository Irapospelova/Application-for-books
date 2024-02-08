describe("Модалка добавления книги", () => {

    beforeEach(() => {
        cy.visitHomePage();
        cy.login('bropet@mail.ru', '123');
        cy.get('h4').should('contain.text', 'Favorites');
    });

    it("Проверка валидации поля title", () => {
        cy.get('.p-0 > .btn').contains('Add new').click();
        cy.get('#title').invoke('val', '');
        cy.get('form > .ml-2').click();
        cy.get('#title').then($el => $el[0].checkValidity()).should('be.false');
        cy.get('.close').click();
    });

    it("УспешнОе добавление книги", () => {
        cy.get('.p-0 > .btn').contains('Add new').click();
        cy.get('.modal-header').should('be.visible');
        cy.get('#title').type('Книга 1');
        cy.get('form > .ml-2').click();
        cy.get('[href="book/58a77314-f66b-4bc3-84d7-04d150d758b2"] > .h-100 > .card-body');
      });
      
});
