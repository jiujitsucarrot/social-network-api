# The Wu Social Network

## Your Task

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

Your Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

No seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Sources

This challenge has been giving me a problem or two. I am still currently debugging. I am able to seed my sample data, start the server as well as connect to MongoDB. Unfortunately I am having some issues with my routes at the moment. Sources that were utilized in the progression of this challenge were as following: Revisiting course lectures, office hours, TA's, bouncing ideas off of colleagues, w3schools, Google so many Google searches, YouTube, and hand written notes from the given week.

## Links

* https://www.youtube.com/watch?v=Xus_-KLocmU
* https://github.com/jiujitsucarrot/social-network-api

## Deliverables: 10%

* Your GitHub repository containing your application code.

## Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

    * The walkthrough video must show all of the technical acceptance criteria being met.

    * The walkthrough video must demonstrate how to start the application’s server.

    * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

    * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

    * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

    * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

    * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Uses the Mongoose package to connect to a MongoDB database.

    * Includes User and Thought models outlined in the Challenge instructions.

    * Includes schema settings for User and Thought models as outlined in the Challenge instructions.

    * Includes Reactions as the reaction field's subdocument schema in the Thought model.

    * Uses functionality to format queried timestamps properly.

## Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

## Bonus: +10 Points

* Application deletes a user's associated thoughts when the user is deleted.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.