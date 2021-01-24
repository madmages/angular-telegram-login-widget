/** Logged in user data */
export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string
  photo_url?: string
  auth_date: number;
  hash: string;
}

export type LOGIN_BUTTON_SIZE = 'medium' | 'large' | 'small';

/** Configuration for a login button */
export interface WidgetConfiguration {
  // Login button size. Default: large
  buttonStyle?: LOGIN_BUTTON_SIZE;
  // Show user photo near the button. Default: true
  showUserPhoto?: boolean;
  // Radius of buttons corners(0-20). Default: 20
  cornerRadius?: number;
  // Request for write access. Default: false
  accessToWriteMessages?: boolean
}
