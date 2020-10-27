# Practical-Microservices

This code will follow the examples in Ethan Garofolo's book Practical Microservices: Build Event-Driven Architectures with Event Sourcing and CQRS
It's been set up for demo purposes for the Maryland Software Patterns and Practices group: https://www.meetup.com/Maryland-Software-Patterns-Practices/

The notes below are from my experiences programming along with the book.  I've left in every commit showing the winding paths I took to get the code into working order.  Hopefully some of my notes will save you some frustrations along the way.

The source code that shipped with the book can be found here: https://pragprog.com/titles/egmicro/practical-microservices/

- The src folder is where I worked through the code in the book.
- The first-pass folder is chapter 1 code provided with the book.
- The video-tutorials folder is the remainder of the code provided with the book.  (It goes beyond chapter 5, so it won't match what's in src until we go through the rest of the book)

## Notes for chapter 1 ##
- You must install node, docker, express, camelcase-keys, and uuid to get the code to run
- uuid importing appears to have changed.  try this: const { v4: uuid } = require('uuid')
- To run code type npm run start-dev-server
- go to http://localhost:3000 to see the interface
- I found it helpful to play with express first, building the documentation's hello world program.
- If youve never used docker before, it may also be helpful to experiment with docker.  I found it much easier to install docker on a machine running windows professional.  I tried first on a home installation and ran into quite a few frustrations.
- There were quite a few missing steps along the way, for instance there are a few places where the code forgets module.exports or doesn't add things into the config and index files immediately when they are introduced (I noticed this when mount-routes was introduced).  So sometimes looking ahead a few pages or checking out the source code that accompanies the book really helps.   
- All source code examples for Chapter 1 are in the first-pass folder

## Notes for chapter 2 ##
- All source code for chapter 2 is in the video-tutorials folder
- There is a new docker yaml which includes the message store.  So remember to stop the container from Chapter 1 and re-run _docker-compose rm -sf && docker-compose up -d_ with the yaml file from the video-tutorials folder
- This chapter introduces the messageStore, but doesn't set it up, so this code won't run yet (missing the postgres-client code)

## Notes for chapter 3 ##
- You'll need to pay special attention to updating src/config.js.  The prior db implementation needs to have knexClient and postgresClient separated
- The postgresClient needs to be instantiated in the createDatabase method in postgres-client.js

## Notes for chapter 4 ##
- You may be tempted to try to run the server, but it will not run if you have followed the instructions in the book to the letter because there is some subscription code that is not defined yet.  Removing the premature subscriptions code will allow you to run the server.

## Notes for chapter 5 ##
- Make sure you replace the subscriptions code you removed to get chapter 4 code working.
- The category file is not shown or mentioned in the book, you'll need to copy it from the source code into the message-store directory
