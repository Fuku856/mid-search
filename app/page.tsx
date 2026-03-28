"use client";
import { useState } from "react";

export default function MidSearch() {
  const [mid, setMid] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const isValidMid = (v: string) => /^[Uu][0-9a-f]{32}$/.test(v);

  const handleSearch = () => {
    if (!isValidMid(mid)) {
      alert("midの形式が正しくありません（U + 32桁の16進数）");
      return;
    }
    setConfirmed(mid);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex gap-2 w-full max-w-md">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          value={mid}
          onChange={(e) => setMid(e.target.value.trim())}
          placeholder="mid を入力（例: Uxxxxxxxx...）"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="bg-[#06C755] text-white px-4 py-2 rounded font-bold"
          onClick={handleSearch}
        >
          検索
        </button>
      </div>

      {confirmed && (
        <div className="flex flex-col items-center gap-3 mt-4">
          <img
            src={`https://obs.line-apps.com/os/p/${confirmed}`}
            alt="プロフィール画像"
            className="w-24 h-24 rounded-full object-cover border"
            onError={(e) => {
              e.currentTarget.src = "/default-avatar.png";
            }}
          />
          <a
            href={`line://nv/profilePopup/mid=${confirmed}`}
            className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full font-bold text-sm shadow"
          >
            LINEでプロフィールを開く
          </a>
          <p className="text-xs text-gray-400 font-mono break-all max-w-xs text-center">
            {confirmed}
          </p>
        </div>
      )}
    </div>
  );
}
