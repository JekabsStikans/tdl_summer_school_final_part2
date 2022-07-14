import BasePage from "./basePage";

class PracticeFormPage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }

  static get usernameInput(){
    return cy.get('[data-test="username"]');
  }
}

export default PracticeFormPage;
