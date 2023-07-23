import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type matchFirstLetterState = {
    targetWord: string;
    rightAnswerLetter: string;
}

const initialState: matchFirstLetterState = {
    targetWord: '',
    rightAnswerLetter: '',
}

export const matchFirstLetterSlice = createSlice({
    name: 'matchFirstLetter',
    initialState,
    reducers: {
        setTargetWord: (state, action: PayloadAction<string>) => {
            state.targetWord = action.payload
        },
        setRightAnswerLetter: (state, action: PayloadAction<string>) => {
            state.rightAnswerLetter = action.payload;
        }
    }
})

export const {setTargetWord, setRightAnswerLetter} = matchFirstLetterSlice.actions

export default matchFirstLetterSlice.reducer
