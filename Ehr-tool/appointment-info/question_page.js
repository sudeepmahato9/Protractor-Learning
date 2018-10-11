var question_page = function () {

    this.selectDropdown = function () {
        element(by.name('mode_select')).$('[value="design"]').click();
        element(by.buttonText('Load API Below')).click();
    };

    this.selectExerciseGoal = function () {
        element(by.id('questionText')).sendKeys("This is my sample Question");
    };

    this.selectQuestionType = function () {
        element(by.id('question-type')).click();
        element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function (items) {
            expect(items.length).toBe(4);
            expect(items[0].getText()).toBe("Demo");
            expect(items[1].getText()).toBe("Practice");
            expect(items[2].getText()).toBe("Assessment");
            expect(items[3].getText()).toBe("Case");
            element(by.id('listItem0')).click();
        });
    };

    this.bookType = function () {
        element(by.id('bookDd')).click();
        element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (items) {
            expect(items.length).toBe(4);
            expect(items[0].getText()).toBe("Booth");
            expect(items[1].getText()).toBe("Medical insurance");
            expect(items[2].getText()).toBe("PMEHR");
            expect(items[3].getText()).toBe("Book4");
            element(by.id('listItem3')).click();
            browser.sleep(3000);  
        });
    };
};
module.exports = new question_page();