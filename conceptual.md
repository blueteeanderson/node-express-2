### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  - JSON web tokens are used to authenticate web transactions

- What is the signature portion of the JWT?  What does it do?
  - The header, payload and secret are hashed to create a signature.
  - The signature ensures that the token wasn't tampered with. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - Yes 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - After initial authentification with a system such as user name and password, you can pass a secret, header (usually the library will take care of this) and a payload to a JWT library to generate a JWT. This token can be passed back to the endpoint. All future request that pass in the token can be verified. 

- Compare and contrast unit, integration and end-to-end tests.
  - Both unit and intergration tests test parts of an application.
  - Similar logic and libraries can be used to implement the tests
  - Unit tests test a small part of the application like the output of a function. Where integration tests test a component where end to end tests a whole feature. 

- What is a mock? What are some things you would mock?
  - A mock is used to eliminate randomness in testing. If you use random numbers, providing a mock would allow you to make it testable. 

- What is continuous integration?
  - Continuous integration is building and realeasing small features frequently rather than one large lump.

- What is an environment variable and what are they used for?
  - Global system variables that are able to be access from anything running on the system

- What is TDD? What are some benefits and drawbacks?
  - Test driven development is when you write tests first and code for the tests after. You build a little at a time but while testing first. 
- What is the value of using JSONSchema for validation?
 - They cut down on building custem validations when checking submitted data
 - They are easy to scale with your application 

- What are some ways to decide which code to test?
 - Don't get hung up on testing everything. Test what is important.
 - Think about edge cases and how they will effect your app
 - Things that can break the app 

- What does `RETURNING` do in SQL? When would you use it?
 - RETURNING returns values from the query you ran
 - If you insert a record, you may want to return the unique identifyer
 - Getting a value back out to the code that wasn't sent to the query 

- What are some differences between Web Sockets and HTTP?
  - Web Sockets keep an open connection while http requires a new request
  - Web sockets are good for things like chat and gaming while http is good for APIs and static resources 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I prefered Express because you can use Javascript on the front and backend as opposed to both
  - I am just more familiar with Javascript

