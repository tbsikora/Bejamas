import { navigationLinks, inquiryForm } from "../support/consts/selectors";
import {
  generateUserEmail,
  generateUserMessage,
} from "../support/consts/generators";
import { placeholdersText, labelsText, headersText } from "../support/consts/definitions";

describe("Contact Form Functionality and Sending Inquiry", () => {
  before(() => {
    cy.visit("/");
  });

  it('Should navigate to "Get in Touch" page, verify form labels and placeholders, and reset inputs after submission', () => {
    const email = generateUserEmail();
    const message = generateUserMessage(200);

    cy.get(navigationLinks.getInTouch)
      .should("be.visible")
      .click()
      .url()
      .should("include", "/get-in-touch");

    cy.get("h1").should("be.visible").and("have.text", headersText.getInTouch);

    cy.get(inquiryForm.emailLabel)
      .should("be.visible")
      .and("have.text", labelsText.email);
    cy.get(inquiryForm.mailInput)
      .should("be.visible")
      .should("have.attr", "placeholder", placeholdersText.email)
      .click()
      .type(email);

    cy.get(inquiryForm.messageLabel)
      .should("be.visible")
      .and("have.text", labelsText.message);
    cy.get(inquiryForm.messageInput)
      .should("be.visible")
      .should("have.attr", "placeholder", placeholdersText.message)
      .click()
      .type(message);

    cy.get(inquiryForm.sendButton).should("be.visible").click();

    cy.wait(5000);
    cy.get(inquiryForm.mailInput).should("have.value", "");
    cy.get(inquiryForm.messageInput).should("have.value", "");
  });
});
