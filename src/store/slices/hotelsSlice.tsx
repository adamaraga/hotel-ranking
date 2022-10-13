import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HotelInitialState, HotelType } from "../../types";

const initialState: HotelInitialState = {
  hotels: [
    {
      id: "dkhf674g367gh34hg32",
      name: "Four seasons Hotel",
      country: "Spain",
      city: "Madrid",
      chain: "Hilton",
      image:
        "https://res.cloudinary.com/dviuz7w46/image/upload/v1663155219/HOMMES%20ESTATE/WUSE_PRPTY._wmvt33.png",
      longitude: "394839",
      latitude: "3743948",
      address: "Lorem ipsum dolor .",
      ranking: 4,
    },
    {
      id: "sfnsghvd65ds7dsd",
      name: "Four seasons Hotel",
      country: "Spain",
      city: "Madrid",
      chain: "Hilton",
      image:
        "https://res.cloudinary.com/dviuz7w46/image/upload/v1663155219/HOMMES%20ESTATE/WUSE_PRPTY._wmvt33.png",
      longitude: "394839",
      latitude: "3743948",
      address: "Lorem ipsum dolor .",
      ranking: 4,
    },
    {
      id: "dmbsj567d6sdsjbd",
      name: "Four seasons Hotel",
      country: "Spain",
      city: "Madrid",
      chain: "Hilton",
      image:
        "https://res.cloudinary.com/dviuz7w46/image/upload/v1663155219/HOMMES%20ESTATE/WUSE_PRPTY._wmvt33.png",
      longitude: "394839",
      latitude: "3743948",
      address:
        "Lorem ipsum dolor ybksdfnjcvniefldjksnch sehkrcuybjhenwrhfgrbewknj.",
      ranking: 4,
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
