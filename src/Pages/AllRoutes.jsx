import { Route, Routes } from "react-router-dom";
import Answer from "./Answer/Answer";
import Home from "./Home/Home";
import Following from "./Following/Following";
import PageNotFound from "./PageNotFound";

export default function AllRoutes() {
    return <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/following" element={<Following />}/>
        <Route path="/answer" element={<Answer />}/>
        <Route path="*" element={<PageNotFound />}/>

    </Routes>
}