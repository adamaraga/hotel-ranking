import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChainInitialState, ChainType } from "../../types";

const initialState: ChainInitialState = {
  chains: [
    { id: "ejryyt3467384hje", name: "Hilton" },
    { id: "edfm567ehjs84hje", name: "Taj" },
  ],
  editMode: { status: false, chainId: "" },
};

interface EditChainType {
  main: ChainType;
  indexNo: number | null;
}

export const chainsSlice = createSlice({
  name: "chains",
  initialState: initialState,
  reducers: {
    deleteChain: (state, action: PayloadAction<string>) => {
      let newChains = state.chains.filter(
        (chain) => chain.id !== action.payload
      );
      state.chains = newChains;
    },
    createChain: (state, action: PayloadAction<ChainType>) => {
      let newChains = [action.payload, ...state.chains];
      state.chains = newChains;
    },
    editChain: (state, action: PayloadAction<EditChainType>) => {
      if (typeof action.payload.indexNo === "number") {
        state.chains[action.payload.indexNo] = action.payload.main;
      }
    },
    onEditModeChain: (state, action: PayloadAction<string>) => {
      let newEditmode = { status: true, chainId: action.payload };
      state.editMode = newEditmode;
    },
    offEditModeChain: (state) => {
      let newEditmode = { status: false, chainId: "" };
      state.editMode = newEditmode;
    },
  },
});

export const {
  deleteChain,
  createChain,
  editChain,
  offEditModeChain,
  onEditModeChain,
} = chainsSlice.actions;

export default chainsSlice.reducer;
