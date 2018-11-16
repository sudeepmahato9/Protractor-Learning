var util = require('util');
describe('EHR-TOOL e2e test automation/', function () {
    var question_page = require('../appointment-info/question_page.js');
    browser.ignoreSynchronization = true;
    browser.get("http://172.16.17.58/ehr-tool/dist/test-rig.html");
    // browser.get("http://172.16.21.121/projects/ezto-ehr-content-tool/dist/test-rig.html ");
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
    var patientStatements = require('../appointment-info/patient_statements.js');
    it('should able to create an exercise goal', function () {
       
        question_page.selectExerciseGoal();
        question_page.selectQuestionType();
        question_page.bookType();
        browser.sleep(3000);
    });

    it('should be able to set the "todays" date', function(){
        dateSelection.nextDateButton();
        browser.sleep(3000);
        dateSelection.date();
        dateSelection.month();
        dateSelection.year();
        dateSelection.nextDataButton();
        browser.sleep(3000);
    });

    it('should be able to check the patient statements', function(){
        patientStatements.accountModule();
        patientStatements.patientStatementsActivate();
        patientStatements.chartNoRange();
        patientStatements.dropDownScrollDown();
        
    });

    it('should be able to enter and choose the date', function(){
        patientStatements.dateOfServiceFrom();
        patientStatements.ifElseMatch();
        patientStatements.dateOfServiceTo();
    });

    it('should be able to click on the generate statement button', function() {
        patientStatements.generateStatementNa();
        patientStatements.generateStatement();
    });

    it('should print the generated statement', function() {
        patientStatements.printReport();
        patientStatements.printComplete();
        patientStatements.printCompleteClose();
        patientStatements.reportCloseBtn();
    });

    it('should generate reports more than 5 times', function(){
        patientStatements.generateReportsFiveTimes();
    });

    it('should count the generated statements', function() {
        patientStatements.listOfStatements();
    });

    it('should be able to clear the filter', function() {
        patientStatements.clearFilter();
    });
});