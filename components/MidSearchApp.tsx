"use client";

import { useState, type FormEvent } from "react";
import MidSearchForm from "./MidSearchForm";
import ProfileCard from "./ProfileCard";
import { isValidMid, normalizeMid } from "@/lib/line";

type Search = { mid: string; id: number };

export default function MidSearchApp() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [search, setSearch] = useState<Search | null>(null);

  const handleChange = (value: string) => {
    setInputValue(value);
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!isValidMid(trimmed)) {
      setErrorMessage("MIDの形式が正しくありません（u + 32桁の16進数）");
      setSearch(null);
      return;
    }
    setErrorMessage(null);
    // 検索のたびにidを更新することで、同じMIDでも ProfileCard を再マウントし、
    // 画像の再読み込み（リトライ）が行われるようにする。
    setSearch((prev) => ({
      mid: normalizeMid(trimmed),
      id: (prev?.id ?? 0) + 1,
    }));
  };

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <MidSearchForm
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      {search && <ProfileCard key={search.id} mid={search.mid} />}
    </div>
  );
}
