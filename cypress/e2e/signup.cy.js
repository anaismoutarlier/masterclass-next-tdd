describe("Signup flow", () => {
  it("Signup page displays correct form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#main")
      .should("be.visible")
      .within(() => {
        cy.get("form#signup")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("have.length", 4);
            cy.get("button[type='submit']")
              .should("be.visible")
              .should("contain.text", "Submit")
              .should("be.disabled");
          });
      });
  });

  it("User with correct information signs in and receives success message", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassword",
    };
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();
    cy.url().should("include", "signup/success");
    cy.get("#signup-success")
      .should("be.visible")
      .should("contain.text", "Congratulations");
  });

  it("User with incorrect information receives error message", () => {
    cy.visit("http://localhost:3000/signup");
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepasswor",
    };
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();
    cy.url().should("include", "signup/failure");
    cy.get("#signup-failure")
      .should("be.visible")
      .should("contain.text", "An error occurred");
  });
});
