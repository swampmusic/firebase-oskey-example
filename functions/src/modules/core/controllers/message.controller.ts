import { PubSub } from '@google-cloud/pubsub';
import { OSKMessageProtocol } from '../protocols/message.protocol';

export class OSKMessageController<OSKMessage = OSKMessageProtocol> {
    protected async _publish(topic: string, orderingKey: string, body: OSKMessage) {
        const pubSub = new PubSub();
        await pubSub.topic(topic).publishMessage({ json: body, orderingKey });
    }
}
