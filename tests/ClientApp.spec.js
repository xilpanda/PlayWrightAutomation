const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright test', async ({page})=> 
{

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("testing@gmail.com");
  await page.locator("#userPassword").type("Kosmos@10");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  const titles= await page.locator(".card-body b").allTextContents();
  console.log(titles);

});