# Practical-Microservices

This code will follow the examples in Ethan Garofolo's book Practical Microservices: Build Event-Driven Architectures with Event Sourcing and CQRS

## Notes for chapter 1 ##
- You must install node, docker, express, and uuidv4 to get the code to run
- To run code npm run-start-dev-server
- I found it helpful to play with express first, building the documentation's hello world program.
- There were quite a few missing steps along the way, for instance there are a few places where the code forgets module.exports or doesn't add things into the config and index files immediately when they are introduced (I noticed this when mount-routes was introduced).  So sometimes looking ahead a few pages or checking out the source code that accompanies the book really helps.  You can find it here: https://pragprog.com/titles/egmicro/practical-microservices/ really helps
- All source code examples for Chapter 1 are in the first-pass folder

## Notes for chapter 2 ##
- All source code for chapter 2 is in the video-tutorials folder
- If you are running from Ethan Garofolo's source code and aren't using a local copy, don't forget to stop the docker container from Chapter 1 and re-run _docker-compose rm -sf && docker compose up_ from the video-tutorials folder
- This chapter introduces the messageStore, but doesn't set it up, so this code won't run yet (missing the postgres-client code)
