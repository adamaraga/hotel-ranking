//////  Hotel Types ///////////

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

//////  Chain Types ///////////

export interface ChainType {
  id: string;
  name: string;
}

export interface ChainInitialState {
  chains: ChainType[];
  editMode: { status: boolean; chainId: string };
}

export interface ChainCardType {
  chain: ChainType;
}

export interface InputErrorChainType {
  name?: string;
}

//////// Form types ////////
export interface ButtonType {
  fill?: string;
  width?: string;
  height?: string;
  small?: string;
}

export interface InputType {
  error?: boolean;
}

export interface SelectType {
  error?: boolean;
  disabled?: boolean;
}

export interface ErrorMessageType {
  show?: boolean;
  top?: string;
}

////// General types ////////
export interface Children {
  children: React.ReactNode;
}

////// Nav Types ///////////
export interface NavbarType {
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
}

export type DrawerType = Omit<NavbarType, "setOpenDrawer">;
