This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `installation`

Git clone this repo
open terminal and run npm install
opens in browser
happy coding!

### `error`

ERRORS Error on 'react-native start' , "error Invalid regular expression: "

Navigate to this folder: C:\xampp\htdocs[foldername]\node_modules\metro-config\src\defaults
open the blacklist.js file and 'edit'
Replace this line with: var sharedBlacklist = [ /node_modules[/\]react[/\]dist[/\]./, /website/node_modules/./, /heapCapture/bundle.js/, /./tests/./ ];
save file and run npm start again!
GUIDE: https://www.youtube.com/watch?v=U9T6YkEDkMo
