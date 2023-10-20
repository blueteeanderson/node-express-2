1. Install and Setup Bug
    - Had to add --if-exists flag after each dropdb statement in the run seed command
    - In package.json
2. Tests Fail when trying to run. The following had to be added to the top of the routes.test.js
    - const { TextEncoder, TextDecoder } =require('util');'
    - Object.assign(global, { TextDecoder, TextEncoder }); 
3. Get /:username should only return information if the user in the path is the same as the logged in user
4. Get / should only return username, first_name and last_name
5. Delete /:username although the test works to keep query string as a token option this is bad practice and wont work on long tokens
6. 