# e-commerce-api
restful-api with node js 

**USER**

|Route||HTTP Verb||Post Body||Description|
|-----||---------||---------||-----------------------------|
|/users||GET||Empty||List all user|
|/users||POST||{'username':foo,'password':'bar','name':'foo','surname':'bar','birdtyear':'1997','createdAt','default=date.now'}||Create new user|
|/users/:user_id||GET||Empty||Find user by id |
|/users/:user_id||PUT||Empty||Update user by id |
|/users/:user_id||DELETE||Empty||Delete user by id |
|/users/olduser||GET||Empty||Top 10 older user |

**Products**
|Route||HTTP Verb||Post Body||Description|
|-----||---------||---------||-----------------------------|
|/products||GET||Empty||List all user|
|/products||POST||{'username':foo,'password':'bar','name':'foo','surname':'bar','birdtyear':'1997','createdAt','default=date.now'}||Create new user|
|/products/:product_id||GET   ||Empty||Find user by id        |
|/products/:product_id||PUT   ||Empty||Update user by id      |
|/products/:product_id||DELETE||Empty||Delete user by id      |
|/products/best10     ||GET   ||Empty||Top 10 products by favs|
