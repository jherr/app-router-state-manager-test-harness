import { test, expect } from "@playwright/test";

/*
Test whether we can save a change to the product and whether we see those persist on a hard
navigation change.
*/

test("Does the store mutate the API and can we see the change persist", async ({
  page,
}) => {
  // Reset the data in the API to its initial state
  await fetch("http://localhost:3000/api/products/reset", {
    method: "POST",
  });

  // Mutate product ID #3 because none of the other tests touch it
  await page.goto("http://localhost:3000/products/3");

  const product3sku = page.getByTestId("rsc-sku");
  await expect(product3sku).toHaveText("7891");

  // Change the product name
  const nameEditor = await page.getByTestId("editor-name");
  await nameEditor.selectText();
  await nameEditor.type("New Product 3");

  // Check to make sure the state manager has updated the display version of the name
  const nameDisplay = await page.getByTestId("display-name");
  await expect(nameDisplay).toHaveText("New Product 3");

  // Go back to the display to make sure it hasn't been overwritten with the original data
  await expect(nameDisplay).toHaveText("New Product 3");

  // Press the save button
  const saveButton = await page.getByTestId("editor-save");
  await saveButton.click();

  // Hard navigate to product ID #2
  await page.goto("http://localhost:3000/products/2");
  const product2sku = page.getByTestId("rsc-sku");
  await expect(product2sku).toHaveText("3546");

  // Hard navigate to product ID #3 and check the name
  await page.goto("http://localhost:3000/products/3");
  const rscName = page.getByTestId("rsc-name");
  await expect(rscName).toHaveText("New Product 3");
});
