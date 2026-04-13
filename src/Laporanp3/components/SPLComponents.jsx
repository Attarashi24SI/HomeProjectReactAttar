export function ThemeDropdown({ theme, setTheme }) {
    return (
        <div>
            <label className="block text-sm mb-1">Tema</label>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full border p-2 rounded"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}

export function MethodDropdown({ method, setMethod }) {
    return (
        <div>
            <label className="block text-sm mb-1">Metode</label>
            <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full border p-2 rounded"
            >
                <option value="OBE">OBE</option>
                <option value="INVERS">Invers Matriks</option>
            </select>
        </div>
    );
}

export function MatrixInput({ matrix, onChange }) {
    return (
        <div className="space-y-2">
            {matrix.map((row, i) => (
                <div key={i} className="flex gap-2 justify-center">
                    {row.map((val, j) => (
                        <input
                            key={j}
                            value={val}
                            onChange={(e) => onChange(i, j, e.target.value)}
                            className="w-16 h-12 text-center border rounded"
                            placeholder={`a${i + 1}${j + 1}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export function Result({ result, method }) {
    if (!result) return null;

    if (result.error) {
        return (
            <div className="mt-4">
                <p className="text-red-500">{result.error}</p>
            </div>
        );
    }

    return (
        <div className="mt-4">
            <h4 className="font-semibold">Hasil ({method})</h4>
            <p>x = {result.x}</p>
            <p>y = {result.y}</p>

            {method === "INVERS" && result.inverse && (
                <div className="mt-2">
                    <p>Matriks Invers:</p>
                    {result.inverse.map((row, i) => (
                        <div key={i} className="flex gap-2">
                            {row.map((v, j) => (
                                <span key={j}>{v.toFixed(2)}</span>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}