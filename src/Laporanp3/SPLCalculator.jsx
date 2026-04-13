import { useState } from "react";

import {
    ThemeDropdown,
    MethodDropdown,
    MatrixInput,
    Result
} from "./components/SPLComponents";

export default function SPLCalculator() {
    const [matrix, setMatrix] = useState([
        ["", "", ""],
        ["", "", ""]
    ]);

    const [method, setMethod] = useState("OBE");
    const [theme, setTheme] = useState("light");
    const [result, setResult] = useState(null);


    // HANDLE INPUT

    const handleChange = (row, col, value) => {
        const newMatrix = [...matrix];
        newMatrix[row][col] = value;
        setMatrix(newMatrix);
    };


    // VALIDASI

    const validate = () => {
        for (let row of matrix) {
            for (let val of row) {
                if (val === "") return "Inputan tidak boleh kosong";
                if (isNaN(val)) return "Inputan harus berupa angka";
            }
        }
        return null;
    };


    // SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setResult({ error });
            return;
        }

        const a = Number(matrix[0][0]);
        const b = Number(matrix[0][1]);
        const c = Number(matrix[0][2]);
        const d = Number(matrix[1][0]);
        const e2 = Number(matrix[1][1]);
        const f = Number(matrix[1][2]);

        if (method === "OBE") {
            setResult(solveOBE(a, b, c, d, e2, f));
        } else {
            setResult(solveInverse(a, b, c, d, e2, f));
        }
    };


    // THEME STYLE
    const bg =
        theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-black";

    const card =
        theme === "dark"
            ? "bg-gray-800"
            : "bg-white";

    return (
        <div className={`min-h-screen flex items-center justify-center ${bg}`}>
            <form
                onSubmit={handleSubmit}
                className={`${card} p-6 rounded-2xl shadow-md w-full max-w-md space-y-4`}
            >
                <h2 className="text-xl font-bold text-center">
                    SPL Calculator
                </h2>

                <ThemeDropdown theme={theme} setTheme={setTheme} />
                <MethodDropdown method={method} setMethod={setMethod} />
                <MatrixInput matrix={matrix} onChange={handleChange} />

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Hitung
                </button>

                <Result result={result} method={method} />
            </form>
        </div>
    );
}


// LOGIC


function solveOBE(a, b, c, d, e2, f) {
    const det = a * e2 - b * d;

    if (det === 0) {
        return { error: "Tidak memiliki solusi unik" };
    }

    return {
        x: (c * e2 - b * f) / det,
        y: (a * f - c * d) / det
    };
}

function solveInverse(a, b, c, d, e2, f) {
    const det = a * e2 - b * d;

    if (det === 0) {
        return { error: "Matriks tidak memiliki invers" };
    }

    const inv = [
        [e2 / det, -b / det],
        [-d / det, a / det]
    ];

    return {
        x: inv[0][0] * c + inv[0][1] * f,
        y: inv[1][0] * c + inv[1][1] * f,
        inverse: inv
    };
}