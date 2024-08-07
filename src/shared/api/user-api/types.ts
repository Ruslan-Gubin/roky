type LoginModel = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type LocationModel = {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: { latitude: string; longitude: string };
  timezone: { offset: string; description: string };
};

export type UserModel = {
  gender: string;
  name: { title: string; first: string; last: string };
  location: LocationModel;
  email: string;
  login: LoginModel;
  dob: { date: string; age: number };
  registered: { date: string; age: number };
  phone: string;
  cell: string;
  id: { name: string; value: string };
  picture: {
    large: string;
    medium: string;
    thumbnail?: string;
  };
  nat: string;
};

type UsersListResponseInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export type UsersListResponse = {
  info: UsersListResponseInfo;
  results: UserModel[];
};