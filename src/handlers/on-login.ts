import {
  Contact,
  log,
  VERSION as WECHATY_VERSION,
  Wechaty,
}                               from 'wechaty'

import {
  VERSION as BOT_VERSION,
}                               from '../config'

async function onLogin (
  this : Wechaty,
  user : Contact,
): Promise<void> {
  const msg = `${user.name()} Wechaty(v${WECHATY_VERSION}) TeamCode Bot(v${BOT_VERSION}) Getting Started logined`
  log.info('startBot', 'onLogin(%s) %s', user, msg)
  await user.say(msg)
}

export default onLogin
