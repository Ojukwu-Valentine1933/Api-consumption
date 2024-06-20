import { Navigate, Route, Routes } from "react-router-dom";
import AllTodoPage from "../pages/AllTodoPage";
import SingleTodoPage from "../pages/SingleTodoPage";


const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/todos" replace={true} />} exact  />
        <Route path="/todos" element={<AllTodoPage />} />
        <Route path="/todos/:id" element={<SingleTodoPage />} />
        </Routes>
    );
}

export default AppRoute;