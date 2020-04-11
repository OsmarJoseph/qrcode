import React, { createContext, useReducer } from 'react';
import { setScannedText, setHasCameraPermission } from './Actions';
export const Context = createContext();
const initialState = {
  scannedText: false,
  hasCameraPermission: false,
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_SCANNED_TEXT':
      return { ...state, scannedText: action.value };
    case 'SET_HAS_CAMERA_PERMISSON':
      return { ...state, scannedText: action.value };
    default:
      return state;
  }
}

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    scannedText: state.scannedText,
    setScannedText: (value) => {
      setScannedText(dispatch, value);
    },
    hasCameraPermission: state.hasCameraPermission,
    setHasCameraPermission: (value) => {
      setHasCameraPermission(dispatch, value);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
