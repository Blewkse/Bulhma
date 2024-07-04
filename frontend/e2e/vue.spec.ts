import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.home >> h1')).toHaveText('Bulhma');
});

test('checks the Connexion link', async ({ page }) => {
  await page.goto('/');
  const connexionLink = page.locator('nav >> text=Connexion');
  await expect(connexionLink).toHaveAttribute('href', '/connexion');
});

test('navigates to Match page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Match');
  await expect(page).toHaveURL('/match');
});

test('checks all redirect links', async ({ page }) => {
  await page.goto('/');
  const links = [
    { text: 'Match', href: '/match' },
    { text: 'Info player', href: '/info' },
    { text: 'Caractéristique', href: '/caracteristique' },
    { text: 'Classement', href: '/classement' }
  ];
  for (const { text, href } of links) {
    const link = page.locator(`.redirect >> text=${text}`);
    await expect(link).toHaveAttribute('href', href);
  }
});