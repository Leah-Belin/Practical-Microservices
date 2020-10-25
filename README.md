# Practical-Microservices

This code will follow the examples in Ethan Garofolo's book Practical Microservices: Build Event-Driven Architectures with Event Sourcing and CQRS

## Notes for chapter 1 ##
- you must install node, docker, express, and uuidv4 to get the code to run
- to run code npm run-start-dev-server
- I found it helpful to play with express first, building the documentation's hello world program.
- there were quite a few missing steps along the way, for instance there are a few places where the code forgets module.exports or doesn't add things into the config and index files immediately when they are introduced (I noticed this when mount-routes was introduced).  So sometimes looking ahead a few pages or checking out the source code that accompanies the book really helps.  You can find it here: https://pragprog.com/titles/egmicro/practical-microservices/ really helps
