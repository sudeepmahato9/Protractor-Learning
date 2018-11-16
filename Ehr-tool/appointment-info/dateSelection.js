require('../appointment-info/question_page');
var dateSelection = function () {
    this.nextDateButton = function () {
        element(by.id('designNextBtn')).click();
    };

    this.date = function () {
        var date = element(by.className('dtp-heading'));
        expect(date.getText()).toBe("Set today's date");
    };

    this.month = function () {
        element(by.id('dpMonthDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font .item-list.ng-isolate-scope.custom-scrollbar li')).then(function (months) {
            expect(months.length).toBe(12);
            expect(months[0].getText()).toBe("January");
            element(by.cssContainingText('li', "February")).click();
        });
    };

    this.year = function () {
        element(by.id('dpYearDropdown')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (years) {
            expect(years.length).toBe(11);
            expect(years[0].getText()).toBe('2019');
            expect(years[1].getText()).toBe('2020');
            element(by.cssContainingText('li', '2020')).click();
        });
    };

    this.nextDataButton = function () {
        element(by.id('designNextBtn')).click();
        // browser.sleep(3000); 
    };
};
module.exports = new dateSelection();