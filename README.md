# Social net pet project

## Backend

[Serverless](https://www.serverless.com/) framework is used as a backend. Github source [https://github.com/janis-rasa/social_serveless](https://github.com/janis-rasa/social_serveless)

## Available Scripts

Before start the project you need a [trusted certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority). In this project, [mkcert](https://github.com/FiloSottile/mkcert) was used to generate the certificate. How to do this is described in detail [here](https://web.dev/how-to-use-local-https/). The package.json file has already been modified as described [here](https://stackoverflow.com/questions/68082429/how-to-setup-local-environment-to-run-on-https).

To start project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
