import { createRoot } from "react-dom/client";
import TailwindCSS from "./SPLCalculator";
import "./tailwind.css";
import KalkulatorOBE from "./SPLCalculator";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <KalkulatorOBE />
        </div>
    )