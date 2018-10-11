var view_chart = function () {

    this.viewChart = function () {
        element(by.id('patientInfoViewChart')).click();
        // browser.sleep(2000);
    };

    // this.viewChartClose = function(){
    //     element(by.id('closePatientViewChartBtn')).click();
    //     browser.sleep(3000);
    // };

    this.disableButton = function () {
        var findDisable = element(by.id('ptCardExpandBtn'));
        expect(findDisable.getAttribute('disabled')).toEqual('true');
        // expect(element(by.id('ptCardExpandBtn')).getAttribute('disabled')).toBe('true');
    };

    this.enableButton = function () {
        var findEnable = element(by.id('ptCardCollapseBtn'));
        expect(findEnable.isEnabled()).toBe(true);
    };

    this.collapseButton = function () {
        var button = element(by.buttonText('Collapse all'));
        button.click();
        //    browser.sleep(3000);
    };

    this.patientExpanded = function(){
        // console.log(patientInfoCollapse);
        return element(by.id('pVCFirstCardExpanded'));
    };

    this.patientCollapsed = function(){
        console.log();
        return element(by.id('pVCFirstCardCollapsed'));

    };

    this.buttonCheck = function(){
        // if( vcc-card-header !== vcc-card-header ng-hide )
        if(element(by.id('pVCFirstCardExpanded')) !== element(by.id('pVCFirstCardCollapsed')))
        var findFirst = element(by.id('ptCardExpandBtn'));
        expect(findFirst.isEnabled()).toBe(true);
        var findSecond = element(by.id('ptCardCollapseBtn'));
        expect(findSecond.isEnabled()).toBe(false);
    };






    this.expandButton = function () {
        element(by.id('ptCardExpandBtn')).click();
        browser.sleep(3000);
    };


};

module.exports = new view_chart();