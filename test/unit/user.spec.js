const { test, trait } = use('Test/Suite')('User')

trait('Test/ApiClient')

test('Create User', async ({ client }) => {
  const response = await client.post('/user').send({
    name: "Bagus Abdul Kurniawan",
    gender: "male",
    city: "Malang",
    phone: "081217620474",
    email: "bagus.ak95@gmail.com"
  }).end()

  response.assertStatus(200)
})

test('Update User', async ({ client }) => {
  const response = await client.put('/user/1').send({
    name: "Kevin Hendrawan",
    gender: "male",
    city: "Malang",
    phone: "081217620474",
    email: "bagus.ak95@gmail.com"
  }).end()

  response.assertStatus(200)
})

test('Get List User By Pagination', async ({ client }) => {
  const response = await client.get('/user/?page=1&limit=5').end()

  response.assertStatus(200)
})

test('Get User By ID', async ({ client }) => {
  const response = await client.get('/user/1').end()

  response.assertStatus(200)
})

test('Remove User', async ({ client }) => {
  const response = await client.delete('/user/1').end()
  
  response.assertStatus(200)
})