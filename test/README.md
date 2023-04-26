# emulators-oskey-example - OSkey | One Simple Key

![Build](https://img.shields.io/badge/Build-Passing-green.svg)

[![Node.js](<https://img.shields.io/badge/Node.js-12%20(LTS)-darkgreen.svg>)](https://nodejs.org) [![Platform](https://img.shields.io/badge/Platform-Firebase-orange.svg)](https://firebase.google.com) ![Language](https://img.shields.io/badge/Language-Javascript-red.svg)

[![License](https://img.shields.io/badge/License-OSkey's%20EULA-blue.svg)](LICENSE.md)

`Copyright (c) 2022 OSkey.io. MIT License.`

Firebase testing using emulators

## Requirement

### Node

`Node.js` and `npm` must installed first. Refer to the [Node.js](https://nodejs.org) webside first.

### Firebase CLI and emulators

Firebase CLI must be installed:

```
npm i -g firebase-tools
```

(Note that on MacOS you need to use `sudo`)

Prior to downloading the emulators, the `.firebaserc` file is required:

Copy the `.firebaserc.dist` file and change all occurences of PROJECT_CODE by the firebase projec code.

If not yet done, log with you firebase account:

```
firebase login
```

Download the emulators using:

```
firebase setup:emulators:firestore
firebase setup:emulators:pubsub
```

### Java JDK

[Java Development Kit](https://www.java.com/en/download/faq/develop.xml) (>= 11) shall be installed for the Firebase emulators to run.

### Project dependencies

-   Cloud functions: the repository [functions-oskey-example](https://bitbucket.org/oskey-io/functions-oskey-example) must be cloned and place in the same folder as this repository.

-   Cloud Firestore security rules: the repository [firebase-oskey-example](https://bitbucket.org/oskey-io/firebase-oskey-example) must be cloned and place in the same folder as this repository.

The folder structure shall look like:

```
./emulators-oskey-example
./firebase-oskey-example
./functions-oskey-example
```

## Unit testing with mobile and web apps

### Emulators and test data

The first time, the emulators must be started \***\*_without importing data_\*\***:

```
firebase emulators:start
```

The minimum data set required is the `/users/{userId}` for each user used for testing. Once set, it can be exported to the `./data` folder:

```
firebase emulators:export ./data --only firestore
```

Then, once minimum test data is created, emulators must be started \***\*_with importing data_\*\***:

```
firebase emulators:start --import ./data
```

At any point of time data can be exported to update the minimal test data set.

## Security rules unit testing

The emulators must be started \***\*_without importing data_\*\***:

```
firebase emulators:start
```

Testing of the security rules can then be run via the command `npm test` in the folder `test`.

## Authors

-   Greg PFISTER (greg@oskey.io) - Lead developper
