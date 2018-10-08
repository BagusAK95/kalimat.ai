
# Initial Prototype
### REST API
```
GET /user/?page={page}&limit={limit}
GET /user/{id}
POST /user
PUT /user/{id}
DELETE /user/{id}

GET /conversation?page={page}&limit={limit}
GET /conversation/{id}
POST /conversation
PUT /conversation/{id}
DELETE /converation/{id}
```
### Question
+ What design patterns do you recognize here?
    - Dependency Injection

# Injectable Components
### Injection
```
const  Store  =  use('App/Store/Memory')

class  InjectorController {
	async  get({ params }) {
		return  Store.get(params.model, params.id)
	}  

	async  list({ params, request }) {
		return  Store.list(params.model, request.get().page, request.get().limit)
	}
```
### Question
+ If you created a `DBStore` with path `components/store/db_store` what do you need to do to swap the implementation.
	- In InjectorController.js just swap `const  Store  =  use('App/Store/Memory')` to `const  Store  =  use('App/Store/Database')`

# Generic Repo
### Dynamic Routes
```
Route.get('/:model(user|conversation)/:id', 'InjectorController.get')
Route.get('/:model(user|conversation)', 'InjectorController.list')
Route.post('/:model(user|conversation)', 'InjectorController.create')
Route.put('/:model(user|conversation)/:id', 'InjectorController.update')
Route.delete('/:model(user|conversation)/:id', 'InjectorController.remove')
```
### Question
+ What is the benefit of this change?
	- User and Conversation do not need to create Controller, only represented by InjectorController. Code to be simple.

# Unit Test
```
adonis test
```

```
info: serving app on http://127.0.0.1:4000

  Conversation
API.
    ✓ Create Conversation (865ms)
    ✓ Update Conversation (20ms)
    ✓ Get List Conversation By Pagination (16ms)
    ✓ Get Conversation By ID (8ms)
    ✓ Remove Conversation (9ms)

  User
    ✓ Create User (7ms)
    ✓ Update User (9ms)
    ✓ Get List User By Pagination (6ms)
    ✓ Get User By ID (9ms)
    ✓ Remove User (5ms)

   PASSED

  total       : 10
  passed      : 10
  time        : 962ms
```