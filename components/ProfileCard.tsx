"use client";

import { useState } from "react";
import Image from "next/image";
import { getLineProfileDeepLink, getLineProfileImageUrl } from "@/lib/line";

type ProfileCardProps = {
  mid: string;
};

type ImageStatus = "loading" | "loaded" | "error";

export default function ProfileCard({ mid }: ProfileCardProps) {
  const [imageStatus, setImageStatus] = useState<ImageStatus>("loading");

  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="relative h-24 w-24">
        {imageStatus === "loading" && (
          <div className="absolute inset-0 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
        )}
        {imageStatus === "error" ? (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12"
              aria-hidden="true"
            >
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z" />
            </svg>
          </div>
        ) : (
          <Image
            src={getLineProfileImageUrl(mid)}
            alt="プロフィール画像"
            width={96}
            height={96}
            className={`h-24 w-24 rounded-full border border-neutral-200 object-cover transition-opacity duration-300 dark:border-neutral-800 ${
              imageStatus === "loaded" ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageStatus("loaded")}
            onError={() => setImageStatus("error")}
          />
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <a
          href={getLineProfileDeepLink(mid)}
          className="flex items-center gap-2 rounded-full bg-line px-6 py-3 text-sm font-bold text-white shadow transition hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2"
        >
          LINEでプロフィールを開く
        </a>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          LINEアプリがインストールされている端末でのみ開けます
        </p>
      </div>

      <p className="max-w-xs break-all text-center font-mono text-xs text-neutral-600 dark:text-neutral-300">
        {mid}
      </p>
    </div>
  );
}
