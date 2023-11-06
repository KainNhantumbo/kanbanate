import { createSlice } from '@reduxjs/toolkit';
import type { Modal } from '@/types/index';

const initialState: Modal = { title: '', status: false, message: '' };

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {}
});

export default toastSlice.reducer;
