import BasePage from "./basePage";

class PracticeFormPage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }

  static get firstNameInput(){
    return cy.get('#firstName');
  }

  static get lastNameInput(){
    return cy.get('#lastName');
  }

  static get userEmailInput(){
    return cy.get('#userEmail');
  }

  static get genderWrapper(){
    return cy.get('#genterWrapper');
  }

  static get userNumberInput(){
    return cy.get('#userNumber');
  }

  static get dateOfBirthInput(){
    return cy.get('#dateOfBirthInput');
  }

  static get dateOfBirthPicker(){
    return cy.get('.react-datepicker');
  }

  static setYear(text){
    this.dateOfBirthPicker.find(".react-datepicker__year-select").select(text);
  }

  static setMonth(text){
    this.dateOfBirthPicker.find(".react-datepicker__month-select").select(text);
  }

  static setDate(number){
    if(number > 15){
      this.dateOfBirthPicker.find("[aria-label*= "+ number.toString() +"]").last().click();
    }else{
      this.dateOfBirthPicker.find("[aria-label*= "+ number.toString() +"]").first().click();
    }
  }

  static get subjectsInput(){
    return cy.get('#subjectsInput');
  }

  static get hobbiesWrapper(){
    return cy.get('#hobbiesWrapper');
  }

  static get currentAddressInput(){
    return cy.get('#currentAddress');
  }

  static get stateSelector(){
    return cy.get('#state');
  }

  static get citySelector(){
    return cy.get('#city');
  }

  static get submitButton(){
    return cy.get('#submit');
  }

  static get finalTable(){
    return cy.get('tbody');
  }
}

export default PracticeFormPage;
