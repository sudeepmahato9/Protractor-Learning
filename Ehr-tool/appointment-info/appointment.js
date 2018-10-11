var appointment = function () {

    this.text = function () {
        // browser.sleep(10000);
        var text = element(by.id('appointment'));
        expect(text.getText()).toBe("Appointments");
    };

    this.newAppointementButton = function () {
        element(by.id('appointmentButton')).click();
        // browser.sleep(3000);
    };

    this.appointmentText = function () {
        var text = element(by.id('appointmentInfoTabBtn'));
        expect(text.getText()).toBe('Appointment info');
    };

    this.inputTextField = function () {
        element(by.id('searchPatientInput')).click();
        element(by.id('searchPatientInput')).sendKeys('kim');
        // browser.sleep(2000);

    };

    this.searchResults = function () {
        element(by.id('patientDataList')).click();
    };
};
module.exports = new appointment();