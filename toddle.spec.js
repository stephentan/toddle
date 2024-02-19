// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
var chrome = require("selenium-webdriver/chrome");
var options = new chrome.Options();
options.addArguments("user-data-dir=/home/stan/.config/google-chrome/test");
describe("Toddle", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  async function selectField() {
    await driver.findElement(By.css(".${dropdown.field} input")).click();
    await driver.sleep(500);
    await driver
      .findElement(By.css(".${dropdown.field} input"))
      .sendKeys("${dropdown.value}");
  }
  it("Toddle", async function () {
    await driver.get(
      "https://web.toddleapp.com/platform/IB_PYP/courses/38378/progressreport/16552"
    );
    vars["students"] = await driver.executeScript(
      'return [{"name":"Tan Pearce Jerusalem",grades: {"chinese1":"WOS","chinese2":"WS","chinese3":"ME","chinese4":"AE","chinese5":"ME"}}, {"name":"Ang Samantha Jo",grades: {"chinese1":"WS","chinese2":"WS","chinese3":"ME","chinese4":"ME","chinese5":"AE"}}, {"name":"Tan Zayne Katriel",grades: {"chinese1":"WOS","chinese2":"AE","chinese3":"ME","chinese4":"AE","chinese5":"ME"}}]'
    );
    const collection = vars["students"];
    for (let i = 0; i < collection.length - 1; i++) {
      vars["student"] = vars["students"][i];
      await driver
        .findElement(By.xpath('//div[contains(text(),"${student.name}")]'))
        .click();
      await driver
        .findElement(
          By.xpath('//div[contains(text(),"Progress summary for Subjects")]')
        )
        .click();
      vars["testsubjectindexes"] = await driver.executeScript(
        'var subjectsIndexes = [   { index: 0, prefix: "science" },   { index: 1, prefix: "social" },   { index: 2, prefix: "english" },   { index: 3, prefix: "math" },   { index: 4, prefix: "chinese" },   { index: 5, prefix: "filipino" },   { index: 6, prefix: "music" },   { index: 7, prefix: "arts" },   { index: 8, prefix: "pe" },   { index: 9, prefix: "bible" }, ];  subjectsIndexes.map(function (entry) {   var selectorAllResults = document.querySelectorAll(     ".MultiLevelRating__rootContainer___1Nq9c:nth-child(" +       (entry.index + 1) +       ") .Select-input"   );   for (     var selectorIndex = 0;     selectorIndex < selectorAllResults.length;     selectorIndex++   ) {     console.log("adding classlist", selectorAllResults[selectorIndex]);     selectorAllResults[selectorIndex].classList.add(       entry.prefix + (selectorIndex + 1)     );   } });'
      );
      vars["grades"] = await driver.executeScript(
        "var studentGrades=arguments[0]; return Object.keys(studentGrades).map(function(entry) { return {key: entry, value: studentGrades[entry]}; });",
        vars["student.grades"]
      );
      const collection = vars["grades"];
      for (let i = 0; i < collection.length - 1; i++) {
        vars["grade"] = vars["grades"][i];
        vars["dropdown"] = JSON.parse(
          '{"field": "${grade.key}", "value": "${grade.value}"}'
        );
        selectField();
      }
    }
  });
});