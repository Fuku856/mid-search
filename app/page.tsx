import MidSearchApp from "@/components/MidSearchApp";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 text-line"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 5.94 2 10.8c0 4.36 3.55 8.01 8.35 8.7.32.07.76.21.87.49.1.25.06.65.03.9l-.14.85c-.04.25-.19.98.86.53 1.05-.44 5.68-3.35 7.75-5.73C21.16 14.03 22 12.5 22 10.8 22 5.94 17.52 2 12 2Z" />
        </svg>
        <h1 className="text-2xl font-bold">MID Search</h1>
        <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
          LINEのユーザーMIDからプロフィール画像を検索・表示し、プロフィールにアクセスします
        </p>
      </div>
      <MidSearchApp />
    </main>
  );
}
