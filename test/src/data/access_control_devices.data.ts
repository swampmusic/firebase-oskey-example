//
// firebase-oskey-example
// Copyright (c) 2021-2023, OSkey SAS. MIT License.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import { OSKTAccessControlDevice } from '@oskey-test/models';

const now = new Date();

// export const building1Device1: OSKTDevice = {
//   id: 'OSK_central-dev-1',
//   data: {
//     apiServerConfig: {
//       hostname: 'central-dev-1.local',
//       port: 8888
//     },
//     makerAppName: 'central-rpi3-oskey-example',
//     makerDeviceName: 'central-dev-1',
//     makerDeviceUuid: 'central-dev-1',
//     makerDeviceUuidShort: 'central-dev-1',
//     makerName: 'OSkey.dev',
//     mqttConfig: {
//       provider: 'Mosquitto',
//       hostname: 'oskey-example.local.gpf.pw',
//       port: 1883,
//       protocol: 'mqtt'
//     }
//   }
// };

// export const building1Door1AccessControlDevice1: OSKTAccessControlDevice = {
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

// export const building1Door2accessControlDevice1: OSKTAccessControlDevice = {
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

export const building1Door1AccessControlDevice2: OSKTAccessControlDevice = {
    id: '2e060beb-5150-4c37-5020-2020ff05112c',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: '2e060be',
        makerDeviceUuid: '2e060beb-5150-4c37-5020-2020ff05112c',
        makerDeviceUuidShort: '2e060be',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building1Door2AccessControlDevice2: OSKTAccessControlDevice = {
    id: 'ec58f546-504e-5453-382e-314aff05263e',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: 'ec58f54',
        makerDeviceUuid: 'ec58f546-504e-5453-382e-314aff05263e',
        makerDeviceUuidShort: 'ec58f54',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building1Door1AccessControlDevice3: OSKTAccessControlDevice = {
    id: 'ec3643a4-5055-3441-302e-3120ff02092c',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: 'ec3643a',
        makerDeviceUuid: 'ec3643a4-5055-3441-302e-3120ff02092c',
        makerDeviceUuidShort: 'ec3643a',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building1Door2AccessControlDevice3: OSKTAccessControlDevice = {
    id: '429338b1-5055-3441-302e-3120ff011c14',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: '429338b',
        makerDeviceUuid: '429338b1-5055-3441-302e-3120ff011c14',
        makerDeviceUuidShort: '429338b',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building2Door1AccessControlDevice2: OSKTAccessControlDevice = {
    id: 'c8b2cede-6261-44cc-9008-080c986801e5',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: 'c8b2ced',
        makerDeviceUuid: 'c8b2cede-6261-44cc-9008-080c986801e5',
        makerDeviceUuidShort: 'c8b2ced',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building2Door2AccessControlDevice2: OSKTAccessControlDevice = {
    id: '2cef3729-308e-4f77-8091-f4526e678120',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: '2cef372',
        makerDeviceUuid: '2cef3729-308e-4f77-8091-f4526e678120',
        makerDeviceUuidShort: '2cef372',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building3Door1AccessControlDevice2: OSKTAccessControlDevice = {
    id: '7cb7766f-7631-4859-a28f-fcd730480b37',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: '7cb7766',
        makerDeviceUuid: '7cb7766f-7631-4859-a28f-fcd730480b37',
        makerDeviceUuidShort: '7cb7766',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};

export const building3Door2AccessControlDevice2: OSKTAccessControlDevice = {
    id: '577b0c29-cfdf-40a4-a914-1e1b96963a68',
    data: {
        makerAppName: 'arduino-secure-ble-oskey-example',
        makerDeviceName: '577b0c2',
        makerDeviceUuid: '577b0c29-cfdf-40a4-a914-1e1b96963a68',
        makerDeviceUuidShort: '577b0c2',
        makerName: 'OSkey.dev',
        manufacturingDate: now,
        features: {
            secureBle: '2022-01',
            iotEndpoint: 'node-iot-api',
        },
    },
};
