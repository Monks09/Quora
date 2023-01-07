import { Route, Routes } from "react-router-dom";
import Answer from "./Answer/Answer";
import Home from "./Home/Home";
import Following from "./Following/Following";
import PageNotFound from "./PageNotFound";
import SingleQuestion from "./SingleQuestion/SingleQuestion";

export default function AllRoutes() {
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/following" element={<Following />}/>
        <Route path="/answer" element={<Answer />}/>
        <Route path="/answer/:id" element={<SingleQuestion />}/>
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
}