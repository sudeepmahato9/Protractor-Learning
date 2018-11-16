var patientStatements = function(){

    this.accountModule = function(){
        element(by.id('accountsBtn')).click();
        expect(element(by.id('patientAccount')).getText()).toBe('Patient accounts');
        // browser.sleep(3000);
    };

    this.patientStatementsActivate = function() {
       var activate = element(by.id("payments")).click();
        expect(activate.getText()).toBe('Patient statements');
        expect(element(by.className('cgr-filter-header ng-scope')).getText()).toBe('Filter');
    };

    this.dropDownScrollDown = function () {
        browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
        };
    
    this.chartNoRange = function() {
        var range = element(by.id('chartNumberFromInput'));
        range.click();
        expect(range.sendKeys('pppp'));
        element(by.id('chartNumberFromBtn')).click();
        expect(range.sendKeys('aa0'));
        element.all(by.css('.search-ul.ng-isolate-scope.custom-scrollbar li')).then(function(items) {
            expect(items.length).toBe(7);
          /*   // browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
            expect(items[0].getText()).toBe('AA001');
            expect(items[0].getText()).toBe('AA002');
            expect(items[0].getText()).toBe('AA003');
            // browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
            expect(items[0].getText()).toBe('AA004');
            expect(items[0].getText()).toBe('AA005');
            expect(items[0].getText()).toBe('AA006');
            expect(items[0].getText()).toBe('AA007'); */

            browser.executeScript("$('.item-list').getNiceScroll().doScrollPos(0,300);");
            element(by.css('aria-label="AA001"'));
            element(by.css('aria-label="AA002"'));
            element(by.css('aria-label="AA003"'));
            element(by.css('aria-label="AA004"'));
            element(by.css('aria-label="AA005"'));
            element(by.css('aria-label="AA006"'));
            element(by.css('aria-label="AA007"'));
            element(by.id('chartNumber0')).click();
            browser.sleep(3000);
        element(by.id('chartNumberToInput')).click();
       /*  var $myInput = $('chartNumber2');
        $myInput.val($myInput.val().slice(0, -1)); */
        var input = $('chartNumber2');
       /*  (input).val(
            function(index, value){
                return value.substr(0, value.length - 1);
        }); */
        element(by.id('chartNumberToBtn')).click();
        element(by.id('chartNumberToInput')).sendKeys('aa0');
        element(by.id('chartNumber2')).click();
       
        });
    };

    this.dateOfServiceFrom = function(){
        var dos = element(by.id('dateFromInput'));
        dos.click();
        dos.sendKeys('10');
        var validFormat = element(by.id('dateFromError'));
        expect(validFormat.getText()).toBe('Enter valid date format in mm/dd/yyyy');
       
        dos.sendKeys('10/12/1111');
        var beforeDate = element(by.id('dateFromError'));
        expect(beforeDate.getText()).toBe('Entered date is before 12/31/2018');

        var dateIcon = element(by.id('dateFromBtn'));
        dateIcon.click();
        element(by.id('dpMonthDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font .item-list.ng-isolate-scope.custom-scrollbar li')).then(function (months) {
            expect(months.length).toBe(12);
            expect(months[0].getText()).toBe("January");
            element(by.id('listItem1')).click();
        });

        element(by.id('dpYearDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (years) {
            expect(years.length).toBe(11);
            expect(years[0].getText()).toBe('2019');
            expect(years[1].getText()).toBe('2020');
            element(by.id('listItem0')).click();
        });
        element(by.xpath('//span[@data-action="selectDay"]')).click();
        // browser.sleep(3000);
    };

    this.ifElseMatch = function() {
        // this.dateOfService();
        if(element(by.css('aria-label = "Date of service range To 01/26/2020"')) === element(by.css('aria-label = "Date of service range To 01/26/2020"'))){
            console.log("Test Passed");
        } else{
            console.log("test faield");
        }
    };

    this.dateOfServiceTo = function() {
        var toDate = element(by.id('dateFromToInput'));
        toDate.sendKeys("\u0008");
        expect(element(by.id('dateFromToError')).getText()).toBe('Enter valid date format in mm/dd/yyyy');
        toDate.clear();
        toDate.sendKeys("10/12/1111");
        expect(element(by.id('dateFromToError')).getText()).toBe('Entered date is before 12/31/2018');
        toDate.clear();
        toDate.sendKeys("10/12/1111");
        // toDate.click();
        var dateIconTo = element(by.id('dateFromToBtn'));
        dateIconTo.click();
        element(by.id('dpMonthDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font .item-list.ng-isolate-scope.custom-scrollbar li')).then(function (months) {
            expect(months.length).toBe(12);
            expect(months[0].getText()).toBe("January");
            element(by.id('listItem2')).click();
        });

        element(by.id('dpYearDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (years) {
            expect(years.length).toBe(11);
            expect(years[0].getText()).toBe('2019');
            expect(years[1].getText()).toBe('2020');
            element(by.id('listItem1')).click();
        //    browser.sleep(3000);
        });
        element(by.xpath('//span[@data-action="selectDay"]')).click();
    };

    this.generateStatementNa = function() {
        
        var enableButton = element(by.id('cgrGenerateReportBtn'));
        expect(enableButton.isEnabled()).toBe(true);
        enableButton.click();
        var noData = element(by.className('rep-no-result ehr-xl-font no-data-found-center focusableText ng-scope'));
        expect(noData.getText()).toBe('No data found');
        // expect(element(by.tagName('p')).getText()).toBe("No data found");
        element(by.id('reportCancelBtn')).click();
   
    };

    this.generateStatement = function() {
        this.chartNoRange();
        element(by.id('cgrGenerateReportBtn')).click();
        expect(element(by.className('common-popup-title ng-binding')).getText()).toBe('Patient remainder statement');
        expect(element(by.id('hospitalName')).getText()).toBe('Andalusia Regional Hospital');
        expect(element(by.id('hospitalAddress')).getText()).toBe('849 South Three Notch St., Andalusia, Albama');
        expect(element(by.id('hospitalPhone')).getText()).toBe('154-547-7984');
        expect(element(by.cssContainingText('.ng-binding' , 'Karrie Lynn Owens')).getText()).toBe('Karrie Lynn Owens');
        expect(element(by.cssContainingText('.ng-binding' , '22147, Barrington Harper Woods Colorado')).getText()).toBe('22147, Barrington Harper Woods Colorado');
        expect(element(by.cssContainingText('.ng-binding' , '313-555-1019')).getText()).toBe('313-555-1019');
        expect(element(by.className('rep-table-top-header rep-sd')).getText()).toBe('Statement date');
        expect(element(by.className('rep-table-top-header rep-cn')).getText()).toBe('Chart number');
        expect(element(by.className('rep-table-top-header rep-page')).getText()).toBe('Page');
        expect(element(by.className('padding-left')).getText()).toBe('Make checks payable to:');
        expect(element(by.cssContainingText('.ng-binding' , 'Andalusia Regional Hospital')).getText()).toBe('Andalusia Regional Hospital');
        expect(element(by.cssContainingText('.ng-binding' , '849 South Three Notch St., Andalusia, Albama')).getText()).toBe('849 South Three Notch St., Andalusia, Albama');
        expect(element(by.cssContainingText('.ng-binding' , '154-547-7984')).getText()).toBe('154-547-7984');
        expect(element(by.id('previousBalance')).getText()).toBe('Previous Balance: $0.00');
        expect(element(by.xpath(".//span[text()='Patient']/..")));
        expect(element(by.cssContainingText('.ng-binding', 'Karrie Lynn Owens')).getText()).toBe('Karrie Lynn Owens');
        expect(element(by.xpath(".//span[text()='Date of last payment:']/..")));
        expect(element(by.cssContainingText('.ng-binding', '01/09/2018')).getText()).toBe('01/09/2018');
        expect(element(by.xpath(".//span[text()='Amount:']/..")));
        expect(element(by.cssContainingText('.ng-binding', '300.00')).getText()).toBe('300.00');
        expect(element(by.xpath(".//span[text()='Chart number:']/..")));
        expect(element(by.cssContainingText('.ng-binding' , 'AA001')).getText()).toBe('AA001');
        expect(element(by.className('rep-dates padding-left')).getText()).toBe('Dates');
        expect(element(by.className('rep-procedure')).getText()).toBe('Procedure');
        expect(element(by.className('rep-charge align-right-number')).getText()).toBe('Charge');
        expect(element(by.className('rep-pbg align-right-number')).getText()).toBe('Paid by guarantor');
        expect(element(by.className('rep-adjustments align-right-number')).getText()).toBe('Adjustments');
        expect(element(by.className('rep-remainder align-right-number')).getText()).toBe('Remainder');
        expect(element(by.className('amount-para')).getText()).toBe('Amount due');
        expect(element(by.cssContainingText('.ng-binding' , '$128.00')).getText()).toBe('$128.00');
        expect(element(by.id('hospitalName')).getText()).toBe('Andalusia Regional Hospital');
        expect(element(by.id('hospitalAddress')).getText()).toBe('849 South Three Notch St., Andalusia, Albama');
        expect(element(by.id('hospitalPhone')).getText()).toBe('154-547-7984');
        expect(element(by.className('rep-table-top-header rep-sd')).getText()).toBe('Statement date');
        expect(element(by.className('rep-table-top-header rep-cn')).getText()).toBe('Chart number');
        expect(element(by.className('rep-table-top-header rep-page')).getText()).toBe('Page');
        expect(element(by.className('rep-table-top-column rep-table-top-header rep-sd ng-binding')).getText()).toBe('01/09/2019');
        // expect(element(by.className('rep-table-top-column rep-table-top-header rep-cn ng-binding')).getText()).toBe('AA003');
        expect(element(by.className('rep-table-top-column rep-table-top-header rep-page ng-binding')).getText()).toBe('1');
        expect(element(by.id('previousBalance')).getText()).toBe('Previous Balance: $0.00');
        expect(element(by.xpath(".//span[text()='Patient:']/..")));
        // expect(element(by.cssContainingText('.ng-binding' , ' Maria Louisa Lopez')).getText()).toBe('Maria Louisa Lopez');
        expect(element(by.xpath(".//span[text()='Chart number:']/..")));
        expect(element(by.cssContainingText('.ng-binding' ,'AA003')).getText()).toBe('AA003');
        expect(element(by.xpath(".//span[text()='Date of last payment:']/..")));
        expect(element(by.cssContainingText('.ng-binding' , '01/09/2018')).getText()).toBe('01/09/2018');
        expect(element(by.xpath(".//span[text()='Amount:']/..")));
        expect(element(by.cssContainingText('.ng-binding',' 590.00')).getText()).toBe('');
        expect(element(by.className('rep-dates padding-left')).getText()).toBe('Dates');
        expect(element(by.className('rep-procedure')).getText()).toBe('Procedure');
        expect(element(by.className('rep-charge align-right-number')).getText()).toBe('Charge');
        expect(element(by.className('rep-pbg align-right-number')).getText()).toBe('Paid by guarantor');
        expect(element(by.className('rep-adjustments align-right-number')).getText()).toBe('Adjustments');
        expect(element(by.className('rep-remainder align-right-number')).getText()).toBe('Remainder');
        expect(element(by.className('amount-para')).getText()).toBe('Amount due');
        expect(element(by.cssContainingText('.ng-binding' , '$80.00')).getText()).toBe('');
      /*   var headers = element.all(by.css('.tr th')).map(function(elm) {
            return elm.getText();
        });
        expect(headers.length).toBe('3'); */
        /* var list = element.all(by.css('th'));
        expect(list.count()).toBe(4); */
        // browser.sleep(3000);
    };

    this.printReport = function(){ 
        var print = element(by.id('reportPrintBtn'));
        expect(print.getText()).toBe('Print');
        print.click();
       
    };

    this.printComplete = function() {
        expect(element(by.id('warningHeader')).getText()).toBe('Print');
        expect(element(by.id('warningMsgText')).getText()).toBe('Print completed.');
        expect(element(by.id('warningProceed')).getText()).toBe('Okay');
        var okButton = element(by.id('ehrWarningProceedBtn'));
        okButton.click();
        
    };

    this.printCompleteClose = function() {
        this.printReport();
        element(by.id('ehrWarnigCloseBtn')).click();
    };

    this.reportCloseBtn = function() {
        var close = element(by.id('reportCancelBtn'));
        expect(close.getText()).toBe('Close');
        close.click();
        this.generateStatement();
        element(by.id('reportCloseBtn')).click();
        
    };

    this.generateReportsFiveTimes = function() {
        this.chartNoRange();
        this.generateStatement();
        this.printReport();
        this.printComplete();
        this.printCompleteClose();
        this.reportCloseBtn();
        // var fiveTimes = element(by.id('cgrGenerateReportBtn'));
      /*   for (i=0; i<6 ; i++){
            this.generateStatement();
            // fiveTimes.click();
        } */
        browser.sleep(3000);
     };

     this.listOfStatements = function() {
        expect(element(by.id('remndrStmntTitle')).getText()).toBe('Date');
        expect(element(by.id('remndrStmntTemp')).getText()).toBe('Statement name');
     };

     this.clearFilter = function() {
        this.chartNoRange();
        element(by.id('dateFromInput')).sendKeys('10/12/1111');
        element(by.id('dateFromToInput')).sendKeys('10/12/2019');
        element(by.id('cgrClearFilterBtn')).click();
        browser.sleep(3000);
     };
};
module.exports = new patientStatements();