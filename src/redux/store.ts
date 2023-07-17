import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import {rootReducers} from "redux/reducers";
import {apiUnionEntryPoint} from "core/api/apiUnionEntryPoint";

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiUnionEntryPoint.middleware,
        )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
