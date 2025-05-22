import React, { useState } from "react";
import members from "../data/members.json";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return setError("Email tidak boleh kosong.");
    if (!emailRegex.test(email)) return setError("Format email tidak valid.");

    const member = members.find((m) => m.email.toLowerCase() === email.toLowerCase());
    if (member) {
      setResult(member);
    } else {
      setError("❌ Email tidak terdaftar sebagai member.");
    }
  };

  const getColorClass = (tipe) => {
    switch (tipe) {
      case "silver":
        return "bg-gray-200 text-gray-800 border-gray-400";
      case "gold":
        return "bg-yellow-200 text-yellow-800 border-yellow-400";
      case "platinum":
        return "bg-indigo-200 text-indigo-800 border-indigo-400";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Cek Keanggotaan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Cek Sekarang
        </button>
      </form>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {result && (
        <div
          className={`mt-6 p-4 border-l-4 rounded ${getColorClass(
            result.tipe_member
          )}`}
        >
          <p className="text-lg font-medium">
            🧾 Selamat datang, {result.nama}! Anda adalah member{" "}
            <strong className="uppercase">{result.tipe_member}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
