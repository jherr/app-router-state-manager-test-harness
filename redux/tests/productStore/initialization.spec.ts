import { test, expect } from "@playwright/test";

/*
Test whether the store is initialized with the correct product as we navigate between product routes.
*/

test("Click between products and make sure that the store shows the correct product", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Go to the first product
  let product1link = await page.getByText("Product 1 Link");
  product1link.click();
  await page.waitForURL("**/products/1");

  // Check to make sure we have the right SKU in the product store
  let product1sku = await page.getByTestId("editor-sku");
  await expect(product1sku).toHaveText("1234");

  // Go to the second product
  const product2link = await page.getByText("Product 2 Link");
  await product2link.click();
  await page.waitForURL("**/products/2");

  // Check to make sure we have the right SKU in the RSC
  const rsc2sku = await page.getByTestId("rsc-sku");
  await expect(rsc2sku).toHaveText("3546");

  // Check to make sure we have the right SKU in the product store
  const product2sku = await page.getByTestId("editor-sku");
  await expect(product2sku).toHaveText("3546");

  // Soft navigate back to the first product
  product1link = await page.getByText("Product 1 Link");
  product1link.click();
  await page.waitForURL("**/products/1");

  // Check to make sure we have the right SKU in the product store
  product1sku = await page.getByTestId("editor-sku");
  await expect(product1sku).toHaveText("1234");
});
