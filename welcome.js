/*

1st level of testing development this is where individual units or components of a software are tested

Level 1 
	Unit Tests

	Level 2
		Integration Tests

		Level 3
			Acceptance Tests

QA Engineer
	Writes tests
	Kind of likewriting code, but writing tests

	Manual testing
		Going on Postman to try to break an application

Why do we test?
	Ensures confidence in your code when released to production
	To ensure that code works as intended
	Helps save a ton of time and cost by catching bugs early on
		You can write good tests and bad tests, just like good code/bad code
	Underrated skill, looks very good on your skill set
	Helps with good project documentation
	Integrates well with CI/CD pipeline
		CI/CD - *** LOOK INTO

WRITING GOOD UNIT TEST TIPS

	1. Isolate each test (make them independent)

	2. Follow the AAA rule: Arrange, Act, Assert!
			Arrange: Set up variables, fields, and properties
			Act: Call the method you are testing
			Assert: Use a testing framework to verify

	3. Your first "set" of tests should be the simplest (happy paths)

	4. Cover every path code

	5. List out "what-if" scenarios for your code logic

	6. Be as DESCRIPTIVE of your test names as you can

	7. Integrate your unit tests into CI/CD pipeline

WHAT IS JEST?

	Created by Facebook developer network
	So it works well with React

	Can be used with ...
		React.js
		Node.js
		Any other JS project

	Advantages
		Fast, allows you to run tests in parallel so it reduces test execution time
		Built-in code coverage
		Supports all types of mocking




*/