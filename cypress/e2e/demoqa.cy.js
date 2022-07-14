import PracticeFormPage from "../pageObjects/PracticeFormPage";



describe("Demoqa testing", () => {

    it.only("1. - Forms - Practice forms", () => {
        PracticeFormPage.visit();
        // - Fill in information
        //     - First Name
        //     - Last Name
        //     - Email
        //     - Gender
        //     - Mobile number
        //     - Date of birth
        //         - Set value - 29/February/1984
        //         - Set date of birth value by using the calendar widget
        //         - Pass the values dynamically, e.g. create methods:
        //             - setYear(“1984”)
        //             - setMonth(“February”)
        //             - “setDate(“29”)”
        //     - Subjects
        //         - Maths
        //     - Hobbies
        //     - Current address
        //     - State
        //     - City
        // - Click Submit
        // - Validate Values in the table based on label value
    });

    it("2. - Interactions - Sortable", () => {
        //   - ( https://demoqa.com/sortable )  - 
        //     - Validate that the values are in order - One, Two, Three, Four, Five, Six
        //     - Sort the values in following order - Six, Five, Four, Three, Two, One
        //     - Validate that the values are in order - Six, Five, Four, Three, Two, One
    });
});