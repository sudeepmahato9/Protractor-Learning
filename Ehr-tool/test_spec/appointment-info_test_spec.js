var util = require('util')
describe('EHR-TOOL e2e test automation/', function () {
    var question_page = require('../appointment-info/question_page.js');
    browser.ignoreSynchronization = true;
    browser.get("http://172.16.17.58/ehr-tool/dist/test-rig.html");
    // browser.get('http://172.16.17.59/mhe-ehr-tool/dist/test-rig.html');
    // browser.get('http://connect-nonprod.mheducation.com.s3.amazonaws.com/Externals/Development/common/ehr/1.0/test-rig.html');
    question_page.selectDropdown();
    browser.switchTo().frame('ext_012345678_1');
    browser.waitForAngular();
    browser.sleep(3000);

    var hasClass = function (element, cls) {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) != -1;
        });
    };

    var dateSelection = require('../appointment-info/dateSelection.js');
    var appointment = require('../appointment-info/appointment.js');
    var view_chart = require('../appointment-info/view_chart.js');
    var guarantor = require('../appointment-info/guarantor.js');
    var allergies = require('../appointment-info/allergies.js');
    var family = require('../appointment-info/family_medical_history.js');
    // var patientStatements = require('../appointment-info/patient_statements.js');
    it('should able to type the book name', function () {
        question_page.selectExerciseGoal();
    });
    // browser.sleep(3000);
    it('should able to select the question type', function () {
        question_page.selectQuestionType();
    });

    it('should able to select the book type', function () {
        question_page.bookType();
    });

    it('should find the Next date button and click it', function () {
        dateSelection.nextDateButton();
        // element(by.id('designNextBtn')).click();
        browser.sleep(3000);
    });

    it('should verify that it is on Date page', function () {
        dateSelection.date();
    });

    it('should select the month from drop-down', function () {
        dateSelection.month();
    });

    it('should select the year from drop-down', function () {
        dateSelection.year();
    });

    it('should find the next data button and click on it', function () {
        dateSelection.nextDataButton();
    });

    it('should find the "Appointments" text', function () {
        appointment.text();
    });

    it('should click on the "New Appointment" button', function () {
        appointment.newAppointementButton();
    });

    it('should find the "Appointment info" text', function () {
        appointment.appointmentText();
    });

    it('should type the name', function () {
        appointment.inputTextField();
    });

    it('should select the item from search result', function () {
        appointment.searchResults();
    });

    it('should click on view chart', function () {
        view_chart.viewChart();
    });

    //  it('should click on close button', function(){
    //     view_chart.viewChartClose();
    //  });

    it('should find the disable button', function () {
        view_chart.disableButton();
    });

    it('should find the enable button', function () {
        view_chart.enableButton();
    });

    it('should click on collapse button', function () {
        view_chart.collapseButton();
    });

    it('should be able to check the expand patientinfo', function () {
        var patientInfoExpand = view_chart.patientExpanded();
        expect(hasClass(patientInfoExpand, 'ng-hide')).toBe(true);
    });

    it('should be able to check the collapse patientinfo', function () {
        var patientInfoCollapse = view_chart.patientCollapsed();
        expect(hasClass(patientInfoCollapse, 'ng-hide')).toBe(false);
        browser.sleep(5000);
    });

    it('should be able to if else condition', function () {
        view_chart.buttonCheck();
    })

    it('should click on expand button', function () {
        view_chart.expandButton();
    });

    it('should be abl,e to scroll down the page', function(){
        guarantor.scrollDown();
    });

    it('should click on the guarantor collaspe button', function () {
        guarantor.collapseButton();
    });

     it('should click on the add guarantor cart', function(){
        guarantor.addGuarantorCart();
    });
    
    it('should click on the add guarantor button', function() {
        guarantor.clickAddGuarantor();
    });

    it('should check the element present in the guarantor cart', function() {
        guarantor.guarantorElement();
    });

    it('should find the input text field and enters the text', function(){
        guarantor.patientSearch();
    });

    it('should find the inline error message when no record found', function(){
        guarantor.noSearchResult();
    });

    it('should close the result by clicking on cross icon', function() { 
        guarantor.closeResultCrossIcon();
    })
    it('should be able to enter the valid patient in the input field', function() {
        guarantor.patientSearchFound();
    });

    it('should be able to open the relationship dropdown', function() {
        guarantor.relationshipDropdown();
    });
    
    it('should be able to open the Emergency Contact dropdown', function() {
        guarantor.emergencyContact();
    });
    
    it('should click on the done button', function(){
        guarantor.doneButton();
    });

    it('should click on the cancel and close button', function() {
        guarantor.cancelButton();
    });

    it('should check the inline error messages', function() {
        guarantor.inlineErrorMessage();
    });

    it('should click on edit guarantor button', function() {
        guarantor.editGuarantor();
    });

    it('should click on the guarantor expand button', function() {
        guarantor.guarantorExpand();
    });

    it('should click on the allergy cart expand button', function() {
        allergies.collapseAllergy();
    });

    it('should click on the add allergy button', function() {
        allergies.allergyAddButton();
    });

    it('should click on the allergy type dropdown', function() {
        allergies.allergyType();
    });

    it('should be able to write symptoms for allergies',function(){
        allergies.allergyDetails();
    });

    it('should be able to click on onset dropdown and should be able to select an item', function() {
        allergies.onset();
    });

    it('should be able to click on the date piker', function() {
        allergies.allergyDatePiker();
    });

    it('should be able to click on date picker cancel button', function(){
        allergies.allergyDatePickerCancel();
    });

    it('should be able to select the severity from the severity dropdown', function() {
        allergies.severity();
    })

    it('should be able to select the status from status dropdown', function(){
        allergies.status();
    });

    it('should be able to type the adverse reaction on the text field', function(){
        allergies.reaction();
    });

    it('should be able to find the other sensetivities text field and type on it', function() {
        allergies.sensitivities();
    });

    it('should click on the done button to close the form', function(){
        allergies.allergyDoneButton();
    });

    it('should be able to click on cancel and close button of the form', function(){
        allergies.allergyCloseCancel();
    });

    it('should be able to validate the inline error messages', function(){
        allergies.inlineErrorAllergies();
    });

    it('should edit the allergy cart', function(){
        allergies.allergyEdit();
    });

    it('should be able to expand the family medical history', function(){
        family.collapseFamilyButton();
    });

    it('should be able to click on "add family medical history" button',function() {
        family.addFamilyButton();
    });

    it('should be able to click on relationship dropdown', function(){
        family.relationshipDropdown();
    });

    it('should be able to scroll down the dropdown', function(){
        family.dropDownScrollDown();
    });

    it('should be able to scroll up the dropdown', function(){
        family.dropDownScrollUp();
    });

    it('should br able to enter the diagnosis', function() {
        family.diagnosisText();
    });

    it('should select the item from deceased dropdown', function() {
        family.deceasedDropdown();
    });

    it('should be able to enter the age of death', function(){
        family.deathAge();
    });

    it('should be able to enter the reason for death', function() {
        family.deathReason();
    });

    it('should be able to click on done b utton',function() {
        family.familyDoneButton();
    });

    it('should be able to click on the cancel and close button', function() {
        family.familyCloseCancel();
    });

    it('should be able to check the inline validation', function() {
        family.familyInlineError();
    });

    it('should be able to edit the family cart', function(){
        family.familyEdit();
    });

    /* it('should be able to check the conditions', function() {
        family.ifElseCondition();
    }); */
    // it('should click on the guarantor expand button', function() {
    //     guarantor.expandButton();
    // });
});