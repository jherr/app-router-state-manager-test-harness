import { test, expect } from "@playwright/test";

/*
Tests whether the product store is reset if unrelated state in the tree changes.
*/

test("Does the store survive clicking buttons in the parent page context", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Go to the first product
  await page.getByText("Product 1 Link").click();
  await page.waitForURL("**/products/1");

  // Make sure we have the right SKU
  const sku = page.getByTestId("rsc-sku");
  await expect(sku).toHaveText("1234");

  // Change the product name
  const nameEditor = await page.getByTestId("editor-name");
  await nameEditor.selectText();
  await nameEditor.type("New Product 1");

  // Check to make sure the state manager has updated the display version of the name
  const nameDisplay = await page.getByTestId("display-name");
  await expect(nameDisplay).toHaveText("New Product 1");

  // Press external buttons to change unrelated state
  const rootState = await page.getByTestId("main-page-local-state");
  await rootState.click();
  const clientContextState = await page.getByTestId("client-context-state");
  await clientContextState.click();

  // Go back to the display to make sure it hasn't been overwritten with the original data
  await expect(nameDisplay).toHaveText("New Product 1");
});

test("Does the store survive clicking the button inside the store context provider", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Go to the first product
  await page.getByText("Product 1 Link").click();
  await page.waitForURL("**/products/1");

  const sku = page.getByTestId("rsc-sku");
  await expect(sku).toHaveText("1234");

  // Change the product name
  const nameEditor = await page.getByTestId("editor-name");
  await nameEditor.selectText();
  await nameEditor.type("New Product 1");

  // Check to make sure the state manager has updated the display version of the name
  const nameDisplay = await page.getByTestId("display-name");
  await expect(nameDisplay).toHaveText("New Product 1");

  // Press buttons to change state of the counter inside the provider component
  const counterInsideProvider = await page.getByTestId(
    "counter-inside-product-store-provider"
  );
  await counterInsideProvider.click();

  // Go back to the display to make sure it hasn't been overwritten with the original data
  await expect(nameDisplay).toHaveText("New Product 1");
});
