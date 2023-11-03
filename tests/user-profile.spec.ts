import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('Switch Language to French and Verify Translation', async ({ page }) => {
  const $ = pageObject(page)
  await page.goto('https://portal-ugo.ife.ugo.aero/');
  await $.eulaContainerPage.acceptAll();
  await $.tabBarPage.goToUserProfile();
  await $.userProfilePage.selectLanguage();
  await $.userProfilePage.setFrenchLanguage();
  const currentURL = page.url();
  expect(currentURL).toBe('https://portal-ugo.ife.ugo.aero/user?lng=fr&auto_connect=true');
  await page.waitForTimeout(3000);
  await $.tabBarPage.goToHome();
  const navMenuText = await $.navMenuContainerPage.connectivityLink()
  await expect(navMenuText).toBe('Packs internet')

});
