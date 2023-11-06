import { createSlice } from '@reduxjs/toolkit';

type SimpleModals = { isAboutModal: boolean };

const initialState: SimpleModals = { isAboutModal: false };

const simpleModalsSlice = createSlice({
  name: 'simpleModals',
  initialState,
  reducers: {}
});

export default simpleModalsSlice.reducer;
