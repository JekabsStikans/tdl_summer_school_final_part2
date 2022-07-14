import PracticeFormPage from "../pageObjects/PracticeFormPage";
import SortablePage from "../pageObjects/SortablePage";



describe("Demoqa testing", () => {

    it("1. - Forms - Practice forms", () => {
        PracticeFormPage.visit();
        // - Fill in information
        //     - First Name
        PracticeFormPage.firstNameInput.type("Name");
        //     - Last Name
        PracticeFormPage.lastNameInput.type("Surname");
        //     - Email
        PracticeFormPage.userEmailInput.type("fake@mail.com");
        //     - Gender
        PracticeFormPage.genderWrapper.contains("Male").click();
        //     - Mobile number
        PracticeFormPage.userNumberInput.type("5647382976");
        //     - Date of birth
        PracticeFormPage.dateOfBirthInput.click();
        //         - Set value - 29/February/1984
        //         - Set date of birth value by using the calendar widget
        //         - Pass the values dynamically, e.g. create methods:
        //             - setYear(“1984”)
        PracticeFormPage.setYear("1984");
        //             - setMonth(“February”)
        PracticeFormPage.setMonth("February");
        //             - “setDate(“29”)”
        PracticeFormPage.setDate(29);
        //     - Subjects
        //         - Maths
        PracticeFormPage.subjectsInput.type("Math{enter}");
        //     - Hobbies
        PracticeFormPage.hobbiesWrapper.contains("Music").click();
        //     - Current address
        PracticeFormPage.currentAddressInput.type("Random street 57");
        //     - State
        PracticeFormPage.stateSelector.click();
        PracticeFormPage.stateSelector.type("Haryana{enter}");
        //     - City
        PracticeFormPage.citySelector.click();
        PracticeFormPage.citySelector.type("Karnal{enter}");
        // - Click Submit
        PracticeFormPage.submitButton.click();
        // - Validate Values in the table based on label value
        PracticeFormPage.finalTable.contains("Student Name").parent().contains("Name Surname").should("exist");
        PracticeFormPage.finalTable.contains("Student Email").parent().contains("fake@mail.com").should("exist");
        PracticeFormPage.finalTable.contains("Gender").parent().contains("Male").should("exist");
        PracticeFormPage.finalTable.contains("Mobile").parent().contains("5647382976").should("exist");
        PracticeFormPage.finalTable.contains("Date of Birth").parent().contains("29 February,1984").should("exist");
        PracticeFormPage.finalTable.contains("Subjects").parent().contains("Maths").should("exist");
        PracticeFormPage.finalTable.contains("Hobbies").parent().contains("Music").should("exist");
        PracticeFormPage.finalTable.contains("Address").parent().contains("Random street 57").should("exist");
        PracticeFormPage.finalTable.contains("State and City").parent().contains("Haryana Karnal").should("exist");	
    });

    it.only("2. - Interactions - Sortable", () => {
        SortablePage.visit();
        //     - Validate that the values are in order - One, Two, Three, Four, Five, Six
        const textSequence1 = ["One", "Two", "Three", "Four", "Five", "Six"];
        SortablePage.tabPaneList.find(".list-group-item").each(($el, index) => {
            cy.wrap($el).should("have.text", textSequence1[index]);
        });
        //     - Sort the values in following order - Six, Five, Four, Three, Two, One
        //     - Validate that the values are in order - Six, Five, Four, Three, Two, One
    });
});