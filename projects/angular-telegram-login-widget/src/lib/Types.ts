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
  // Login button size
  buttonStyle?: BUTTON_STYLE;
  // Show user photo near the button
  showUserPhoto?: boolean;
  // Radius of buttons corners
  cornerRadius?: number;
  // Request for write access
  accessToWriteMessages?: boolean
}

