export type TAuthState = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone_number: string;
  password: string;
  role: string;
};

export type TLoginState = {
  email: string;
  password: string;
};

export type TuserData = {
  date_joined: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: null | string;
  middle_name: string;
  phone_number: string;
  role: string;
  user_permissions: [];
  username: null | string;
};
