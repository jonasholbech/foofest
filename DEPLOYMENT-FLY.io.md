# DEPRECATED!!!!

# Front End Design Elective

## Deployment git / fly.io

### What is this?

In order to solve the exam assignment, you have to hook up to a backend I've built.

You only need one server per group, so choose one to do it. We'll be using fly.io since it's free.

### Remote server

(great for the exam / portfolio, should not used during development). Set it up and test your solution against it once in a while.

1. clone this repository
2. open your terminal inside the project
3. Follow these instructions https://fly.io/docs/speedrun/
4. Sign in with GitHub
5. Choose No
6. Choose Frankfurt
7. You have to input your credit card info, but if you work on your local server, there will be no charges to it!
   <img src="deployment/flyiofree.png" alt="" />
8. Once it has finished, you should be able to run `flyctl open`. That will open a rather boring page, try appending `/bands` to the URL to verify it's working
9. monitor your usage often when developing

### Local server

Should be used as you develop. It'll be faster and use less resources.

1. Clone this repository
2. `npm install`
3. `npm install --global yarn`
4. `npm run dev`

This will give you a server running on http://localhost:8080 try hitting that in your browser and append `/bands` at the end

### I refuse to add my credit card

Fair enough. Then work locally and you will not have the option of testing/sharing it online.

1. Make a very clear note in your documentation, stating that we need to run your project locally
2. If you make changes to the server code (images etc) make sure you've forked the repo and give us a link to that one as well

### Endpoints

All endpoints are [documented here](https://jonasholbech.github.io/Foofest-Exam-API-Docs/)
