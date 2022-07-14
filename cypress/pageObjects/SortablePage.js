import BasePage from "./basePage";

class SortablePage extends BasePage {
  static get url() {
    return "https://demoqa.com/sortable";
  }

  static get tabPaneList(){
    return cy.get('#demo-tabpane-list');
  }
}

export default SortablePage;
