# TEAMCODE WECHATY GETTING STARTED

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/wechaty/wechaty)
[![Build Status](https://travis-ci.com/teamcode/teamcode-wechaty-getting-started.svg?branch=master)](https://travis-ci.com/teamcode/teamcode-wechaty-getting-started)
[![Greenkeeper badge](https://badges.greenkeeper.io/wechaty/teamcode-wechaty-getting-started.svg)](https://greenkeeper.io/)

Deploy to TeamCode for Wechaty Starter Project

[![Deploy](https://static01.teamcode.com/badge/teamcode-deploy-to-teamcode.svg)](https://teamcode.com/deploy)

The 'Deploy to TeamCode' button enables users to deploy apps to TeamCode's Tin.
> Tin is a product of TeamCode that can generate runnable applications instantly without manual environment configuration.


## FEATURES

1. Deploy to TeamCode's Tin without environment configuration and cloud deployment experience required. See `Deploy to TeamCode` Button above.
1. Restore Wechat Bot Session across Restart by enable MemoryCard with AWS S3. See `src/get-memory.ts`
1. Hot Module Reload Enabled for convenience when developing. See `src/handlers/on-*.ts`
1. Send Online/Offline Notification Message to BotSelf when the Program Start/Stop. See `src/finis.ts`
1. Simple Web Server that can be used to Scan QR Code, or any other operations integrated with Wechaty. See `src/start-web.ts`

## SEE ALSO
- [Introducing Tin](https://www.teamcode.com/docs/en-US/tin/what-is-tin)
- [Configure Tin application](https://www.teamcode.com/docs/en-US/tin/configure-tin)

## Use Cases

1. [Friday BOT](https://github.com/wechaty/friday)
1. [OSSBot](https://github.com/kaiyuanshe/OSS-bot)
1. [Mike BO](https://github.com/huan/mike-bo)
1. [QiJi BOT](https://github.com/juzibot/qijibot)
1. [Bot Ops](https://github.com/juzibot/botops)
1. [Rui Assistant BOT](https://github.com/juzibot/rui-bot)
1. [Juzi.BOT](https://github.com/juzibot/juzi-bot)

## HISTORY

### v0.0.1 (Nov 25, 2021)

Init version for deploy to TeamCode

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) \<zixia@zixia.net\>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

- Code & Docs © 2018 Huan LI \<zixia@zixia.net\>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
