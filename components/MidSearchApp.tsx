"use client";

import { useState, type FormEvent } from "react";
import MidSearchForm from "./MidSearchForm";
import ProfileCard from "./ProfileCard";
import { isValidMid } from "@/lib/line";

export default function MidSearchApp() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedMid, setConfirmedMid] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setInputValue(value);
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!isValidMid(trimmed)) {
      setErrorMessage("MIDの形式が正しくありません（u + 32桁の16進数）");
      setConfirmedMid(null);
      return;
    }
    setErrorMessage(null);
    setConfirmedMid(trimmed);
  };

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <MidSearchForm
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      {confirmedMid && <ProfileCard key={confirmedMid} mid={confirmedMid} />}
    </div>
  );
}
