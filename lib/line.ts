// プレフィックスの u と16進数はどちらの大小文字も受理し、normalizeMid で正規化する。
const MID_PATTERN = /^u[0-9a-f]{32}$/i;

export function isValidMid(value: string): boolean {
  return MID_PATTERN.test(value);
}

// LINEのCDNパスは小文字を前提とするため、検証済みのMIDを小文字に正規化する。
export function normalizeMid(value: string): string {
  return value.trim().toLowerCase();
}

const LINE_PROFILE_IMAGE_BASE_URL = "https://obs.line-apps.com/os/p";

export function getLineProfileImageUrl(mid: string): string {
  return `${LINE_PROFILE_IMAGE_BASE_URL}/${mid}`;
}

const LINE_DEEP_LINK_SCHEME = "line://nv/profilePopup/mid=";

export function getLineProfileDeepLink(mid: string): string {
  return `${LINE_DEEP_LINK_SCHEME}${mid}`;
}
