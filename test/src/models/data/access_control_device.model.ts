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

export type OSKTAccessControlDevice = {
    id: string;
    data: {
        // apiServerConfig?: {
        //     hostname: string;
        //     port: number;
        // };
        makerAppName: string;
        makerDeviceName: string;
        makerDeviceUuid: string;
        makerDeviceUuidShort: string;
        makerName: string;
        // mqttConfig?: {
        //     provider: 'Mosquitto';
        //     hostname: string;
        //     port: number;
        //     protocol: string;
        // };
        manufacturingDate: Date;
        features: {
            secureBle: '2022-01' | 'none';
            iotEndpoint: 'node-iot-api' | 'none';
        };
    };
    keys?: {
        privateKey256: string;
    };
};
