
#  Сhat frontend
[![Maintainability](https://api.codeclimate.com/v1/badges/05ee95200bd6dd123f97/maintainability)](https://codeclimate.com/github/serikoff/chat-client/maintainability)
This repository is the backend part of the chat.

[Chat backend](https://github.com/serikoff/chat-server)

## Demo
[chat-app](http://chat-app.website/)

##
  **Stack:**
-   ReactJS
-   React Router
-   Redux
-   Redux-thunk
-   Ant Design
-   Axios
-   Socket.io
-   Date-fns
-   Formik
-   Lodash
-   Emoji-mart

##  Setup

clone git and npm install
```sh
$ git clone https://github.com/serikoff/chat-client
$ cd chat-client
$ npm install
```

##  Deployment
```sh
$ cd chat-client
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

The build folder will be created in the project root.
This folder contains static project files that can be hosted.

Using nginx is recommended.
[Configure nginx for nodejs backend and React frontend app](https://www.digitalocean.com/community/questions/configure-nginx-for-nodejs-backend-and-react-frontend-app)
In the nginx configuration, you need to configure proxying API requests to port 3003.

### Learn More

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
