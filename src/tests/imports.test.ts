describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Home.vue')
    expect(cmp).toBeDefined()
  })
})

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Genres.vue')
    expect(cmp).toBeDefined()
  })
})

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Navigation.vue')
    expect(cmp).toBeDefined()
  })
})

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Slide.vue')
    expect(cmp).toBeDefined()
  })
})

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/Search.vue')
    expect(cmp).toBeDefined()
  })
})

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/TvShow.vue')
    expect(cmp).toBeDefined()
  })
})
