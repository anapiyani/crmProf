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

export type TServices = {
  id: number;
  created_at: string;
  description: string;
  duration: string;
  name: string;
  price: string;
  updated_at: string;
};

export type TAuthStateInit = {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  middle_name: string | null;
  role: string;
  phone_number: string | null;
};

export type TRequest = {
  id: number;
  user_info: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    role: string;
    phone_number: string;
  };
  status: string;
  created_at: string;
  updated_at: string;
  paid: boolean;
  service: number;
  user: number;
};
