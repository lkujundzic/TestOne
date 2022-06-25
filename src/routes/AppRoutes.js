import { Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<ListPage />} />
                <Route path="list" element={<ListPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
