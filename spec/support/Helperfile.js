const {Builder, By, Key, until, weddriver, promise} = require('selenium-webdriver');
const locators = require("./Locators").locatorsfile.locators
const userobj1 = require("./Locators").locatorsfile.userobj1
const userobj2 = require("./Locators").locatorsfile.userobj2
const chrome = require('selenium-webdriver/chrome');
var driver = new Builder()
    .forBrowser('chrome')
    .build();
//Teams playing today
const task1 = async function() 
{
        console.log('Teams playing today')
        let list= driver.findElements(By.className(locators.team))
        let text = await Promise.all((await list).map(list=>list.getText()))
        console.log(text)
 
        }
//Headings     
const task2 = async function() 
{
        let search = driver.findElement(By.xpath(locators.search))
        await search.sendKeys("Sports",Key.ENTER)
        let sports= driver.findElements(By.className(locators.headings))
        let headings = await Promise.all((await sports).map(sports=>sports.getText()))
        console.log(headings)
        }

        // Login negative scenarios
const task3 = async function()
{
    let signin = driver.findElement(By.xpath(locators.signin))
    await signin.click()
    console.log("Invalid passwords and valid username messages")
    for (let i = 0; i < 4; i++) 
    {
       
    let username =driver.findElement(By.id(locators.username))
    await username.sendKeys(userobj1.email)
    
    let password= driver.findElement(By.id(locators.password))
    await password.sendKeys(userobj1.password[i])

    let submit=driver.findElement(By.id(locators.submit))
    await submit.click()

    let errormessage= driver.findElement(By.className(locators.errormessage))
    message=await errormessage.getText()
    console.log(message)

    await  driver.navigate().refresh()
    await driver.sleep(500)

   }

   console.log('\n',"Invalid usernames,valid password messages")
   for (let i = 0; i < 3; i++) 
    {
       
    let username =driver.findElement(By.id(locators.username))
    await username.sendKeys(userobj2.email[i])
    
    let password= driver.findElement(By.id(locators.password))
    await password.sendKeys(userobj2.password)

    let submit=driver.findElement(By.id(locators.submit))
    await submit.click()

    let errormessage= driver.findElement(By.className(locators.errormessage))
    message=await errormessage.getText()
    console.log(message)
    expect(message).toContain('Sorry')
    await  driver.navigate().refresh()
    await driver.sleep(500)
   }
}
  

exports.Helperfile= {
task1,driver,task2,task3
        }
    