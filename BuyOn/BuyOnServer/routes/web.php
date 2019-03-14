<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Aquí es donde puede registrar todas las rutas para una aplicación.
| Es una brisa. Simplemente dile a Lumen los URI a los que debe responder
| y asigne el Cierre para llamar cuando se solicite ese URI.
|
*/

$router->get('/', function () use ($router) {
   return 'Web';
});


$router->get('/product', ['uses' => 'ProductController@get']);
$router->post('/order', ['uses' => 'OrderController@post']);

$router->group(['middleware' => []], function () use ($router) {
   $router->post('/login', ['uses' => 'AuthController@login']);
   $router->post('/register', ['uses' => 'AuthController@register']);
   $router->post('/password_recovery_request', ['uses' => 'AuthController@passwordRecoveryRequest']);
   $router->get('/password_recovery', ['uses' => 'AuthController@passwordRecovery']);
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   $router->post('/user/password_change', ['uses' => 'AuthController@passwordChange']);

   //CRUD Profilepicture
   $router->post('/profilepicture', ['uses' => 'ProfilepictureController@post']);
   $router->get('/profilepicture', ['uses' => 'ProfilepictureController@get']);
   $router->get('/profilepicture/paginate', ['uses' => 'ProfilepictureController@paginate']);
   $router->put('/profilepicture', ['uses' => 'ProfilepictureController@put']);
   $router->delete('/profilepicture', ['uses' => 'ProfilepictureController@delete']);

   //CRUD User
   $router->post('/user', ['uses' => 'UserController@post']);
   $router->get('/user', ['uses' => 'UserController@get']);
   $router->get('/user/paginate', ['uses' => 'UserController@paginate']);
   $router->put('/user', ['uses' => 'UserController@put']);
   $router->delete('/user', ['uses' => 'UserController@delete']);

   //CRUD Product
   $router->post('/product', ['uses' => 'ProductController@post']);
   $router->get('/product/paginate', ['uses' => 'ProductController@paginate']);
   $router->put('/product', ['uses' => 'ProductController@put']);
   $router->delete('/product', ['uses' => 'ProductController@delete']);

   //CRUD Order
   $router->get('/order', ['uses' => 'OrderController@get']);
   $router->get('/order/paginate', ['uses' => 'OrderController@paginate']);
   $router->put('/order', ['uses' => 'OrderController@put']);
   $router->delete('/order', ['uses' => 'OrderController@delete']);

   //CRUD Detail
   $router->post('/detail', ['uses' => 'DetailController@post']);
   $router->get('/detail', ['uses' => 'DetailController@get']);
   $router->get('/detail/paginate', ['uses' => 'DetailController@paginate']);
   $router->put('/detail', ['uses' => 'DetailController@put']);
   $router->delete('/detail', ['uses' => 'DetailController@delete']);
});
