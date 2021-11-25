import {
  Wechaty,
  WechatyBuilder,
} from 'wechaty'

import {
  log,
} from './config'

// import {
// getMemory,
// }               from './get-memory'

let wechaty: Wechaty

export function getWechaty (name: string): Wechaty {
  log.verbose('getWechaty', 'getWechaty(%s)', name)

  if (wechaty) {
    return wechaty
  }

  // const memory = getMemory(name)

  wechaty = WechatyBuilder.build({
    name,
  })

  return wechaty
}
