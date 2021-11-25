import {
  Wechaty,
}                   from 'wechaty'

import {
  log,
}               from './config'

export async function startBot (wechaty: Wechaty): Promise<void> {
  log.verbose('startBot', 'startBot(%s)', wechaty)

  wechaty
    .on('scan',         require('./handlers/on-scan').default)
    .on('error',        require('./handlers/on-error').default)
    .on('friendship',   require('./handlers/on-friendship').default)
    .on('logout',       require('./handlers/on-logout').default)
    .on('login',        require('./handlers/on-login').default)
    .on('message',      require('./handlers/on-message').default)
    .on('room-topic',   require('./handlers/on-room-topic').default)
    .on('room-invite',  require('./handlers/on-room-invite').default)
    .on('room-join',    require('./handlers/on-room-join').default)
    .on('room-leave',   require('./handlers/on-room-leave').default)
}
