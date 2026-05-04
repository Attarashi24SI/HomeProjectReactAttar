import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) { setError(response.data.message); return; }
        navigate("/");
      })
      .catch((err) => {
        if (err.response) setError(err.response.data.message || "An error occurred");
        else setError(err.message || "An unknown error occurred");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(160deg, #e6f7f5 0%, #f0fdfb 50%, #e0f2f1 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display@0;1&display=swap');

        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes iconPulse {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.06); }
        }
        @keyframes errorShake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-4px); }
          40%,80% { transform: translateX(4px); }
        }

        .card-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
        .row1-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .row2-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.2s both; }
        .row3-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.3s both; }
        .row4-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.4s both; }
        .row5-in  { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) 0.5s both; }
        .error-shake { animation: errorShake 0.4s ease; }

        .auth-input {
          width: 100%;
          padding: 12px 16px 12px 42px;
          background: #f8fffe;
          border: 1.5px solid rgba(0,150,136,0.18);
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #004d40;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .auth-input::placeholder { color: #b2dfdb; }
        .auth-input:focus {
          border-color: #009688;
          box-shadow: 0 0 0 3px rgba(0,150,136,0.1);
          background: #fff;
        }

        .auth-btn {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #009688 0%, #00796b 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 18px rgba(0,150,136,0.32);
          letter-spacing: 0.02em;
        }
        .auth-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(0,150,136,0.4);
        }
        .auth-btn:active { transform: translateY(0); }
        .auth-btn:disabled { opacity: 0.65; cursor: not-allowed; }
      `}</style>

      {/* Card */}
      <div className="card-in w-full mx-4" style={{ maxWidth: 380 }}>
        <div style={{
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(24px)",
          border: "1.5px solid rgba(0,150,136,0.12)",
          borderRadius: 24,
          padding: "40px 32px 36px",
          boxShadow: "0 24px 64px rgba(0,100,90,0.1), 0 2px 8px rgba(0,150,136,0.05)",
        }}>

          {/* Avatar icon */}
          <div className="row1-in flex justify-center mb-5">
            <div style={{
              width: 62, height: 62, borderRadius: "50%",
              background: "linear-gradient(145deg, #e0f2f1, #b2dfdb)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(0,150,136,0.15)",
              animation: "iconPulse 3.5s ease-in-out infinite",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#009688" strokeWidth="1.7" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#00796b" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Brand */}
          <div className="row2-in text-center mb-1">
            <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.65rem", color: "#004d40", letterSpacing: "-0.01em" }}>Bright</span>
            <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.65rem", color: "#009688", letterSpacing: "-0.01em" }}>Wash</span>
          </div>

          {/* Title */}
          <h2 className="row2-in text-center mb-1" style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: "1rem", color: "#37474f", margin: "4px 0 0",
          }}>
            Welcome Back 👋
          </h2>

          {/* Divider */}
          <div className="flex justify-center mt-2 mb-6">
            <div style={{ width: 36, height: 2, borderRadius: 99, background: "linear-gradient(90deg, #80cbc4, #009688)" }} />
          </div>

          {/* Error */}
          {error && (
            <div className="error-shake mb-4 flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
              style={{
                background: "rgba(239,83,80,0.07)",
                border: "1.5px solid rgba(239,83,80,0.18)",
                color: "#c62828",
                fontFamily: "'DM Sans', sans-serif",
              }}>
              <MdError style={{ color: "#ef5350", fontSize: 17, flexShrink: 0 }} />
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
              style={{
                background: "rgba(0,150,136,0.06)",
                border: "1.5px solid rgba(0,150,136,0.13)",
                color: "#00695c",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}>
              <AiOutlineLoading3Quarters className="animate-spin" style={{ color: "#009688" }} />
              Mohon Tunggu...
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="row3-in mb-4">
              <label style={{
                display: "block", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: "0.8rem", color: "#00695c",
                letterSpacing: "0.02em", marginBottom: 7,
              }}>
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="#80cbc4" strokeWidth="1.7" />
                  <path d="M2 8l10 6 10-6" stroke="#80cbc4" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input name="email" type="text" onChange={handleChange}
                  className="auth-input" placeholder="you@example.com" />
              </div>
            </div>

            {/* Password */}
            <div className="row4-in mb-6">
              <div className="flex justify-between items-center" style={{ marginBottom: 7 }}>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  fontSize: "0.8rem", color: "#00695c", letterSpacing: "0.02em",
                }}>
                  Password
                </label>
                <a href="/forgot" style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
                  color: "#80cbc4", textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.target.style.color = "#009688"}
                  onMouseLeave={e => e.target.style.color = "#80cbc4"}
                >
                  Lupa password?
                </a>
              </div>
              <div style={{ position: "relative" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  <rect x="2" y="11" width="20" height="11" rx="3" stroke="#80cbc4" strokeWidth="1.7" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#80cbc4" strokeWidth="1.7" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1.5" fill="#80cbc4" />
                </svg>
                <input name="password" type={showPass ? "text" : "password"}
                  onChange={handleChange} className="auth-input"
                  style={{ paddingRight: 42 }} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{ position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#80cbc4", display: "flex", alignItems: "center" }}>
                  {showPass ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="row5-in">
              <button type="submit" className="auth-btn" disabled={loading}>
                {loading
                  ? <span className="flex items-center justify-center gap-2"><AiOutlineLoading3Quarters className="animate-spin" /> Masuk...</span>
                  : "Login"
                }
              </button>

              <p className="text-center mt-4" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                color: "#90a4ae", fontWeight: 300,
              }}>
                Belum punya akun?{" "}
                <a href="/register" style={{ color: "#009688", fontWeight: 500, textDecoration: "none" }}>
                  Daftar sekarang
                </a>
              </p>
            </div>
          </form>

          {/* Shimmer bar */}
          <div className="mt-6 rounded-full overflow-hidden mx-auto" style={{ width: 110, height: 2, background: "rgba(0,150,136,0.08)" }}>
            <div style={{
              height: "100%", width: "100%", borderRadius: 99,
              background: "linear-gradient(90deg, #e0f2f1 0%, #009688 40%, #4db6ac 60%, #e0f2f1 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s linear infinite",
            }} />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-5" style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: "0.65rem", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#b2dfdb",
        }}>
          Pixel Mags · Laundry System
        </p>
      </div>
    </div>
  );
}