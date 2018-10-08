const { test, trait } = use('Test/Suite')('Conversation')

trait('Test/ApiClient')

test('Create Conversation', async ({ client }) => {
  const response = await client.post('/conversation').send({
    userId: 1,
    direction: "incoming",
    message: "Test Message",
    timestamp: 1514764800
  }).end()

  response.assertStatus(200)
})

test('Update Conversation', async ({ client }) => {
  const response = await client.put('/conversation/1').send({
    userId: 1,
    direction: "incoming",
    message: "Test Updated Message",
    timestamp: 1514764800
  }).end()

  response.assertStatus(200)
})

test('Get List Conversation By Pagination', async ({ client }) => {
  const response = await client.get('/conversation/?page=1&limit=5').end()

  response.assertStatus(200)
})

test('Get Conversation By ID', async ({ client }) => {
  const response = await client.get('/conversation/1').end()

  response.assertStatus(200)
})

test('Remove Conversation', async ({ client }) => {
  const response = await client.delete('/conversation/1').end()
  
  response.assertStatus(200)
})