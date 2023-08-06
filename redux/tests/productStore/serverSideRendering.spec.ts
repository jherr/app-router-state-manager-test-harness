import { test, expect } from "@playwright/test";

test("Does the store have the initial product state during SSR", async () => {
  const product1 = await fetch("http://localhost:3000/products/1").then((res) =>
    res.text()
  );
  expect(product1).toContain(' data-testid="display-name">Product 1</div>');

  const product2 = await fetch("http://localhost:3000/products/2").then((res) =>
    res.text()
  );
  expect(product2).toContain(' data-testid="display-name">Product 2</div>');
});
