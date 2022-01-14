[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![node](https://img.shields.io/badge/node-16.x-233056)](https://nodejs.org)

# firebase-oskey-example

(c) Copyright OSkey SAS. MIT License.

## About

This is an example project to run a cloud app on Firebase (project
oskey-example). This repository provides the backend side (Auth,
Cloud Firestore, Cloud Functions and Cloud Storage).

Emulators and unit tests are available, along with CI/CD to deploy releases
online.

It is provided under the MIT License.

## Getting started

### Requirements

- `node` v16.x

Note: `firebase-tools` are not required to be installed globally.

### Clone and download dependencies

Clone the repository
[oskey-example/firebase-oskey-example](https://github.com/oskey-example/firebase-oskey-example)
then download the dependencies (at root level: `firebase-tools` and for the
Cloud Functions):

```sh
git clone git@github.com:oskey-example/firebase-oskey-example.git
cd firebase-oskey-example
npm ci
```

### Build Cloud Functions

Only the Cloud Functions required to be build prior to running emulator. To do
so go into the `functions` folder and:

```sh
npm ci
npm run lint
npm run build
```

### Run the emulator

Prior to running the emulators, the config file `firebase.json` must be created (a `firebase.json.dist` file is available for reference).).

Then each emulator configuration can be adjusted to listen on a given port and
hostname (i.e.: the API has to call this hostname). Unless trying to test the a
mobile app, the hostname could be left to default (`localhost`).

Here's an example:

```json
{
  "firestore": {
    "rules": "firestore/firestore.rules",
    "indexes": "firestore/firestore.indexes.json"
  },
  "functions": {
    "predeploy": ["npm --prefix \"$RESOURCE_DIR\" run lint", "npm --prefix \"$RESOURCE_DIR\" run build"],
    "source": "./functions"
  },
  "storage": {
    "rules": "storage/storage.rules"
  },
  "emulators": {
    "auth": {
      "hostname": "localhost",
      "port": 18001
    },
    "functions": {
      "hostname": "localhost",
      "port": 18003
    },
    "firestore": {
      "hostname": "localhost",
      "port": 18002
    },
    "storage": {
      "hostname": "localhost",
      "port": 18005
    },
    "ui": {
      "enabled": true,
      "hostname": "localhost",
      "port": 18000
    },
    "hub": {
      "hostname": "localhost",
      "port": 18099
    }
  }
}
```

The emulator can be started using the following command, from the root folder of
the project:

```sh
npm run emul
```

There are additional scripts available:

- `npm run emul:export`: export the data when the emulators stops (to run on the
  same data other tests)
- `npm run emul:import`: import the data exported from a previous run

### Unit testing

Prior to running the unit tests, the config file `config.json` must be set in the `test` folder (a `config.json.dist` file is available for reference).

Here's an example:

```json
{
  "projectId": "oskey-example",
  "region": "europe-west",
  "hubHostname": "localhost",
  "hubPort": 18099
}
```

The hub is used to get the detail about the emulators, so it self configures.

Then, the dependencies must be downlaoded. To do so run `npm ci` in the `test` folder.

The unit tests can be run in two ways:

- While the emulators run
- Along with emulators (no emulators should already be running)

To run unit tests while the emulators is started, go to the `test` folder then:

```sh
npm test
```

**Important**: The units deletes all existing data and user prior to running the tests.

To run unit tests along with the emulatores, run the following command from the
root folder of the project:

```sh
npm test
```

It is possible to remove all console output of the emulators by using:

```sh
npm run test:silent
```

## Auth

The following authentication methods are available:

- Email/Password

## Cloud Firestore

Rules and indexes can be found on in the folder `firestore`.

## Cloud Functions

Function code can be found on in the folder `functions`. They are coded in
`Typescript` and uses `eslint` to enforce coding standard.

## Cloud Storage

Rules can be found in the folder `storage`.

## Emulators and unit tests

Unit test code for the backend (Auth, Cloud Firestore, Cloud Functions and Cloud
Storage) can be found in the folder `test`. They are coded in `Typescript` and
uses `eslint` to enforce coding standard. `Mocha` + `chai` is used to
orchestrate the tests.

In addition, the package [gp-firebase-emulator-unit-test](https://www.npmjs.com/package/gp-firebase-emulator-unit-test)
is used to provide a framework to unit test on Firebase emulators.

When running the emulators, it will download the adequate versions.

The emulators will use the following port (if you use the provided configuration):

| Emulator        | Port  |
| --------------- | ----- |
| Auth            | 18001 |
| Cloud Firestore | 18002 |
| Cloud Functions | 18003 |
| Cloud Storage   | 18005 |

These additional ports will be run for the emulator engine itself.

| Additional server | Port  |
| ----------------- | ----- |
| Emulator UI       | 18000 |
| Emulator Hub      | 18099 |

## Contributions

Please find [here](./CONTRIBUTING.md) the instructions for contributions.

## Licenses

Please find [here](./LICENSE) the detail on licensing.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
