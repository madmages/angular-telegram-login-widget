export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string
  photo_url?: string
  auth_date: number;
  hash: string;
}

export type BUTTON_STYLE = 'medium' | 'large' | 'small';

export interface WidgetConfiguration {
  buttonStyle?: BUTTON_STYLE;
  showUserPhoto?: boolean;
  cornerRadius?: number;
  accessToWriteMessages?: boolean
}

