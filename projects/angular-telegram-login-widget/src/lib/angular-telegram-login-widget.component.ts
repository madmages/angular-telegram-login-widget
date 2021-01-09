import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  Output,
  ViewChild
} from '@angular/core';
import {User, WidgetConfiguration} from './Types';
import {DOCUMENT} from '@angular/common';

const randomSeed = parseInt(`${Math.random() * 1e7}`);

@Component({
  selector: 'angular-telegram-login-widget',
  template: `<div #scriptContainer></div>`
})
export class AngularTelegramLoginWidgetComponent implements AfterViewInit {

  @ViewChild('scriptContainer', {static: true}) scriptContainer: ElementRef;

  @Output() login: EventEmitter<User> = new EventEmitter<User>();
  @Output() load: EventEmitter<void> = new EventEmitter<void>();
  @Output() loadError: EventEmitter<void> = new EventEmitter<void>();

  @Input() botName: string;
  @Input() config?: WidgetConfiguration = {};

  private readonly window: Window;
  private readonly document: Document;

  private defaultConfigs = {
    src: 'https://telegram.org/js/telegram-widget.js?14',
    'data-onauth': `onTelegramLogin${randomSeed}(user)`,
    'onerror': `onTelegramWidgetLoadFail${randomSeed}()`,
    'onload': `onTelegramWidgetLoad${randomSeed}()`
  };

  constructor(private ngZone: NgZone, @Inject(DOCUMENT) document: any) {
    this.window = window;
    this.document = document as Document
  }

  ngAfterViewInit() {
    const scriptAttrs = this.compileConfigs();
    const script = this.document.createElement('script');

    for (let key in scriptAttrs) {
      if (scriptAttrs.hasOwnProperty(key)) {
        script.setAttribute(key, scriptAttrs[key]);
      }
    }

    this.window['onTelegramLogin' + randomSeed] = data => this.ngZone.run(() => this.login.emit(data));
    this.window['onTelegramWidgetLoad' + randomSeed] = () => this.ngZone.run(() => this.load.emit());
    this.window['onTelegramWidgetLoadFail' + randomSeed] = () => this.ngZone.run(() => this.loadError.emit());

    this.scriptContainer.nativeElement.innerHTML = '';
    this.scriptContainer.nativeElement.appendChild(script);
  }

  private compileConfigs(): object {
    const configs = this.defaultConfigs ?? {};

    if (!this.botName) {
      throw new Error('Telegram widget: bot name not present!');
    }

    configs['data-telegram-login'] = this.botName

    if (this.config?.accessToWriteMessages) {
      configs['data-request-access'] = 'write';
    }

    if (this.config?.cornerRadius) {
      configs['data-radius'] = `${this.config.cornerRadius}`;
    }

    if (this.config?.showUserPhoto === false) {
      configs['data-userpic'] = 'false';
    }

    if (this.config?.buttonStyle) {
      configs['data-size'] = this.config.buttonStyle;
    } else {
      configs['data-size'] = 'large';
    }

    return configs;
  }
}
