# Practical-Microservices

This code will follow the examples in Ethan Garofolo's book Practical Microservices: Build Event-Driven Architectures with Event Sourcing and CQRS

## Notes for chapter 1 ##
- You must install node, docker, express, camelcase-keys, and uuidv4 to get the code to run
- To run code npm run start-dev-server
- go to http://localhost:3000 to see the interface
- I found it helpful to play with express first, building the documentation's hello world program.
- There were quite a few missing steps along the way, for instance there are a few places where the code forgets module.exports or doesn't add things into the config and index files immediately when they are introduced (I noticed this when mount-routes was introduced).  So sometimes looking ahead a few pages or checking out the source code that accompanies the book really helps.  You can find it here: https://pragprog.com/titles/egmicro/practical-microservices/ really helps
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
