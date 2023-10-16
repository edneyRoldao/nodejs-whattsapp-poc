import { create, Whatsapp, Message, SocketState } from 'venom-bot'

export default class MessageDispatcher {

    private client: Whatsapp

    constructor() {
        this.init()
    }


    async sendMessage(to: string, message: string) {
        // number format: 55977778888@c.us
        this.client.sendText(to, message)
    }


    private init(): void {

        create({ session: 'test-send-whats-bis'}).then((client) => {

            this.client = client

            // test
            this.sendMessage("5511981371315@c.us", "enviando mensagem teste whattsapp brazil-invest-spotlight")

        }).catch((err) => console.log(err.message))

    }

}