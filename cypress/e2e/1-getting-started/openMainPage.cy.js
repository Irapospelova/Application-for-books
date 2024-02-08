describe("Проверка главной страницы на наличие элемента с классом 'ml-2' и текстом 'Books list'", () => {

  it("Открывает страницу и выполняет проверку", () => {
    cy.visitHomePage();
    cy.get(".ml-2").should("exist");
    cy.get(".ml-2").should("include.text", "Books list");
  });

});
