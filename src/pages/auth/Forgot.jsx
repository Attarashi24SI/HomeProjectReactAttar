export default function Forgot() {
    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #f0fdfb 0%, #e6f7f5 50%, #f0fdfb 100%)" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes bubbleFloat {
          0%   { transform: translateY(110vh) scale(0.8); opacity: 0; }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-10vh) scale(1.1); opacity: 0; }
        }
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes inputFocus {
          0%   { box-shadow: 0 0 0 0 rgba(0,150,136,0.3); }
          100% { box-shadow: 0 0 0 4px rgba(0,150,136,0.15); }
        }
        @keyframes iconPulse {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.08); }
        }

        .card-in  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .title-in { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.2s both; }
        .desc-in  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .form-in  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.4s both; }

        .reset-input {
          width: 100%;
          padding: 11px 16px 11px 42px;
          background: rgba(255,255,255,0.8);
          border: 1.5px solid rgba(0,150,136,0.2);
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #004d40;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(4px);
        }
        .reset-input::placeholder { color: #b2dfdb; }
        .reset-input:focus {
          border-color: #009688;
          box-shadow: 0 0 0 4px rgba(0,150,136,0.12);
        }

        .reset-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #009688, #00796b);
          color: white;
          border: none;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 16px rgba(0,150,136,0.3);
        }
        .reset-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(0,150,136,0.38);
        }
        .reset-btn:active {
          transform: translateY(0);
        }

        .back-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #80cbc4;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .back-link:hover { color: #009688; }
      `}</style>

            {/* ── Floating bubbles ── */}
            {[
                { left: "8%", size: 20, dur: 9, delay: 0 },
                { left: "20%", size: 13, dur: 12, delay: 2 },
                { left: "50%", size: 17, dur: 10, delay: 1 },
                { left: "72%", size: 11, dur: 11, delay: 3 },
                { left: "85%", size: 19, dur: 8, delay: 0.5 },
                { left: "38%", size: 9, dur: 13, delay: 4 },
            ].map((b, i) => (
                <div key={i}
                    className="absolute rounded-full pointer-events-none bottom-0"
                    style={{
                        left: b.left, width: b.size, height: b.size,
                        background: i % 2 === 0 ? "rgba(0,150,136,0.13)" : "rgba(0,121,107,0.09)",
                        border: "1px solid rgba(0,150,136,0.18)",
                        animation: `bubbleFloat ${b.dur}s ease-in ${b.delay}s infinite`,
                        opacity: 0,
                    }}
                />
            ))}

            {/* ── Ambient blobs ── */}
            <div className="absolute w-80 h-80 rounded-full opacity-20 -top-16 -left-20"
                style={{ background: "radial-gradient(circle, #4db6ac, transparent 70%)" }} />
            <div className="absolute w-64 h-64 rounded-full opacity-15 -bottom-12 -right-14"
                style={{ background: "radial-gradient(circle, #00796b, transparent 70%)" }} />

            {/* ── Dot grid ── */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #00695c 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                }} />

            {/* ── Card ── */}
            <div className="card-in relative z-10 w-full max-w-sm mx-4">
                <div style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(20px)",
                    border: "1.5px solid rgba(0,150,136,0.15)",
                    borderRadius: 20,
                    padding: "40px 36px",
                    boxShadow: "0 20px 60px rgba(0,100,90,0.1), 0 2px 8px rgba(0,150,136,0.06)",
                }}>

                    {/* ── Icon ── */}
                    <div className="title-in flex justify-center mb-5">
                        <div style={{
                            width: 58, height: 58,
                            borderRadius: "50%",
                            background: "linear-gradient(145deg, #e0f2f1, #b2dfdb)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 16px rgba(0,150,136,0.18)",
                            animation: "iconPulse 3s ease-in-out infinite",
                        }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="11" width="20" height="11" rx="3" stroke="#009688" strokeWidth="1.6" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#00796b" strokeWidth="1.6" strokeLinecap="round" />
                                <circle cx="12" cy="16" r="1.5" fill="#009688" />
                            </svg>
                        </div>
                    </div>

                    {/* ── Brand ── */}
                    <div className="title-in text-center mb-1">
                        <span style={{
                            fontFamily: "'DM Serif Display', Georgia, serif",
                            fontSize: "1.6rem",
                            color: "#004d40",
                            letterSpacing: "-0.01em",
                        }}>Pixel</span>
                        <span style={{
                            fontFamily: "'DM Serif Display', Georgia, serif",
                            fontSize: "1.6rem",
                            color: "#009688",
                            letterSpacing: "-0.01em",
                        }}>Mags</span>
                    </div>

                    {/* ── Title ── */}
                    <h2 className="title-in text-center mb-2" style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                        color: "#004d40",
                        letterSpacing: "-0.01em",
                    }}>
                        Forgot Your Password?
                    </h2>

                    {/* ── Divider ── */}
                    <div className="desc-in flex justify-center mb-4">
                        <div style={{
                            width: 40, height: 2, borderRadius: 99,
                            background: "linear-gradient(90deg, #80cbc4, #009688)",
                        }} />
                    </div>

                    {/* ── Desc ── */}
                    <p className="desc-in text-center mb-6" style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.82rem",
                        color: "#80cbc4",
                        lineHeight: 1.6,
                    }}>
                        Masukkan email Anda dan kami akan mengirimkan tautan untuk mereset kata sandi.
                    </p>

                    {/* ── Form ── */}
                    <div className="form-in">
                        <div className="mb-5">
                            <label style={{
                                display: "block",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 500,
                                fontSize: "0.78rem",
                                color: "#00695c",
                                letterSpacing: "0.03em",
                                marginBottom: 6,
                            }}>
                                Email Address
                            </label>
                            <div style={{ position: "relative" }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#80cbc4" strokeWidth="1.6" />
                                    <path d="M2 8l10 6 10-6" stroke="#80cbc4" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                                <input
                                    type="email"
                                    className="reset-input"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <button type="button" className="reset-btn">
                            Send Reset Link
                        </button>

                        <div className="flex justify-center mt-5">
                            <a href="#" className="back-link flex items-center gap-1.5">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href="/login" style={{ color: "#009688", fontWeight: 500, textDecoration: "none" }}>
                                Kembali ke halaman login
                            </a>
                            </a>
                        </div>
                    </div>

                    {/* ── Shimmer bar ── */}
                    <div className="mt-6 rounded-full overflow-hidden mx-auto" style={{ width: 120, height: 2, background: "rgba(0,150,136,0.1)" }}>
                        <div style={{
                            height: "100%", width: "100%", borderRadius: 99,
                            background: "linear-gradient(90deg, #e0f2f1 0%, #009688 40%, #4db6ac 60%, #e0f2f1 100%)",
                            backgroundSize: "200% 100%",
                            animation: "shimmer 2.5s linear infinite",
                        }} />
                    </div>
                </div>

                {/* ── Footer ── */}
                <p className="text-center mt-5" style={{
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
        </div>
    );
}