describe("Авторизация", () => {

    beforeEach(() => {
      cy.visitHomePage();
    });
  
    it("Успешнаная авторизация", () => {
      cy.login('bropet@mail.ru', '123');
      cy.get('.pt-2').should('exist');
      cy.get('.ml-auto > .ml-2').should('exist');
        });

    it("Авторизация с невалидным логином", () => {
        cy.login('1', '123');
        cy.get('#mail').then($el => {
            expect($el[0].checkValidity()).to.be.false;
          });
      });

    it("Авторизация с неправильным паролем", () => {
        cy.login('bropet@mail.ru', '5');
        cy.get('.mb-3').should('include.text', 'Неправильая почта или пароль');
      });
  });
