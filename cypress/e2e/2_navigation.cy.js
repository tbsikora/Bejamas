import { navigationLinks } from "../support/consts/selectors";
import { navigationUrls, headersText } from "../support/consts/definitions";

describe("Main Navigation Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should navigate to the 'Works' page", () => {
    cy.get(navigationLinks.work).should("be.visible").click();
    cy.url().should("include", navigationUrls.work);
    cy.get("h1").should("be.visible").and("contain.text", headersText.work);
  });

  it("Should navigate to the 'Services' page", () => {
    cy.get(navigationLinks.services).should("be.visible").click();
    cy.url().should("include", navigationUrls.services);
    cy.get("h1").should("be.visible").and("contain.text", headersText.services);
  });

  it("Should navigate to the 'About' page", () => {
    cy.get(navigationLinks.about).should("be.visible").click();
    cy.url().should("include", navigationUrls.about);
    cy.get("h1").should("be.visible").and("contain.text", headersText.about);
  });

  it("Should navigate to the 'Blog' page through 'Learn' modal", () => {
    cy.get(navigationLinks.learn).should("be.visible").click({ force: true });
    cy.get('a[href="/blog"]').click({ force: true });
    cy.url().should("include", "/blog");
    cy.get("h1")
      .should("be.visible")
      .and("contain.text", headersText.learnBlog);
  });

  it("Should navigate to the 'Get in Touch' page", () => {
    cy.get(navigationLinks.getInTouch).should("be.visible").click();
    cy.url().should("include", navigationUrls.getInTouch);
    cy.get("h1")
      .should("be.visible")
      .and("contain.text", headersText.getInTouch);
  });
});
