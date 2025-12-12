import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })

  test('can navigate to a pokemon page', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })

  test('can scroll and see more pokemon in the list', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('charmeleon')).toBeVisible()
    await expect(page.getByText('pikachu')).toBeVisible()
  })
})
