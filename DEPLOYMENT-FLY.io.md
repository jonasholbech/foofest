# Front End Design Elective

## Deployment git / fly.io

## Autumn 2022

### What is this?

In order to solve the exam assignment, you have to hook up to a backend I've built.

You only need one server per group, so choose one to do it. We'll be using fly.io since it's free.

### Remote server

(needed for the exam, should not used during development). Set it up and test your solution against it once in a while.

1. clone this repository
2. open your terminal inside the project
3. Follow these instructions https://fly.io/docs/speedrun/
4. Once it has finished, you should be able to run `flyctl open`. That will open a rather boring page, try appending `/bands` to the URL to verify it's working

### Local server

Should be used as you develop. It'll be faster and use less resources.

1. Clone this repository
2. `npm install`
3. `npm run dev`

This will give you a server running on http://localhost:8080 try hitting that in your browser and append `/bands` at the end

### Endpoints

All endpoints are [documented here](https://jonasholbech.github.io/Foofest-Exam-API-Docs/)
