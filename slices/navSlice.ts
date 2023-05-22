import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    origin: string | null,
    destination: string | null,
    travelTimeInformation: string | null,
}

const initialState: CounterState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const counterSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setDestination, setOrigin, setTravelTimeInformation } = counterSlice.actions;
// Selector
export const selectOrigin = (state: { nav: CounterState }) => state.nav.origin;
export const selectDestination = (state: { nav: CounterState }) => state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: CounterState }) => state.nav.travelTimeInformation;
export default counterSlice.reducer;