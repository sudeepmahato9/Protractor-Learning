describe('Protractor test for EHR Tool', function () {
  it('should get the browser', function () {
    browser.ignoreSynchronization = true;
    browser.get('http://172.16.17.58/ehr-tool/dist/test-rig.html');
    expect(browser.getCurrentUrl()).toBe('http://172.16.17.58/ehr-tool/dist/test-rig.html');
    element(by.name('mode_select')).$('[value="design"]').click();
    element(by.buttonText('Load API Below')).click();
    browser.sleep(1000);
    browser.switchTo().frame('ext_012345678_1');
    browser.sleep(2000);
    browser.waitForAngular();
    browser.sleep(3000);
  });

  it('should find the text box', function () {
    element(by.id('questionText')).sendKeys("This is my sample Question");
    // browser.sleep(3000);
    element(by.id('question-type')).click();
    element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li')).then(function (items) {
      expect(items.length).toBe(4);
      expect(items[0].getText()).toBe("Demo"); 
      expect(items[1].getText()).toBe("Practice");
      expect(items[2].getText()).toBe("Assessment");
      expect(items[3].getText()).toBe("Case");
      element(by.cssContainingText('li', 'Practice')).click();
    });  
    // var list = element.all(by.css('.item-list.ng-isolate-scope.custom-scrollbar li'));
    // expect(list.get(1).getText()).toBe('Practice');
  });

  it('should find the text box', function(){
    element(by.id('bookDd')).click();
    /* var list = element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li'));
    expect(list.get(0).getText()).toBe('Select box');
    expect(list.get(1).getText()).toBe('Booth'); */
    element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (items) {
      expect(items.length).toBe(4);
      expect(items[0].getText()).toBe("Booth"); 
      expect(items[1].getText()).toBe("Medical insurance");
      expect(items[2].getText()).toBe("PMEHR");
      expect(items[3].getText()).toBe("Book4");
      element(by.cssContainingText('li', 'Booth')).click();
    });  
 });

 it('should find the Next date button and click it', function(){
    element(by.id('designNextBtn')).click();
    browser.sleep(3000);
 });

 it('should verify that it is on Date page', function(){
    var date = element(by.className('dtp-heading'));
    expect(date.getText()).toBe("Set today's date");
 });

 it('should select the month from drop-down', function(){
  
  element(by.id('dpMonthDropdown')).click();
    element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font .item-list.ng-isolate-scope.custom-scrollbar li')).then(function (months) {
      // console.log(months);
      expect(months.length).toBe(12);
      expect(months[0].getText()).toBe("January");
      element(by.cssContainingText('li', "February")).click();
    });
 });

 it('should select the year from drop-down', function() {
    element(by.id('dpYearDropdown')).click();
    element.all(by.css('.hide-bullets.padding-zero.dropdown-wrapper.ehr-m-font li ul li')).then(function (years) {
      expect(years.length).toBe(11);
      expect(years[0].getText()).toBe('2019');
      expect(years[1].getText()).toBe('2020');
      element(by.cssContainingText('li', '2020')).click();
     
    });
 });

 it('should select the date from date picker', function(){
  browser.sleep(3000);
    element.all(by.css('.table-condensed tbody tr td')).then(function (date) {
      expect(date.length).toBe(87);
      element(by.cssContainingText('td', '10')).click();
      browser.sleep(3000);
    });
 });

 it('should click on Next Data button', function(){
  element(by.id('designNextBtn')).click();
  browser.sleep(3000);
 });
});

// describe  ('should generate correct text', function () {
//     browser.ignoreSynchronization = true;
//     browser.waitForAngular();
//     browser.navigate().refresh();
//     browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
//     var textMessage;
//     beforeEach(function () {
//       textMessage = "Case Study";
//     });
//     it('should able to text validation.', function () {
//       element(by.id('questionText')).sendKeys(textMessage);
//       element(by.id('questionText')).getText().then(function (printedText) {
//         console.log(printedText);
//         expect(printedText).toEqual("Case Study");
//       });
//     });

// });



















// describe('should generate correct text', function () {
//   browser.ignoreSynchronization = true;
//   browser.waitForAngular();
//   browser.navigate().refresh();
//   browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
//   var textMessage;
//   beforeEach(function () {
//     textMessage = "Case Study";
//   });
//   it('should able to text validation.', function () {
//     element(by.id('questionText')).sendKeys(textMessage);
//     element(by.id('questionText')).getText().then(function (printedText) {
//       console.log(printedText);
//       expect(printedText).toEqual("Case Study");
//     });
//   });
// });





















































// describe('Protractor Demo App', function() {
//   var firstNumber = element(by.model('first'));
//   var secondNumber = element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));

//   beforeEach(function(){
//     // browser.get('http://juliemr.github.io/protractor-demo/');
//     browser.get('http://172.16.17.58/ehr-tool/dist/test-rig.html');
//   });

//   it('should have a title',function(){
//     expect(browser.getTitle()).toEqual('Super Calculator');
//   });
//   it('should add 1 and 2',function(){
//     firstNumber.sendKeys(3);
//     secondNumber.sendKeys(5);
//     goButton.click();
//     expect(latestResult.getText()).toEqual('8');
//   });
//   it('should read the value from an input',function(){
//     firstNumber.sendKeys(10);
//     expect(firstNumber.getAttribute('value')).toEqual('10');
//   });
//   it('should read the value from an input',function(){
//     secondNumber.sendKeys(20);
//     expect(secondNumber.getAttribute('value')).toEqual('20');
//   });
// });







































//   it('should add 1 and 2', function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//     // expect(browser.getTitle()).toEqual('Super Calculator');
//     element(by.model('first')).sendKeys(23);
//     element(by.model('second')).sendKeys(2);
//     element(by.id('gobutton')).click();
//     element(by.)
//     expect(element(by.binding('lat')).getText());

//     // element(by.css('h2.ng-binding')).getText().then(function(result){
//     // console.log(result);
//     // });
//   });
// });
















// describe('angularjs homepage todo list', function() {
//     it('should add a todo', function() {
//       browser.get('https://angularjs.org');

//       element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//       element(by.css('[value="add"]')).click();

//       var todoList = element.all(by.repeater('todo in todoList.todos'));
//       expect(todoList.count()).toEqual(3);
//       expect(todoList.get(2).getText()).toEqual('write first protractor test');

//       // You wrote your first test, cross it off the list
//       todoList.get(2).element(by.css('input')).click();
//       var completedAmount = element.all(by.css('.done-true'));
//       expect(completedAmount.count()).toEqual(2);
//     });
//   });