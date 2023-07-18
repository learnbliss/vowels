import {imageGeneratorApi} from "core/api/imageGenerator";
import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import matchFirstLetterReducer from 'core/matchFirstLetter/matchFirstLetterSlice'

const combinedReducer = combineReducers({
    [imageGeneratorApi.reducerPath]: imageGeneratorApi.reducer,
    matchFirstLetter: matchFirstLetterReducer,
})

export const rootReducers = (
    state: ReturnType<typeof combinedReducer> | undefined,
    action: AnyAction,
) => {
    if (action.type === 'RESET_STORE') {
        state = undefined;
    }
    return combinedReducer(state, action);
};
