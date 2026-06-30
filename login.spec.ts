import{test,expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage'
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envconfig'


test('Login Page Functionality', async ({page}) =>
{

    const loginPage = new loginpage(page)

await page.goto(BASE_URL)
await loginPage.login(USERNAME,PASSWORD)   

await page.getByRole("button", {name:"Login"}).click()

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")


})

