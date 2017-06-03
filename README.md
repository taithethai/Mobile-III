# Mobile III

## Assignment

For this assignment you will be creating a todo list that will take advantage
of the existing signup/signin authentication flow that the server had for the
last project.

This is the API documentation:

[POST] `/users` - Requires an `email` and `password` property on the body.
Returns a JWT and the user's info. Creates a new user in the database.
[POST] `/signin` - Requires an `email` and `password` property on the body.
Returns a JWT and the user's info.
[GET] `/users` - Requires a JWT header called `authorization`.
Returns an array of all users in the database.  Useful for debugging.
[GET] `/user` - Requires a JWT header called `authorization`.
Returns the user that the JWT is associated with.
[POST] `/todos` - Requires a JWT header called `authorization`.
The body should have a `text` property that is a String.
A new todo item will be added to the user's todos array that's associated with the JWT.
[PUT] `/todos/:todoId` - Requires a JWT header called `authorization`.
Toggles the specified todo object's `completed` property to either true or false.
[DELETE] `/todos/:todoId` - Requires a JWT header called `authorization`.
Removes the specified todo object from the JWT's user's todo's array.

For your assignment build out a fully functioning todo list mobile application.
Make use of this API to persist your todo list information.
Use the signup/signin flow from the previous project as a starting point.

