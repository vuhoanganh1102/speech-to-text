import { createSlice } from '@reduxjs/toolkit'

const speechSlice = createSlice({
  name: 'speech',
  initialState: {
    transcript: '',
    isListening: false,
    isSpeaking: false,
    selectedVoice: null,
    rate: 1,
    pitch: 1,
    language: 'vi-VN',
  },
  reducers: {
    setTranscript: (state, action) => {
      state.transcript = action.payload
    },
    appendTranscript: (state, action) => {
      state.transcript += action.payload
    },
    clearTranscript: (state) => {
      state.transcript = ''
    },
    setIsListening: (state, action) => {
      state.isListening = action.payload
    },
    setIsSpeaking: (state, action) => {
      state.isSpeaking = action.payload
    },
    setSelectedVoice: (state, action) => {
      state.selectedVoice = action.payload
    },
    setRate: (state, action) => {
      state.rate = action.payload
    },
    setPitch: (state, action) => {
      state.pitch = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const {
  setTranscript,
  appendTranscript,
  clearTranscript,
  setIsListening,
  setIsSpeaking,
  setSelectedVoice,
  setRate,
  setPitch,
  setLanguage,
} = speechSlice.actions

export default speechSlice.reducer
