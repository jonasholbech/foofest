# Front End Design Elective

## Spring 2022

### What is this?

In order to solve the exam assignment, you have to hook up to a server we've built.

You only need one server per group, so choose one to do it.

1. Go to <a href="https://heroku.com">Heroku.com</a> and sign up for a free account.
2. Once signed up, click this link <br><a href="https://heroku.com/deploy?template=https://github.com/jonasholbech/foofest/tree/master"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy"></a>
3. That will start the deployment of a new server.
4. Pick a unique name for it
5. and choose Europe as the location
6. Click "Deploy App"
7. Once it's complete you can click "open" or was it "view app"?
8. That should give you a lot of JSON
9. You're almost done. If the service crashes or runs out of tickets, you should restart the server. You do that by going to Heroku.com, logging in and clicking "Restart all dynos" <br><img src="restart.png">

### Endpoints

The server will give you the following endpoints

#### GET `/bands`

A list of all the bands playing at the festival. The list is not updated, even if the act is cancelled

#### GET `/schedule`

A list of which acts (bands) plays at which scene, and when. Acts can be cancelled, and if they are, the list will be updated, so you can call this endpoint regularily

#### GET `/schedule/:day`

Gives you list of acts playing on the specified day. Will accept the following strings as the argument:
`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`. The data is also updated is an act is cancelled

#### GET `/events`

Gives you a list of events (cancellations) since your last call to the endpoint. You can use this list to grab the cancellations

#### GET `/available-slots`

Gives you a list of camping areas, and how many available slots there are. It is updated each time a slot is bought / reserved, so we suggest calling it regularily

#### PUT `/reserve-spot`

Reserves `amount` slots at a given `area`

Send a PUT request with the following payload/footprint

```js
  {
    area: String,
    amount: Number
  }
```

This will give you an `id` for that reservation. Reservation is valid for X minutes while the user fille out the rest of the payment/ordering info. Use the `id` together with the `/fullfill-reservation` endpoint to complete the order

The area and available slots can be found in the `/available-slots` endpoint

#### POST `/fullfill-reservation`

Finalizes the reservation

Send a POST request with the following payload

```js
{
  id: String;
}
```

### Optional endpoints

#### POST `/settings`

Allows you to change some of the underlying mechanics in the API.
Send a POST request with the following payload

```js
{
  eventFrequency:num,
  eventChance:num,
  reservationDuration:num
}
```

You can leave out properties you do not wish to change. The default values are

```js
const initialSettings = {
  eventFrequency: 10, //seconds
  eventChance: 1, //percent
  reservationDuration: 60 * 1000, //milliseconds
};
```
