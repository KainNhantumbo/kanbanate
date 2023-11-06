import { createSlice } from '@reduxjs/toolkit';
import type { Modal } from '@/types';

const initialState: Modal = { title: '', status: false, message: '' };

const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {}
});

export default promptSlice.reducer;
