import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type matchFirstLetterState = {
    letter: string
}

const initialState: matchFirstLetterState = {
    letter: '',
}

export const matchFirstLetterSlice = createSlice({
    name: 'matchFirstLetter',
    initialState,
    reducers: {
        setLetter: (state, action: PayloadAction<string>) => {
            state.letter = action.payload
        }
    }
})

export const {setLetter} = matchFirstLetterSlice.actions

export default matchFirstLetterSlice.reducer
