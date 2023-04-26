// //
// // firebase-oskey-example
// // Copyright (c) 2021-2023, OSkey SAS. MIT License.
// //

// import * as crypto from 'crypto';
// import { OSKTAccessControlDevice, OSKTBuilding, OSKTBuildingDoor, OSKTBuildingUnit, OSKTUser, OSKTUserDevice } from '@oskey-test/models';
// import { OSKStreetAddress } from '@oskey/core';

// const now = new Date();
// const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
// const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 7);

// const building1StreetAddress: OSKStreetAddress = {
//     houseNumber: '1',
//     streetName: 'Rue Paul Desportes',
//     postalCode: '75001',
//     city: 'Paris',
//     country: 'France',
//     isoCountryCode: 'FR',
//     coordinate: {
//         latitude: 48.8874652,
//         longitude: 2.302652,
//     },
// };

// const building2StreetAddress: OSKStreetAddress = {
//     houseNumber: '2',
//     streetName: 'Rue Paul Desportes',
//     postalCode: '75001',
//     city: 'Paris',
//     country: 'France',
//     isoCountryCode: 'FR',
//     coordinate: {
//         latitude: 48.855898,
//         longitude: 2.387967,
//     },
// };

// const building3StreetAddress: OSKStreetAddress = {
//     houseNumber: '3',
//     streetName: 'Rue Paul Desportes',
//     postalCode: '75001',
//     city: 'Paris',
//     country: 'France',
//     isoCountryCode: 'FR',
//     coordinate: {
//         latitude: 48.855898,
//         longitude: 2.387967,
//     },
// };

// const smithStreetAddress: OSKStreetAddress = {
//     houseNumber: '4',
//     streetName: 'Rue Paul Desportes',
//     postalCode: '75001',
//     city: 'Paris',
//     country: 'France',
//     isoCountryCode: 'FR',
//     coordinate: {
//         latitude: 48.883277,
//         longitude: 2.292545,
//     },
// };

// const johnDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'John phone',
//     },
//     companionDevices: [
//         {
//             id: crypto.randomUUID(),
//             data: {
//                 type: 'watch',
//                 name: 'John watch',
//             },
//         },
//     ],
// };

// const johnDoe: OSKTUser = {
//     id: 'john-doe',
//     auth: {
//         // uid: "john-doe",
//         email: 'john.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: building1StreetAddress,
//         },
//         publicProfile: {
//             firstName: 'John',
//             lastName: 'DOE',
//         },
//     },
//     devices: [johnDoePhone],
//     friends: [],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/johnDoe.jpg',
//     },
// };

// const janeDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Jane phone',
//     },
//     companionDevices: [
//         {
//             id: crypto.randomUUID(),
//             data: {
//                 type: 'watch',
//                 name: 'Jane watch',
//             },
//         },
//     ],
// };

// const janeDoe: OSKTUser = {
//     id: 'jane-doe',
//     auth: {
//         // uid: "jane-doe",
//         email: 'jane.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Jane',
//             lastName: 'DOE',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1978, 5, 15),
//             streetAddress: building1StreetAddress,
//         },
//     },
//     devices: [janeDoePhone],
//     friends: [johnDoe],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/janeDoe.jpg',
//     },
// };

// const kevinDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Kev phone',
//     },
//     companionDevices: [],
// };

// const kevinDoe: OSKTUser = {
//     id: 'kevin-doe',
//     auth: {
//         // uid: "kevin-doe",
//         email: 'kevin.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Kevin',
//             lastName: 'DOE',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(2013, 1, 27),
//             streetAddress: building1StreetAddress,
//         },
//     },
//     devices: [kevinDoePhone],
//     friends: [johnDoe, janeDoe],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/kevinDoe.jpg',
//     },
// };

// const tiffDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Tiff phone',
//     },
//     companionDevices: [],
// };

// const tiffDoe: OSKTUser = {
//     id: 'tiff-doe',
//     auth: {
//         // uid: "coockie-doe",
//         email: 'tiff.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Tiff',
//             lastName: 'DOE',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(2013, 1, 27),
//             streetAddress: building1StreetAddress,
//         },
//     },
//     devices: [tiffDoePhone],
//     friends: [johnDoe, janeDoe, kevinDoe],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/tiffDoe.jpg',
//     },
// };

// const coockieDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Coockie phone',
//     },
//     companionDevices: [],
// };

// const coockieDoe: OSKTUser = {
//     id: 'coockie-doe',
//     auth: {
//         // uid: "coockie-doe",
//         email: 'coockie.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Coockie',
//             lastName: 'DOE',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1943, 1, 27),
//             streetAddress: building3StreetAddress,
//         },
//     },
//     devices: [coockieDoePhone],
//     friends: [johnDoe, janeDoe, kevinDoe, tiffDoe],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/coockieDoe.jpg',
//     },
// };

// const stanDoePhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Stan phone',
//     },
//     companionDevices: [],
// };

// const stanDoe: OSKTUser = {
//     id: 'stan-doe',
//     auth: {
//         // uid: "coockie-doe",
//         email: 'stan.doe@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Stan',
//             lastName: 'DOE',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1973, 1, 27),
//             streetAddress: building3StreetAddress,
//         },
//     },
//     devices: [stanDoePhone],
//     friends: [johnDoe, janeDoe, kevinDoe, tiffDoe, coockieDoe],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/stanDoe.jpg',
//     },
// };

// const billSmithPhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Bill phone',
//     },
//     companionDevices: [],
// };

// const billSmith: OSKTUser = {
//     id: 'bill-smith',
//     auth: {
//         // uid: "bill-smith",
//         email: 'bill.smith@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Bill',
//             lastName: 'SMITH',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: smithStreetAddress,
//         },
//     },
//     devices: [billSmithPhone],
//     friends: [],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/billSmith.jpg',
//     },
// };

// const bradSmithPhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Brad phone',
//     },
//     companionDevices: [],
// };

// const bradSmith: OSKTUser = {
//     id: 'brad-smith',
//     auth: {
//         // uid: "brad-smith",
//         email: 'brad.smith@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Bill',
//             lastName: 'SMITH',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: smithStreetAddress,
//         },
//     },
//     devices: [bradSmithPhone],
//     friends: [billSmith],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/bradSmith.jpg',
//     },
// };

// const bobSmithPhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Bob phone',
//     },
//     companionDevices: [],
// };

// const bobSmith: OSKTUser = {
//     id: 'bob-smith',
//     auth: {
//         // uid: "bob-smith",
//         email: 'bob.smith@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Bob',
//             lastName: 'SMITH',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: smithStreetAddress,
//         },
//     },
//     devices: [bobSmithPhone],
//     friends: [billSmith, bradSmith],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/bobSmith.jpg',
//     },
// };

// const testDeletionUser1Phone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Test deletion user 1 phone',
//     },
//     companionDevices: [],
// };

// const testDeletionUser1: OSKTUser = {
//     id: 'test-deletion-1',
//     auth: {
//         // uid: "test-deletion-1",
//         email: 'test.deletion.1@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: building2StreetAddress,
//         },
//         publicProfile: {
//             firstName: 'Test',
//             lastName: 'DELETION 1',
//         },
//     },
//     devices: [testDeletionUser1Phone],
//     friends: [],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
//     },
// };

// const testDeletionUser2Phone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Test deletion user 2 phone',
//     },
//     companionDevices: [],
// };

// const testDeletionUser2: OSKTUser = {
//     id: 'test-deletion-2',
//     auth: {
//         // uid: "test-deletion-1",
//         email: 'test.deletion.2@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: building2StreetAddress,
//         },
//         publicProfile: {
//             firstName: 'Test',
//             lastName: 'DELETION 2',
//         },
//     },
//     devices: [testDeletionUser2Phone],
//     friends: [testDeletionUser1],
//     friendRequests: [johnDoe],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
//     },
// };

// const testDeletionUser3Phone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Test deletion user 3 phone',
//     },
//     companionDevices: [],
// };

// const testDeletionUser3: OSKTUser = {
//     id: 'test-deletion-3',
//     auth: {
//         // uid: "test-deletion-1",
//         email: 'test.deletion.3@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: building2StreetAddress,
//         },
//         publicProfile: {
//             firstName: 'Test',
//             lastName: 'DELETION 3',
//         },
//     },
//     devices: [testDeletionUser3Phone],
//     friends: [testDeletionUser1, testDeletionUser2],
//     friendRequests: [],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/testDeletionUser.jpg',
//     },
// };

// const joePlumberPhone: OSKTUserDevice = {
//     id: crypto.randomUUID(),
//     data: {
//         type: 'mobile',
//         name: 'Joe The Plumber phone',
//     },
//     companionDevices: [],
// };

// const joePlumber: OSKTUser = {
//     id: 'joe-Plumber',
//     auth: {
//         email: 'joe.plumber@example.com',
//         password: 'Test+1234',
//     },
//     data: {
//         publicProfile: {
//             firstName: 'Joe',
//             lastName: 'THE PLUMBER',
//         },
//         privateProfile: {
//             dateOfBirth: new Date(1979, 8, 29),
//             streetAddress: smithStreetAddress,
//         },
//     },
//     devices: [joePlumberPhone],
//     friends: [billSmith, bradSmith, bobSmith, johnDoe],
//     friendRequests: [testDeletionUser1, testDeletionUser2, testDeletionUser3],
//     invitations: [],
//     profileImage: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/user_profile_images/joePlumber.jpg',
//     },
// };

// // const building1Device1: OSKTDevice = {
// //   id: 'OSK_central-dev-1',
// //   data: {
// //     apiServerConfig: {
// //       hostname: 'central-dev-1.local',
// //       port: 8888
// //     },
// //     makerAppName: 'central-rpi3-oskey-example',
// //     makerDeviceName: 'central-dev-1',
// //     makerDeviceUuid: 'central-dev-1',
// //     makerDeviceUuidShort: 'central-dev-1',
// //     makerName: 'OSkey.dev',
// //     mqttConfig: {
// //       provider: 'Mosquitto',
// //       hostname: 'oskey-example.local.gpf.pw',
// //       port: 1883,
// //       protocol: 'mqtt'
// //     }
// //   }
// // };

// const building1Door1AccessControlDevice1: OSKTAccessControlDevice = {
//     id: 'OSK_lock-dev-1',
//     data: {
//         // apiServerConfig: {
//         //     hostname: 'lock-dev-1.local',
//         //     port: 8888,
//         // },
//         makerAppName: 'lock-rpi4-oskey-example',
//         makerDeviceName: 'lock-dev-1',
//         makerDeviceUuid: '898def8b-9d1b-4cc1-9461-e40de2a855b3',
//         makerDeviceUuidShort: 'lock-dev-1',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: 'none',
//             iotEndpoint: 'node-iot-api',
//         },
//         // mqttConfig: {
//         //     provider: 'Mosquitto',
//         //     hostname: 'oskey-example.local.gpf.pw',
//         //     port: 1883,
//         //     protocol: 'mqtt',
//         // },
//     },
// };

// const building1Door2accessControlDevice1: OSKTAccessControlDevice = {
//     id: 'OSK_lock-dev-2',
//     data: {
//         // apiServerConfig: {
//         //     hostname: 'lock-dev-2.local',
//         //     port: 8888,
//         // },
//         makerAppName: 'lock-rpi4-oskey-example',
//         makerDeviceName: 'lock-dev-2',
//         makerDeviceUuid: '4839f40f-0ab4-4075-ba92-ef2754f7c344',
//         makerDeviceUuidShort: 'lock-dev-2',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: 'none',
//             iotEndpoint: 'node-iot-api',
//         },
//         // mqttConfig: {
//         //     provider: 'Mosquitto',
//         //     hostname: 'oskey-example.local.gpf.pw',
//         //     port: 1883,
//         //     protocol: 'mqtt',
//         // },
//     },
// };

// const building1Door1AccessControlDevice2: OSKTAccessControlDevice = {
//     id: '2e060beb-5150-4c37-5020-2020ff05112c',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: '2e060be',
//         makerDeviceUuid: '2e060beb-5150-4c37-5020-2020ff05112c',
//         makerDeviceUuidShort: '2e060be',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building1Door2AccessControlDevice2: OSKTAccessControlDevice = {
//     id: 'ec58f546-504e-5453-382e-314aff05263e',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: 'ec58f54',
//         makerDeviceUuid: 'ec58f546-504e-5453-382e-314aff05263e',
//         makerDeviceUuidShort: 'ec58f54',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building1Door1AccessControlDevice3: OSKTAccessControlDevice = {
//     id: 'ec3643a4-5055-3441-302e-3120ff02092c',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: 'ec3643a',
//         makerDeviceUuid: 'ec3643a4-5055-3441-302e-3120ff02092c',
//         makerDeviceUuidShort: 'ec3643a',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building1Door2AccessControlDevice3: OSKTAccessControlDevice = {
//     id: '429338b1-5055-3441-302e-3120ff011c14',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: '429338b',
//         makerDeviceUuid: '429338b1-5055-3441-302e-3120ff011c14',
//         makerDeviceUuidShort: '429338b',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building2Door1AccessControlDevice2: OSKTAccessControlDevice = {
//     id: 'c8b2cede-6261-44cc-9008-080c986801e5',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: 'c8b2ced',
//         makerDeviceUuid: 'c8b2cede-6261-44cc-9008-080c986801e5',
//         makerDeviceUuidShort: 'c8b2ced',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building2Door2AccessControlDevice2: OSKTAccessControlDevice = {
//     id: '2cef3729-308e-4f77-8091-f4526e678120',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: '2cef372',
//         makerDeviceUuid: '2cef3729-308e-4f77-8091-f4526e678120',
//         makerDeviceUuidShort: '2cef372',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building3Door1AccessControlDevice2: OSKTAccessControlDevice = {
//     id: '7cb7766f-7631-4859-a28f-fcd730480b37',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: '7cb7766',
//         makerDeviceUuid: '7cb7766f-7631-4859-a28f-fcd730480b37',
//         makerDeviceUuidShort: '7cb7766',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building3Door2AccessControlDevice2: OSKTAccessControlDevice = {
//     id: '577b0c29-cfdf-40a4-a914-1e1b96963a68',
//     data: {
//         makerAppName: 'arduino-secure-ble-oskey-example',
//         makerDeviceName: '577b0c2',
//         makerDeviceUuid: '577b0c29-cfdf-40a4-a914-1e1b96963a68',
//         makerDeviceUuidShort: '577b0c2',
//         makerName: 'OSkey.dev',
//         manufacturingDate: now,
//         features: {
//             secureBle: '2022-01',
//             iotEndpoint: 'node-iot-api',
//         },
//     },
// };

// const building1Door1: OSKTBuildingDoor = {
//     id: 'door-1',
//     data: {
//         name: 'Street door',
//         streetAddress: building1StreetAddress,
//     },
//     accessControlDevices: [building1Door1AccessControlDevice1, building1Door1AccessControlDevice2, building1Door1AccessControlDevice3],
// };

// const building1Door2: OSKTBuildingDoor = {
//     id: 'door-2',
//     data: {
//         name: 'Intermediate door',
//         streetAddress: building1StreetAddress,
//     },
//     accessControlDevices: [building1Door2accessControlDevice1, building1Door2AccessControlDevice2, building1Door2AccessControlDevice3],
// };

// const building2Door1: OSKTBuildingDoor = {
//     id: 'door-1',
//     data: {
//         name: 'Street door',
//         streetAddress: building2StreetAddress,
//     },
//     accessControlDevices: [building2Door1AccessControlDevice2],
// };

// const building2Door2: OSKTBuildingDoor = {
//     id: 'door-2',
//     data: {
//         name: 'Intermediate door',
//         streetAddress: building2StreetAddress,
//     },
//     accessControlDevices: [building2Door2AccessControlDevice2],
// };

// const building3Door1: OSKTBuildingDoor = {
//     id: 'door-1',
//     data: {
//         name: 'Street door',
//         streetAddress: building2StreetAddress,
//     },
//     accessControlDevices: [building3Door1AccessControlDevice2],
// };

// const building3Door2: OSKTBuildingDoor = {
//     id: 'door-2',
//     data: {
//         name: 'Intermediate door',
//         streetAddress: building2StreetAddress,
//     },
//     accessControlDevices: [building3Door2AccessControlDevice2],
// };

// // const building1Door3: OSKTBuildingDoor = {
// //   id: 'door-3',
// //   data: {
// //     name: 'Garage (inside)',
// //     streetAddress: building1StreetAddress
// //   },
// //   accessControlDevices: [building1door3accessControlDevice1]
// // };

// // const building1Door4: OSKTBuildingDoor = {
// //   id: 'door-4',
// //   data: {
// //     name: 'Laundy',
// //     streetAddress: building1StreetAddress
// //   },
// //   accessControlDevices: [building1door4accessControlDevice1]
// // };

// const building1Unit1A: OSKTBuildingUnit = {
//     id: 'unit-1-a',
//     data: {
//         name: 'The Doe',
//         floor: '1',
//         unitNumber: 'A',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [johnDoe, janeDoe],
//     users: [kevinDoe, tiffDoe],
//     guests: [
//         /* coockieDoe */
//     ],
// };

// const building1Unit1B: OSKTBuildingUnit = {
//     id: 'unit-1-b',
//     data: {
//         name: 'No tenant',
//         floor: '1',
//         unitNumber: 'B',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit1C: OSKTBuildingUnit = {
//     id: 'unit-1-c',
//     data: {
//         name: 'No tenant',
//         floor: '1',
//         unitNumber: 'C',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit2A: OSKTBuildingUnit = {
//     id: 'unit-2-a',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'A',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit2B: OSKTBuildingUnit = {
//     id: 'unit-2-b',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'B',
//     },
//     doors: [building1Door1, building1Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit2C: OSKTBuildingUnit = {
//     id: 'unit-2-c',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'C',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit3A: OSKTBuildingUnit = {
//     id: 'unit-3-a',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'A',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit3B: OSKTBuildingUnit = {
//     id: 'unit-3-b',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'B',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1Unit3C: OSKTBuildingUnit = {
//     id: 'unit-3-c',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'C',
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit1A: OSKTBuildingUnit = {
//     id: 'unit-1-a',
//     data: {
//         name: 'The Deletion',
//         floor: '1',
//         unitNumber: 'A',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [testDeletionUser2],
//     users: [testDeletionUser3],
//     guests: [
//         /* coockieDoe */
//     ],
// };

// const building2Unit1B: OSKTBuildingUnit = {
//     id: 'unit-1-b',
//     data: {
//         name: 'The Doe',
//         floor: '1',
//         unitNumber: 'B',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [johnDoe, janeDoe],
//     users: [],
//     guests: [],
// };

// const building2Unit1C: OSKTBuildingUnit = {
//     id: 'unit-1-c',
//     data: {
//         name: 'No tenant',
//         floor: '1',
//         unitNumber: 'C',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit2A: OSKTBuildingUnit = {
//     id: 'unit-2-a',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'A',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit2B: OSKTBuildingUnit = {
//     id: 'unit-2-b',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'B',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit2C: OSKTBuildingUnit = {
//     id: 'unit-2-c',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'C',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit3A: OSKTBuildingUnit = {
//     id: 'unit-3-a',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'A',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit3B: OSKTBuildingUnit = {
//     id: 'unit-3-b',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'B',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building2Unit3C: OSKTBuildingUnit = {
//     id: 'unit-3-c',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'C',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit1A: OSKTBuildingUnit = {
//     id: 'unit-1-a',
//     data: {
//         name: 'The Old Doe',
//         floor: '1',
//         unitNumber: 'A',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [coockieDoe, stanDoe],
//     users: [],
//     guests: [],
// };

// const building3Unit1B: OSKTBuildingUnit = {
//     id: 'unit-1-b',
//     data: {
//         name: 'No tenant',
//         floor: '1',
//         unitNumber: 'B',
//     },
//     doors: [building2Door1, building2Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit1C: OSKTBuildingUnit = {
//     id: 'unit-1-c',
//     data: {
//         name: 'No tenant',
//         floor: '1',
//         unitNumber: 'C',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit2A: OSKTBuildingUnit = {
//     id: 'unit-2-a',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'A',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit2B: OSKTBuildingUnit = {
//     id: 'unit-2-b',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'B',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit2C: OSKTBuildingUnit = {
//     id: 'unit-2-c',
//     data: {
//         name: 'No tenant',
//         floor: '2',
//         unitNumber: 'C',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit3A: OSKTBuildingUnit = {
//     id: 'unit-3-a',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'A',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit3B: OSKTBuildingUnit = {
//     id: 'unit-3-b',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'B',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building3Unit3C: OSKTBuildingUnit = {
//     id: 'unit-3-c',
//     data: {
//         name: 'No tenant',
//         floor: '3',
//         unitNumber: 'C',
//     },
//     doors: [building3Door1, building3Door2],
//     managers: [],
//     users: [],
//     guests: [],
// };

// const building1: OSKTBuilding = {
//     id: 'building-1',
//     data: {
//         name: 'Residence La Prueba',
//         isHiddenFromPublicSearch: false,
//         streetAddress: building1StreetAddress,
//     },
//     doors: [building1Door1, building1Door2 /* , building1Door3, building1Door4 */],
//     units: [building1Unit1A, building1Unit1B, building1Unit1C, building1Unit2A, building1Unit2B, building1Unit2C, building1Unit3A, building1Unit3B, building1Unit3C],
//     managers: [billSmith],
//     users: [bradSmith],
//     guests: [
//         /* bobSmith */
//     ],
//     image: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/building_images/building.jpg',
//     },
// };

// const building2: OSKTBuilding = {
//     id: 'building-2',
//     data: {
//         name: 'Residence Les Tests',
//         isHiddenFromPublicSearch: false,
//         streetAddress: building2StreetAddress,
//     },
//     doors: [building2Door1, building2Door2 /* , building1Door3, building1Door4 */],
//     units: [building2Unit1A, building2Unit1B, building2Unit1C, building2Unit2A, building2Unit2B, building2Unit2C, building2Unit3A, building2Unit3B, building2Unit3C],
//     managers: [billSmith],
//     users: [bradSmith],
//     guests: [
//         /* bobSmith */
//     ],
//     image: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/building_images/building.jpg',
//     },
// };

// const building3: OSKTBuilding = {
//     id: 'building-3',
//     data: {
//         name: 'Residence Les essais',
//         isHiddenFromPublicSearch: false,
//         streetAddress: building2StreetAddress,
//     },
//     doors: [building3Door1, building3Door2 /* , building1Door3, building1Door4 */],
//     units: [building3Unit1A, building3Unit1B, building3Unit1C, building3Unit2A, building3Unit2B, building3Unit2C, building3Unit3A, building3Unit3B, building3Unit3C],
//     managers: [billSmith],
//     users: [bradSmith],
//     guests: [
//         /* bobSmith */
//     ],
//     image: {
//         filename: `${crypto.randomUUID()}.jpg`,
//         sourceFilename: 'assets/building_images/building.jpg',
//     },
// };

// const users = [johnDoe, janeDoe, kevinDoe, tiffDoe, coockieDoe, billSmith, bradSmith, bobSmith, stanDoe, joePlumber];
// const testDeletionUsers = [testDeletionUser1, testDeletionUser2, testDeletionUser3];

// johnDoe.invitations.push({
//     id: 'invitation-1',
//     accessId: `${building1.id}_${building1Unit1A.id}`,
//     data: {
//         buildingId: building1,
//         unitId: building1Unit1A,
//         title: 'B-day of Tiff !!!',
//         notes: 'Bring a nice gift',
//         startDate: new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDay(), 16, 0),
//         endDate: new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDay(), 18, 0),
//         accessRights: [
//             {
//                 validity: 'oneTime',
//             },
//         ],
//     },
//     doors: [building1Door1, building1Door2],
//     invitees: [stanDoe, coockieDoe],
// });

// johnDoe.invitations.push({
//     id: 'invitation-2',
//     accessId: `${building1.id}_${building1Unit1A.id}`,
//     data: {
//         buildingId: building1,
//         unitId: building1Unit1A,
//         title: 'Maintenance toilet plumbing',
//         notes: 'Joe, please come urgently, our toilets are a mess !!! Thanks Joe (the other one)',
//         startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 8, 0),
//         endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 18, 0),
//         accessRights: [
//             {
//                 validity: 'oneTime',
//             },
//         ],
//     },
//     doors: [building1Door1, building1Door2],
//     invitees: [joePlumber],
// });

// johnDoe.invitations.push({
//     id: 'invitation-3',
//     accessId: `${building1.id}_${building1Unit1A.id}`,
//     data: {
//         buildingId: building1,
//         unitId: building1Unit1A,
//         title: 'Diner',
//         notes: 'Bring wine !!!',
//         startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 20, 0),
//         endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 23, 0),
//         accessRights: [
//             {
//                 validity: 'oneTime',
//             },
//         ],
//     },
//     doors: [building1Door1, building1Door2],
//     invitees: [stanDoe],
// });

// billSmith.invitations.push({
//     id: 'invitation-1',
//     accessId: `${building1.id}`,
//     data: {
//         buildingId: building1,
//         title: 'Maintenance plumbing',
//         notes: 'Joe, please come urgently, everything is a mess !!! Thanks, Bill.',
//         startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 8, 0),
//         endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 18, 0),
//         accessRights: [
//             {
//                 validity: 'oneTime',
//             },
//         ],
//     },
//     doors: [building1Door1, building1Door2],
//     invitees: [joePlumber],
// });

// stanDoe.invitations.push({
//     id: 'invitation-1',
//     accessId: `${building3.id}_${building3Unit1A.id}`,
//     data: {
//         buildingId: building3,
//         unitId: building3Unit1A,
//         title: 'Familly diner',
//         notes: 'Joe, please come urgently, everything is a mess !!! Thanks, Bill.',
//         startDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 19, 0),
//         endDate: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDay(), 23, 0),
//         accessRights: [
//             {
//                 validity: 'oneTime',
//             },
//         ],
//     },
//     doors: [building3Door1, building3Door2],
//     invitees: [johnDoe, janeDoe, kevinDoe, tiffDoe],
// });

// const buildings: OSKTBuilding[] = [building1, building2, building3];
// const accessControlDevices: OSKTAccessControlDevice[] = [
//     building1Door1AccessControlDevice1,
//     building1Door1AccessControlDevice2,
//     building1Door1AccessControlDevice3,
//     building1Door2accessControlDevice1,
//     building1Door2AccessControlDevice2,
//     building1Door2AccessControlDevice3,
//     building2Door1AccessControlDevice2,
//     building2Door2AccessControlDevice2,
//     building3Door1AccessControlDevice2,
//     building3Door2AccessControlDevice2,
// ];

// export const data = {
//     dadUser: johnDoe,
//     momUser: janeDoe,
//     kidUser1: kevinDoe,
//     kidUser2: tiffDoe,
//     proUser1: billSmith,
//     proUser2: bradSmith,
//     testDeletionUser1: testDeletionUser1,
//     testDeletionUser2: testDeletionUser2,
//     testDeletionUser3: testDeletionUser3,
//     users: users,
//     testDeletionUsers: testDeletionUsers,
//     buildings: buildings,
//     accessControlDevices: accessControlDevices,
// };
