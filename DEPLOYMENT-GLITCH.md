# Front End Design Elective

## Deployment git / glitch.com

### What is this?

In order to solve the exam assignment, you have to hook up to a backend I've built.

You only need one server per group, so choose one to do it. We'll be using glitch.com since it's free.

### Remote server

(great for the exam / portfolio, should not used during development). Set it up and test your solution against it once in a while.

1. fork this repository
2. Copy the URL you would use for cloning your repo
3. Sign up for Glitch at https://glitch.com
4. Click "New Project" and then "Import from GitHub"
5. Paste in the URL you copied from you repository
6. Once it has finished you'll be given a site name, like `free-simple-babcat`
7. You server is now live at `https://free-simple-babcat.glitch.me` (replace my site name with yours)
8. Try appending `/bands` to the URL to verify it's working

### Local server

Should be used as you develop. It'll be faster and use less resources.

1. Clone your repository
2. `npm install`
3. `npm run dev` or `npm run dev-server`

This will give you a server running on http://localhost:8080 try hitting that in your browser and append `/bands` at the end

### Please note

1. The remote server spins down whenever it can. So the first time you hit it there can be a delay ranging from 5-30 seconds, maybe implement a loader/spinner?

This will probably mess up Next when fetching serverside, this is OK, it's a free service after all, just refresh and everything will be fine

### Endpoints

All endpoints are [documented here](https://jonasholbech.github.io/Foofest-Exam-API-Docs/)
