/* eslint-env jest */
// routes.test.js
const request = require('supertest')
const server = require('../app.js')

beforeAll(async () => {
  // do something before anything else runs
  console.log('Jest starting!')
})

// close the server after each test
afterAll(() => {
  server.close()
  console.log('server closed!')
})

describe('basic route tests', () => {
  test('get health check route GET /health_check', async () => {
    const response = await request(server).get('/health_check')
    expect(response.status).toEqual(200)
    expect(response.text).toContain('ok!')
  })
})
