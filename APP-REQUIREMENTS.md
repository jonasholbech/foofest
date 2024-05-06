# Front End Design Elective - Spring 2024

## System 2, the festival sub-system, requirements

The following are the minimal requirements for the festival sub-system.

You are free to add other features to help the guests explore the music, like browsing by genre, searching, adding to favourites etc

### Requirements

The system should show the following information

- the bands playing at the festival
- who's playing, where
- - The stages can be seen in the `/schedule` endpoint and won't change ("Midgard", "Vanaheim", "Jotunheim")
- Optionally: any cancellations that might occur.

### Images

Since we don't have all the images of the bands playing yet, you'll have to do a little magic

In the data you'll find a property called `logo`. If it starts with `https://` then just use it directly. If it starts with anything else, we have the image, and you can find it at `https://YOUR-APP.glitch.me/logos` or `http://localhost:8080/logos`

Some images will have a property called `logoCredits`. If that property exists, you must use the data in the UI to give the author credits.

### Using the API

The main endpoints you should be working with are:

- `/bands`
- `/schedule`
- `/events`

The bands won't change over time, but the schedule and events will.

#### Notes

Using the `/events` endpoint is optional.
Cancellations happen on a regular basis, it is optional if you want to reflect that in your UI or not.
