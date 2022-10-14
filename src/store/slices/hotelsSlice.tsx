import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HotelInitialState, HotelType } from "../../types";

const initialState: HotelInitialState = {
  hotels: [
    {
      id: "dkhf674g367gh34hg32",
      name: "Transcorp Hilton",
      country: "Nigeria",
      city: "Abuja",
      chain: "Hilton",
      image:
        "https://res.cloudinary.com/adamworkimages/image/upload/v1665753244/hommes/hotel-exterior_me0rxj.jpg",
      latitude: "9.076479",
      longitude: "7.398574",
      address: "1 Aguiyi Ironsi St, Maitama 900001.",
      ranking: 4,
    },
    {
      id: "sfnsghvd65ds7dsd",
      name: "The Ritz-Carlton",
      country: "China",
      city: "Hong Kong",
      chain: "Taj",
      image:
        "https://res.cloudinary.com/adamworkimages/image/upload/v1665753455/hommes/taj_z2lrsj.webp",
      longitude: "114.16019554995",
      latitude: "22.30343323157",
      address: "International Commerce Centre (ICC), 1 Austin Rd W, Kowloon",
      ranking: 5,
    },
    {
      id: "dmbsj567d6sdsjbd",
      name: "Marina Bay Sands",
      country: "Singapore",
      city: "Bayfront",
      chain: "Hilton",
      image:
        "https://res.cloudinary.com/adamworkimages/image/upload/v1665753546/hommes/Marina-Bay-Sands-5.jpg_vkgv3r.webp",
      longitude: "103.858528",
      latitude: "1.282302",
      address: "10 Bayfront Ave.",
      ranking: 5,
    },
  ],
  editMode: { status: false, hotelId: "" },
  filter: [],
};

interface EditHoteltype {
  main: HotelType;
  indexNo: number | null;
}

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    deleteHotel: (state, action: PayloadAction<string>) => {
      let newHotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );
      state.hotels = newHotels;
    },
    createHotel: (state, action: PayloadAction<HotelType>) => {
      let newHotels = [action.payload, ...state.hotels];
      state.hotels = newHotels;
    },
    editHotel: (state, action: PayloadAction<EditHoteltype>) => {
      if (typeof action.payload.indexNo === "number") {
        state.hotels[action.payload.indexNo] = action.payload.main;
      }
    },
    onEditMode: (state, action: PayloadAction<string>) => {
      let newEditmode = { status: true, hotelId: action.payload };
      state.editMode = newEditmode;
    },
    offEditMode: (state) => {
      let newEditmode = { status: false, hotelId: "" };
      state.editMode = newEditmode;
    },
    filter: (state, action: PayloadAction<string[] | []>) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteHotel,
  createHotel,
  editHotel,
  offEditMode,
  onEditMode,
  filter,
} = hotelsSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default hotelsSlice.reducer;
