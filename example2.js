
require('chromedriver');

const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Сценарий логина', function() {
    let driver;

    test.before(function *() {
        driver = yield new Builder().forBrowser('chrome').build();
    });

    // You can write tests either using traditional promises.
    it('Сценарий логина', function() {
        return driver.get('http://localhost/litecart/admin/')
            .then(_ => driver.findElement(By.name('username')).sendKeys('admin'))
            .then(_ => driver.findElement(By.name('password')).sendKeys('admin'))
            .then(_ => driver.findElement(By.name('login')).click())
    });

    test.after(() => driver.quit());
});
