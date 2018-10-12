var family = function(){
    browser.executeScript('window.scrollTo(0,10000);');
    console.log('+++console++++')

    this.scrollDown = function() {
        var scrolldown = $$('.vcc-card-header').get(1);
        browser.controlFlow().execute(function() {
            browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
        });
        // browser.sleep(3000);
    };

    this.collapseFamilyButton = function(){
        element(by.id('pVCFifthCardCollapsed')).click();
    };

    this.addFamilyButton = function() {
        element(by.id('pVCFifthCardAddBtn')).click();
        var family = element(by.className('common-popup-title ng-scope'));
        expect(family.getText()).toBe('Family medical history');
        // console.log(family);
    };
  
    this.dropDownScrollDown = function () {
        browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
        browser.sleep(500);
        };
    
     this.dropDownScrollUp = function () {
         browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,0);");
        browser.sleep(500);
        };


    this.relationshipDropdown = function() {
        element(by.id('fmhRelationship')).click();
        element(by.css('aria-label="Relationship"')); 
        // var starMark = element(by.className('req-sup'));
        // expect(starMark.getText()).toBe('');
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function(items) {
            expect(items.length).toBe(9);
            // this.dropDownScrollDown();
            browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
            expect(items[0].getText()).toBe('Mother');
            expect(items[1].getText()).toBe('Father');
            expect(items[2].getText()).toBe('Brother');
            expect(items[3].getText()).toBe('Sister');
            expect(items[4].getText()).toBe('Grandmother');
            expect(items[5].getText()).toBe('Grandfather');
            expect(items[6].getText()).toBe('Son');
            expect(items[7].getText()).toBe('Daughter');
            expect(items[8].getText()).toBe('Other');
            element(by.id('listItem7')).click();
        });
    };

    this.diagnosisText = function() {
        element(by.css('aria-describedby="diagnosisError"')); 
        // expect(inputElement.getAttribute("required")).toBe("true");
       var text =  element(by.id('fmhDiagnosis')).click();
        text.sendKeys('fever');
    };

    this.deceasedDropdown = function() {
        element(by.id('fmhDeceased')).click();
        element(by.css('aria-label="deceased"')); 
     
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function(items){
            expect(items.length).toBe(2);
            element(by.id('listItem0')).click();
        });
    };

    this.familyDoneButton = function() {
        element(by.id('familyMedicalDoneBtn')).click();
        // browser.sleep(3000);
    };

    this.deathAge = function() {
        var age = element(by.id('fmhDeathAge')).click();
        age.sendKeys('50');
        expect(age.getAttribute('maxlength')).toEqual('3');
    };

    this.deathReason =  function() {
        var reason = element(by.id('fmhDeathReason')).click();
        reason.sendKeys('Natural Death');
        expect(reason.getAttribute('maxlength')).toEqual('50');
        // browser.sleep(3000);
    };

    this.familyCloseCancel = function() {
        this.addFamilyButton();
        element(by.id('familyMedicalCloseBtn')).click();
        browser.sleep(3000);
        this.addFamilyButton();
        element(by.id('familyMedicalCancelBtn')).click();
        // browser.sleep(3000);
    };

    this.familyInlineError = function() {
        this.addFamilyButton();
        this.familyDoneButton();
        browser.sleep(3000);
        // element(by.id('fmhRelationship')).click();
        var errorFamily = element(by.id('relationError'));
        expect(errorFamily.getText()).toBe('Choose relationship');
        this.familyDoneButton();
        this.relationshipDropdown();
        this.familyDoneButton();
        var diagnosisInline = element(by.id('diagnosisError'));
        expect(diagnosisInline.getText()).toBe('Specify diagnosis');
        browser.sleep(3000);
        this.diagnosisText();
        this.familyDoneButton();
        browser.sleep(3000);
    };

    this.familyEdit = function() {
        element(by.id('pVCFifthCardEditBtn_0')).click();
        this.relationshipDropdown();
        this.diagnosisText();
    };

    this.ifElseCondition = function(text){
        element(by.id('pVCFifthCardAddBtn')).click();
        this.relationshipDropdown();
        this.diagnosisText();
        browser.sleep(3000);
        // element(by.id('fmhDeceased')).click();
        var deathage,
        css;

        var css = deathage.getAttribute('class');
        expect(css).toMatch('disabled');
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar')).get(0).getText().then(function(text){
            console.log("");
            if(text === "Yes"){
                element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar')).get(0).click();
                    console.log("option is available");
            }
            else
                element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar')).get(1).click(); 
            
        });
        // if(text === "No"){
        //     console.log("options not available");
        // }
        browser.sleep(5000);
    };
};
module.exports = new family();