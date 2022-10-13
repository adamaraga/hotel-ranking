export interface Children {
  children: React.ReactNode;
}

export interface ButtonType {
  fill?: string;
  width?: string;
  height?: string;
  small?: string;
}

export interface InputType {
  error?: boolean;
}

export interface ErrorMessageType {
  show?: boolean;
  top?: string;
}

export interface NavbarType {
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
}

export type DrawerType = Omit<NavbarType, "setOpenDrawer">;

export interface HotelType {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  ranking: number;
  chain?: string;
  longitude?: string;
  latitude?: string;
  image?: string;
}

export interface HotelInitialState {
  hotels: HotelType[];
  editMode: { status: boolean; hotelId: string };
  filter: string[] | [];
}

export interface HotelCardType {
  hotel: HotelType;
}

export interface InputErrorHotelType {
  name?: string;
  country?: string;
  city?: string;
  address?: string;
  ranking?: number;
  chain?: string;
  longitude?: string;
  latitude?: string;
  image?: string;
}
