import { createRoot } from "react-dom/client";
import Tailwindcss from "./TailwindCSS";
import "./tailwind.css";
import TailwinddCSS from "./TailwindCSS";
// import UserForm from "./UserForm";
// import HitungGajiForm from "./HitungGajiForm";
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <TailwinddCSS/> */}
            {/* <UserForm/>
            <HitungGajiForm/> */}
            {/* <FrameworkList/> */}
            <FrameworkListSearchFilter/>
                
        </div>
    )