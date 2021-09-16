const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = require("/Users/swetha.nagarajan/Automation/spec/support/Helperfile.js").Helperfile.driver;
const {Helperfile} = require("./support/Helperfile");
const chrome = require('selenium-webdriver/chrome');


jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 10000;     
    describe('Auto test', () => {
    beforeAll(()=>{
        driver.get(' https://www.bbc.co.uk/sport/football/scores-fixtures')
    
    })
    it('AutoTest', async () => {
            console.log('Test')
            await Helperfile.task1()
            await Helperfile.task2()
            await Helperfile.task3()
         
        },)


    afterAll( ()=>{
               //driver.quit()
                
            })})