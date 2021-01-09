# Angular Telegram login widget

It's wrapper over [Telegram login widget](https://core.telegram.org/widgets/login) for Angular 10+

## Install

`npm i angular-telegram-login-widget`

or by yarn

`yarn add angular-telegram-login-widget`

## Usage

1. Import module `AngularTelegramLoginWidgetModule` to your AppModule
2. Use component `angular-telegram-login-widget`

## Example

https://stackblitz.com/edit/angular-telegram-login-wiget

## Demo

https://angular-telegram-login-wiget.stackblitz.io

## Component `angular-telegram-login-widget`

### Configurations
Configurations should set as attributes.

| Name          | Required      | Type   |  Description  |
| ------------- |-------------| -----|:-----|
| botName | Yes | string | Your bot name. It's same as [Bot Username](https://core.telegram.org/widgets/login) |
| configs | No | [WidgetConfiguration](https://github.com/madmages/angular-telegram-login-widget/blob/master/projects/angular-telegram-login-widget/src/lib/Types.ts) | Other configs for button. Like size, corner radius, write access |

### Events

| Name    | Emitted value|  Description  |
| ------- | -----|:-----|
| login | [User](https://github.com/madmages/angular-telegram-login-widget/blob/master/projects/angular-telegram-login-widget/src/lib/Types.ts) | After login success, it's emit users data |
| load | void | Emit on success script load of telegram widget. |
| loadError | void | Emit on error while loading script of telegram widget. |


## License

MIT
