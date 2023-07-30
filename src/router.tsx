import {lazy, Suspense} from "react";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {ROUTE_MATCH_FIRST_LETTER} from "constants/route_constants";

const App = lazy(() => import('modules/App'));
const PrimaryMenu = lazy(() => import('modules/PrimaryMenu'));
const MatchFirstLetter = lazy(() => import('modules/MatchFirstLetter'));

const ContainerRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<App children={<Outlet/>}/>}>
                        <Route path={'/vowels'} element={<PrimaryMenu/>}/>
                        <Route path={ROUTE_MATCH_FIRST_LETTER} element={<MatchFirstLetter/>}/>
                    </Route>
                    <Route path={'*'}>
                        <Route index element={<Navigate to={'/vowels'} replace/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default ContainerRouter;
