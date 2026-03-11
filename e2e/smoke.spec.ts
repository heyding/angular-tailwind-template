import { expect, test } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('loads home route and core layout', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Angular Template/i);
    await expect(page.getByText(/D-Stack Ready/i).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Datenschutz/i })).toBeVisible();
  });

  test('navigates to login page', async ({ page }) => {
    await page.goto('/login');

    await expect(page.getByRole('heading', { level: 2 })).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('input#password')).toBeVisible();
  });

  test('components route resolves', async ({ page }) => {
    const response = await page.goto('/components');
    expect(response?.ok()).toBeTruthy();
  });
});
