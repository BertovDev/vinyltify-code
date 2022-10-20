# Vinyltify
> "Version 1"

## Play your favorite songs on a turntable!

### Installation
You need **Node.js** in order to run this application.
The local server run in the port 3001 and the application runs in the port 3000, both can be changed.

- Run `npm i` in the global directory to download server dependencies
- Run `npm i` inside the **/client** folder to download the client depencenies
- Change the .env with your spotify credentials ( you should create a spotify integration ) [spotify-dashboard](https://developer.spotify.com/dashboard/login "spotify dashboard")
- Run `node server.js` in the global directory to start the server
- Run `npm run start` in the **/client** folder to start the development app

### Aclarations

Your redirect URI created in the [spotify-dashboard](https://developer.spotify.com/dashboard/login "spotify dashboard") must match your REDIRECT_URI in the .env file![Screenshot from 2022-10-14 14-34-05](https://user-images.githubusercontent.com/62818001/196833725-30426e37-f6e8-4a07-aff5-92f62229e65a.png)
