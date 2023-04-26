"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSKMessageController = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
class OSKMessageController {
    async _publish(topic, orderingKey, body) {
        const pubSub = new pubsub_1.PubSub();
        await pubSub.topic(topic).publishMessage({ json: body, orderingKey });
    }
}
exports.OSKMessageController = OSKMessageController;
//# sourceMappingURL=message.controller.js.map