describe("avGrade", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });
  it("should contain avGrade as the heading", () => {
    cy.contains("h1", "avGrade");
  });
  it("should return the weighted grade", () => {
    cy.get("#weightedGrade").should("have.value", "");
  });
});
