import type { FormEvent } from "react";

type MidSearchFormProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errorMessage: string | null;
};

export default function MidSearchForm({
  value,
  onChange,
  onSubmit,
  errorMessage,
}: MidSearchFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mid" className="text-sm font-medium">
          MIDを入力
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="mid"
            className="flex-1 rounded-lg border border-neutral-300 bg-transparent px-3.5 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-line dark:border-neutral-700"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="例: u06955dd8eb0a8fb4f43be3e53c0f91b28"
            aria-invalid={errorMessage ? true : undefined}
            aria-describedby={errorMessage ? "mid-error" : undefined}
          />
          <button
            type="submit"
            className="rounded-lg bg-line px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2"
          >
            検索
          </button>
        </div>
      </div>
      {errorMessage && (
        <p
          id="mid-error"
          role="alert"
          aria-live="assertive"
          className="text-sm text-red-700 dark:text-red-400"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
