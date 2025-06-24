const { test, expect } = require('@playwright/test');

test('Search and add item to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login (demo site credentials)
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Search or browse and add item
  await page.click('.inventory_item:first-child .btn_inventory');

  // Go to cart and check item
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toHaveCount(1);
});
