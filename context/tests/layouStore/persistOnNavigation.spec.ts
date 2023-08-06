import { test, expect } from "@playwright/test";

/*
Check to make sure that when we change the state of the layout counter, it persists between page changes.
*/

test("Does the layout counter persist between page changes", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Click on the increment button in the layout a bunch of times
  const incrementButton = await page.getByTestId("layout-counter-button");
  await incrementButton.click();
  await incrementButton.click();
  await incrementButton.click();

  // Get the current value of the counter
  const layoutCounterText = page.getByTestId("layout-counter-value");
  const text = await layoutCounterText.innerText();
  await expect(layoutCounterText).toHaveText(text);
  await expect(layoutCounterText).not.toHaveText("0");

  // Soft navigate to the first product
  let product1link = await page.getByText("Product 1 Link");
  product1link.click();
  await page.waitForURL("**/products/1");

  // Check to make sure the count hasn't changed
  await expect(layoutCounterText).toHaveText(text);

  // Soft navigate to the second product
  let product2link = await page.getByText("Product 2 Link");
  product2link.click();
  await page.waitForURL("**/products/2");

  // Check to make sure the count hasn't changed
  await expect(layoutCounterText).toHaveText(text);
});
