
require('chromedriver');

const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
    let driver;

    test.before(function *() {
        driver = yield new Builder().forBrowser('chrome').build();
    });

    // You can write tests either using traditional promises.
    it('works with promises', function() {
        return driver.get('https://www.kinopoisk.ru/film/970196/')
            .then(_ => driver.findElement(By.className('kinopoisk-watch-online-button')).click())
    });

    test.after(() => driver.quit());
});
