import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Remix Notes/);
});

test("sign up link", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	// Click the sign up link.
	await page.getByRole("link", { name: "Sign up" }).click();

	// Expects the URL to contain join.
	await expect(page).toHaveURL(/.*join/);
});

test("login link", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	// Click the login link.
	await page.getByRole("link", { name: "Log In" }).click();

	// Expects the URL to contain join.
	await expect(page).toHaveURL(/.*login/);
});
