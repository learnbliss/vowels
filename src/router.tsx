import {lazy, Suspense} from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import PrimaryMenu from "modules/PrimaryMenu";

const App = lazy(() => import('modules/App'));

const ContainerRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<App children={<Outlet/>}/>}>
                        <Route path={'/'} element={<PrimaryMenu/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default ContainerRouter;
