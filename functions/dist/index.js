"use strict";
/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.onUserUpdated = exports.onUserCreated = exports.onUserAccountDeleted = exports.onUserAccountCreated = void 0;
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const firebase_auth_1 = require("./firebase_auth");
const firebase_firestore_1 = require("./firebase_firestore");
/** *****************************************************************************
 * Initialize app
 ***************************************************************************** */
admin.initializeApp();
/** *****************************************************************************
 * Authentication trigger
 ***************************************************************************** */
// On user creation
exports.onUserAccountCreated = functions
    .region('europe-west1')
    .auth.user()
    .onCreate((user) => firebase_auth_1.OSKFirebaseAuthModule.userAccountController.onUserAccountCreated(user));
// On user deletion
exports.onUserAccountDeleted = functions
    .region('europe-west1')
    .auth.user()
    .onDelete((user) => firebase_auth_1.OSKFirebaseAuthModule.userAccountController.onUserAccountDeleted(user));
/** *****************************************************************************
 * DB Trigger : User
 ***************************************************************************** */
exports.onUserCreated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}')
    .onCreate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userController.onCreate(snapshot, context));
exports.onUserUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}')
    .onUpdate((snapshot, context) => firebase_firestore_1.OSKFirebaseFirestoreModule.userController.onUpdate(snapshot, context));
//# sourceMappingURL=index.js.map