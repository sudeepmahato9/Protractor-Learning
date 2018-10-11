var guarantor = function(){
    browser.executeScript('window.scrollTo(0,10000);');
    console.log('+++console++++')

    this.scrollDown = function() {
        var scrolldown = $$('.vcc-card-header').get(1);
        browser.controlFlow().execute(function() {
            browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
        });
        // browser.sleep(3000);
    };
   
    // browser.actions().mouseMove(element).perform();
    

    this.collapseButton = function() {
        element.all(by.css('.card-collapse')).click();
        // browser.sleep(13000);
    };

    this.addGuarantorCart = function() {
       
        element(by.id('pVCSvnteenthCardCollapsed')).click();
        // browser.sleep(3000);
    };

    this.clickAddGuarantor = function() {
        element(by.id('pVCSvnteenthCardAddBtn')).click();
        
    };
    
    this.guarantorElement = function() {
        var guarantor = element(by.className('common-popup-title ng-scope'));
        expect(guarantor.getText()).toBe('Guarantor');

        // var dob = element(by.className('paddingRightClass'));
        // expect(dob.partialLinkText()).toBe('Chart');
        // browser.sleep(3000);
    };

    this.patientSearch = function() {
        element(by.id('searchPatientInput')).click();
        element(by.id('searchPatientInput')).sendKeys('eee');
        // browser.sleep(3000);
    };

    this.noSearchResult = function() {
        var result = element(by.className('no-patient-found-msg ng-scope'));
        expect(result.getText()).toBe('No patient record found.');
    };

    this.closeSearchResult = function(){
        element(by.className('search-patient-close-btn ehr-s-font ng-scope')).click();
        // browser.sleep(3000);
    };

    this.closeResultCrossIcon = function() {
        element(by.className('patient-search-close-btn')).click();
        // browser.sleep(3000);
    };

    this.patientSearchFound = function() {
        element(by.id('searchPatientInput')).click();
        element(by.id('searchPatientInput')).sendKeys('kys');
        element(by.id('searchPatientList0')).click();
        // browser.sleep(3000);
    };

    this.relationshipDropdown = function() {
        element(by.id('fInfoRelationship')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (items) {
            expect(items.length).toBe(6);
            expect(items[0].getText()).toBe("Mother");
            expect(items[1].getText()).toBe("Father");
            expect(items[2].getText()).toBe("Sibling");
            expect(items[3].getText()).toBe("Spouse");
            expect(items[4].getText()).toBe("Child");
            expect(items[5].getText()).toBe("");
            element(by.id('listItem3')).click();
            // browser.sleep(3000);
        });

    this.emergencyContact = function() {
        element(by.id('fInfoContact')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function(elems) {
            expect(elems.length).toBe(2);
            expect(elems[0].getText()).toBe("Yes");
            expect(elems[1].getText()).toBe("No");
            element(by.id('listItem0')).click();
            // browser.sleep(3000);
        });
    }; 
    
    this.doneButton = function() {
        element(by.id('familyInfoDoneBtn')).click();
    };

    this.cancelButton = function() {
        this.clickAddGuarantor();
        // browser.sleep(3000);
        element(by.id('familyInfoCloseBtn')).click();
        // browser.sleep();
        this.clickAddGuarantor();
        // browser.sleep(3000);
        element(by.id('familyInfoCancelBtn')).click();
        // browser.sleep(3000);
    };

    this.inlineErrorMessage = function() {
        this.clickAddGuarantor();
        // browser.sleep(3000);
        this.doneButton();
        // browser.sleep(3000);
        var errorMesssagePatient = element(by.className('error-msg pat-src-err'));
        expect(errorMesssagePatient.getText()).toBe('Please select a patient');
        this.patientSearchFound();
        this.doneButton();
        var errorMesssageRelation = true;
        element(by.className('error-msg ng-scope'));
        expect(errorMesssageRelation).toBe(true);
        // browser.sleep(3000);
        this.relationshipDropdown();
        this.doneButton();
        // browser.sleep(3000);
    };

    this.editGuarantor = function() {
        element(by.id('pVCSvnteenthCardEditBtn_0')).click();
        browser.sleep(3000);
        element(by.className('ehr-fl-input'));
        // element(by.id('patientInfoCardCloseBtn')).click();
        element(by.className('patient-info-close-btn patient-info-close-simpleBtn ng-scope')).click();
        element(by.id('searchPatientInput')).sendKeys('kev');
        element(by.id('searchPatientList0')).click();
        element(by.id('fInfoRelationship')).click();
        element(by.id('listItem3')).click();
        this.doneButton();
        // browser.sleep(13000);
    };

    this.guarantorExpand = function() {
        element(by.id('pVCSvnteenthCardExpanded')).click();
    };
    };

    // this.selectPatient = function(){
    //     element(by.id('searchPatientList0')).click();
    // };

    // this.expandButton = function() {
    //     element.all(by.css('.card-expand')).click();
    //     browser.sleep(13000);
    // };
};
module.exports = new guarantor();