import { test, expect } from "@playwright/test";

/*
Check to make sure that the layout store is unaffected by other state changing on the page.
*/

test("Does the layout counter persist when other state changes", async ({
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

  // Click the button that is in the same context provider as the layout counter
  const layoutLocalCounterButton = page.getByTestId(
    "layout-local-counter-button"
  );
  await layoutLocalCounterButton.click();
  await layoutLocalCounterButton.click();

  // Check to make sure the count hasn't changed
  await expect(layoutCounterText).toHaveText(text);
});
