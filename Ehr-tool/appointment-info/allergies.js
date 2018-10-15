var allergies = function() {
    browser.executeScript('window.scrollTo(0,10000);');
    console.log('+++console++++')

    this.scrollDown = function() {
        var scrolldown = $$('.vcc-card-header').get(1);
        browser.controlFlow().execute(function() {
            browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
        });
        // browser.sleep(3000);
    };

    this.collapseAllergy = function() {
        element(by.id('pVCNinthCardCollapsed')).click();
       
    };

    this.allergyAddButton = function() {
        element(by.id('pVCNinthCardAddBtn')).click();
        browser.sleep(3000);
    };

    this.allergyElement = function() {
      var name =  element(by.className('vcc-card-title ng-scope'));
      expect(name.getText()).toBe('Allergies');
    };

    this.allergyType = function() {
        element(by.id('allergyTypeDD')).click();
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function(type){
            expect(type.length).toBe(4);
            expect(type[0].getText()).toBe('Drug allergy');
            expect(type[1].getText()).toBe('Food allergy');
            expect(type[2].getText()).toBe('Environment');
            expect(type[3].getText()).toBe('No known allergies');
            element(by.id('listItem2')).click();
        });
    };

    this.allergyDetails = function() {
        element(by.id('allergyDetailsBtn')).click();
        element(by.id('allergyDetailsBtn')).sendKeys('Food allergies');
    };

    this.onset = function() {
        element(by.id('onSetDD')).click();
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function(items) {
            expect(items.length).toBe(3);
            expect(items[0].getText()).toBe('Childhood');
            expect(items[1].getText()).toBe('Adulthood');
            expect(items[2].getText()).toBe('Unknown');
            element(by.id('listItem2')).click();
        });
    };

    this.allergyDatePiker = function() {
        element(by.id('allergyDtp')).click();
        element(by.id('dpMonthDropdown')).click();
        element(by.id('listItem2')).click();
        element(by.id('dpYearDropdown')).click();
        element(by.id('listItem2')).click();
        var hoursIncrement =  element(by.xpath('//a[@data-action="incrementHours"]/span'));
        
            for (i = 0; i <5; i++) {
                hoursIncrement.click();
            }
            browser.sleep(3000);

        var minutesIncrement = element(by.xpath('//a[@data-action="incrementMinutes"]/span'));
         
            for (i=0; i<5; i++) {
                minutesIncrement.click();
            }
       browser.sleep(3000);

       var minutesDecrement = element(by.xpath('//a[@data-action="decrementMinutes"]/span'));

            for (i=0; i<10; i++) {
                minutesDecrement.click(); 
            }
            browser.sleep(3000);
        // var day = element(by.className('day'));
        // expect(day).toBe('15');
        element(by.id('am-pm')).click();
        element(by.id('dtpDoneButton')).click();
        // browser.sleep(3000);
    };

    this.allergyDatePickerCancel = function() {
        element(by.id('allergyDtp')).click();
        element(by.id('dtpCancelButton')).click();
        // browser.sleep(3000);
    };

    this.severity = function(){
        element(by.id('severityDD')).click();
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function(items){
            expect(items.length).toBe(4);
            expect(items[0].getText()).toBe('Very mild');
            expect(items[1].getText()).toBe('Mild');
            expect(items[2].getText()).toBe('Moderate');
            expect(items[3].getText()).toBe('Severe');
            element(by.id('listItem3')).click();
        });
    };

    this.status = function() {
        element(by.id('allergyFormStatus')).click();
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function(items) {
            expect(items.length).toBe(2);
            expect(items[0].getText()).toBe('Active');
            expect(items[1].getText()).toBe('Inactive');
            element(by.id('listItem0')).click();
        });
    };

    this.reaction = function() {
       var reaction =  element(by.id('allergyAdverseReaction')).click();
        reaction.sendKeys('An adverse drug reaction is an injury caused by taking a medication');
        // expect(reaction.getAttribute('maxlength')).toEqual('10');
        if(expect(reaction.getAttribute('maxlength')).toEqual('10'))
        {
            console.log("maxlength");
        }
        else{
            console.log('error');
        }
        browser.sleep(3000);
    };

    this.sensitivities = function() {
        var sense =  element(by.id('allergySenstivities')).click();
        sense.sendKeys('rug reaction is an injury caused by taking a medication');
        expect(sense.getAttribute('maxlength')).toEqual('100');
    };

    this.allergyDoneButton = function() {
        element(by.id('allergyDoneBtn')).click();
    };

    this.allergyCloseCancel = function(){
        this.allergyAddButton();
        element(by.id('allergyCloseBtn')).click();
        this.allergyAddButton();
        element(by.id('allergyCancelBtn')).click();
    };

    this.inlineErrorAllergies = function(){
        this.allergyAddButton();
        this.allergyDoneButton();
        var errorAllergy = element(by.id('dedMetErr'));
        expect(errorAllergy.getText()).toBe('Choose allergy type');
        this.allergyType();
        this.allergyDoneButton();
        // browser.sleep(3000);
    };

    this.allergyEdit = function(){
        element(by.id('pVCNinthCardEditBtn_0')).click();
        // this.allergyType();
        element(by.id('allergyTypeDD')).click();
        element(by.id('listItem1')).click();
        this.allergyDetails();
        this.onset();
        this.allergyDoneButton();
        browser.sleep(3000);
    };
};
module.exports = new allergies();