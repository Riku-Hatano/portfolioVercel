import { BrowserRouter, Routes, Route } from "react-router-dom";
import JaHome from "./JaHome";
import JaAbout from "./JaAbout";
import JaContact from "./JaContact";
import JaWorks from "./JaWorks";
import JaLayout from "./jaComponents/JaLayout";

const JaMain = () => {
    return (
            <Routes>
                <Route path="/" element={<JaLayout child={<JaHome />} />} />
                <Route path="/about" element={<JaLayout child={<JaAbout />} />} />
                <Route path="/contact" element={<JaLayout child={<JaContact />} />} />
                <Route path="/works" element={<JaLayout child={<JaWorks />} />} />
            </Routes>
    )
}

export default JaMain;