import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type matchFirstLetterState = {
    test: string
}

const initialState: matchFirstLetterState = {
    test: 'test',
}

export const matchFirstLetterSlice = createSlice({
    name: 'matchFirstLetter',
    initialState,
    reducers: {
        // fetchPosts: (state) => {
        //   state.isLoading = true
        // },
        // fetchPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
        //   state.isLoading = false;
        //   state.posts = [...state.posts, ...action.payload];
        //   state.error = '';
        // },
        // fetchPostsError: (state, action: PayloadAction<string>) => {
        //   state.error = action.payload
        // }
    }
})

// export const {fetchPosts} = matchFirstLetterSlice.actions

export default matchFirstLetterSlice.reducer
