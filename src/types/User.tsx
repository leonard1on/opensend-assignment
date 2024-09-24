export interface User {
  date_joined: string;
  email: string;
  first_name: string;
  id: number;
  last_active: string;
  last_name: string;
  otp: string | null;
  password_last_changed: string;
  phone_number: string | null;
  status: string;
  terms_accepted: boolean;
  url: string | null;
  user_group: string;
}
