import {imageGeneratorApi} from "core/api/imageGenerator";
import {AnyAction, combineReducers} from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
    [imageGeneratorApi.reducerPath]: imageGeneratorApi.reducer,
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
