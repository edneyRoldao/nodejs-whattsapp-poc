import { create, CatchQR, StatusFind, CreateConfig } from 'venom-bot'

export default class MessageDispatcherV2 {

    phones: string[] = ['5511949758562@c.us', '5511981371315@c.us']

    constructor() {

        // param 1
        const session = 'brazil-invest-messaging-session'

        // param 2
        const qrCodeFn: CatchQR = (qrCode: string, asciiQR: string) => {}

        // param 3
        const statusFindFn: StatusFind = (statusGet: string, session: string) => {}

        // param 4
        const options: CreateConfig = {
            browserArgs: ['--user-agent']
        }


        create(session, qrCodeFn, statusFindFn, options).then((client) => {

            const msg = "Teste teste teste"

            // sending messages0
            // this.phones.forEach(phone => client.sendText(phone, msg))

        }).catch((err) => console.log(err.message))
        
    }


}