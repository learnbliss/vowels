import {lazy, Suspense} from "react";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {PATH_VOWELS_MATCH_FIRST_LETTER, ROUTE_VOWELS} from "constants/route_constants";
import Loader from "components/Loader";

const App = lazy(() => import('modules/App'));
const PrimaryMenu = lazy(() => import('modules/PrimaryMenu'));
const MatchFirstLetter = lazy(() => import('modules/MatchFirstLetter'));

const ContainerRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader page/>}>
                <Routes>
                    <Route element={<App children={<Outlet/>}/>}>
                        <Route path={ROUTE_VOWELS} element={<PrimaryMenu/>}/>
                        <Route path={PATH_VOWELS_MATCH_FIRST_LETTER} element={<MatchFirstLetter/>}/>
                    </Route>
                    <Route path={'*'}>
                        <Route index element={<Navigate to={ROUTE_VOWELS} replace/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default ContainerRouter;
