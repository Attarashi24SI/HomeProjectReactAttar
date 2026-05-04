export default function Loading() {
    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #f0fdfb 0%, #e6f7f5 50%, #f0fdfb 100%)" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes bubbleFloat {
          0%   { transform: translateY(110vh) scale(0.8); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.3; }
          100% { transform: translateY(-10vh) scale(1.1); opacity: 0; }
        }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%     { transform: scale(1.08); opacity: 0.8; }
        }
        @keyframes dotBounce {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-7px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeIn {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ripple {
          0%   { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes softFloat {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-10px); }
        }

        .brand-in { animation: fadeIn 0.9s cubic-bezier(.22,1,.36,1) 0.2s both; }
        .icon-in   { animation: fadeIn 0.9s cubic-bezier(.22,1,.36,1) 0.4s both; }
        .dots-in   { animation: fadeIn 0.9s cubic-bezier(.22,1,.36,1) 0.6s both; }
        .bar-in    { animation: fadeIn 0.9s cubic-bezier(.22,1,.36,1) 0.8s both; }
        .float-anim { animation: softFloat 3.5s ease-in-out infinite; }
      `}</style>

            {/* ── Floating bubbles ── */}
            {[
                { left: "8%",  size: 22, dur: 9, delay: 0 },
                { left: "22%", size: 14, dur: 12, delay: 2 },
                { left: "45%", size: 18, dur: 10, delay: 1 },
                { left: "65%", size: 12, dur: 11, delay: 3 },
                { left: "82%", size: 20, dur: 8, delay: 0.5 },
                { left: "35%", size: 10, dur: 13, delay: 4 },
                { left: "58%", size: 16, dur: 9.5, delay: 1.5 },
            ].map((b, i) => (
                <div key={i}
                    className="absolute rounded-full pointer-events-none bottom-0"
                    style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        background: i % 2 === 0
                            ? "rgba(0,150,136,0.15)"
                            : "rgba(0,121,107,0.1)",
                        border: "1px solid rgba(0,150,136,0.2)",
                        animation: `bubbleFloat ${b.dur}s ease-in ${b.delay}s infinite`,
                        opacity: 0,
                    }}
                />
            ))}

            {/* ── Ambient blobs ── */}
            <div className="absolute w-96 h-96 rounded-full opacity-20 -top-20 -left-24"
                style={{ background: "radial-gradient(circle, #4db6ac, transparent 70%)" }} />
            <div className="absolute w-72 h-72 rounded-full opacity-15 -bottom-16 -right-16"
                style={{ background: "radial-gradient(circle, #00796b, transparent 70%)" }} />
            <div className="absolute w-48 h-48 rounded-full opacity-10 top-1/3 right-0"
                style={{ background: "radial-gradient(circle, #80cbc4, transparent 70%)" }} />

            {/* ── Dot grid texture ── */}
            <div className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `radial-gradient(circle, #00695c 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                }} />

            {/* ── Main content ── */}
            <div className="float-anim flex flex-col items-center gap-7 z-10">

                {/* ── Brand ── */}
                <div className="brand-in flex flex-col items-center gap-1.5">
                    <div className="flex items-baseline gap-0.5">
                        <span style={{
                            fontFamily: "'DM Serif Display', Georgia, serif",
                            fontSize: "2.75rem",
                            color: "#004d40",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                        }}>
                            Bright
                        </span>
                        <span style={{
                            fontFamily: "'DM Serif Display', Georgia, serif",
                            fontSize: "2.75rem",
                            color: "#00897b",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                        }}>
                            Wash
                        </span>
                    </div>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.65rem",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "#80cbc4",
                    }}>
                        Laundry Management
                    </p>
                    <div className="w-24 h-px mt-1"
                        style={{ background: "linear-gradient(90deg, transparent, #80cbc4, transparent)" }} />
                </div>

                {/* ── Spinner ── */}
                <div className="icon-in relative flex items-center justify-center" style={{ width: 110, height: 110 }}>

                    {/* Ripple rings */}
                    {[0, 0.6, 1.2].map((d, i) => (
                        <div key={i} className="absolute inset-0 rounded-full"
                            style={{
                                border: "1.5px solid rgba(0,150,136,0.35)",
                                animation: `ripple 2.4s ease-out ${d}s infinite`,
                            }} />
                    ))}

                    {/* Outer ring */}
                    <div style={{
                        position: "absolute",
                        width: 90, height: 90,
                        borderRadius: "50%",
                        border: "3px solid rgba(0,150,136,0.12)",
                        borderTop: "3px solid #009688",
                        animation: "spin 1.4s linear infinite",
                    }} />

                    {/* Inner ring */}
                    <div style={{
                        position: "absolute",
                        width: 66, height: 66,
                        borderRadius: "50%",
                        border: "2px solid rgba(0,121,107,0.1)",
                        borderBottom: "2px solid #00796b",
                        animation: "spinReverse 1s linear infinite",
                    }} />

                    {/* Center icon — washing machine drum */}
                    <div className="relative z-10 flex items-center justify-center"
                        style={{
                            width: 46, height: 46,
                            borderRadius: "50%",
                            background: "linear-gradient(145deg, #ffffff, #e0f2f1)",
                            boxShadow: "0 4px 20px rgba(0,150,136,0.15), inset 0 2px 6px rgba(255,255,255,0.9)",
                        }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                            style={{ animation: "pulse 2s ease-in-out infinite" }}>
                            <rect x="2" y="3" width="20" height="18" rx="3" stroke="#009688" strokeWidth="1.5" />
                            <circle cx="12" cy="13" r="4.5" stroke="#00796b" strokeWidth="1.5" />
                            <circle cx="12" cy="13" r="2" fill="#e0f2f1" stroke="#4db6ac" strokeWidth="1" />
                            <line x1="5" y1="6" x2="7" y2="6" stroke="#80cbc4" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="10" cy="6" r="0.8" fill="#4db6ac" />
                        </svg>
                    </div>
                </div>

                {/* ── Status text ── */}
                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.7rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#80cbc4",
                }}>
                    Memuat Halaman Login 
                </p>

                {/* ── Dots ── */}
                <div className="dots-in flex gap-2 items-center">
                    {["#b2dfdb", "#26a69a", "#004d40"].map((c, i) => (
                        <div key={i} style={{
                            width: 9, height: 9,
                            borderRadius: "50%",
                            background: c,
                            animation: `dotBounce 1.1s ease-in-out ${i * 0.18}s infinite`,
                        }} />
                    ))}
                </div>

                {/* ── Shimmer bar ── */}
                <div className="bar-in rounded-full overflow-hidden"
                    style={{ width: 140, height: 3, background: "rgba(0,150,136,0.12)" }}>
                    <div style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 9999,
                        background: "linear-gradient(90deg, #e0f2f1 0%, #009688 40%, #4db6ac 60%, #e0f2f1 100%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 2s linear infinite",
                    }} />
                </div>
            </div>

            {/* ── Footer ── */}
            <p className="absolute bottom-7 text-center"
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.65rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#b2dfdb",
                }}>
                Pixel Mags · Laundry System
            </p>
        </div>
    );
}