
# Сhat client
[![Maintainability](https://api.codeclimate.com/v1/badges/05ee95200bd6dd123f97/maintainability)](https://codeclimate.com/github/serikoff/chat-client/maintainability)


This repository is the frontend part of the chat. `[In developing]`
[Chat server](https://github.com/serikoff/chat-server)

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

[Learn more about deployment](https://facebook.github.io/create-react-app/docs/deployment)


## Demo
[chat-app](http://chat-app.website/)

```
login: demouser@li.ru
pass: Qwerty777
```

#### Watch the video demo

[![Watch the video demo](https://res.cloudinary.com/serikoff/image/upload/v1580662690/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2020-02-02_%D0%B2_19.57.41_lax7xm.png)](https://res.cloudinary.com/serikoff/video/upload/v1580661654/Demo_gafzqg.mp4)
