const MID_PATTERN = /^[Uu][0-9a-f]{32}$/;

export function isValidMid(value: string): boolean {
  return MID_PATTERN.test(value);
}

const LINE_PROFILE_IMAGE_BASE_URL = "https://obs.line-apps.com/os/p";

export function getLineProfileImageUrl(mid: string): string {
  return `${LINE_PROFILE_IMAGE_BASE_URL}/${mid}`;
}

const LINE_DEEP_LINK_SCHEME = "line://nv/profilePopup/mid=";

export function getLineProfileDeepLink(mid: string): string {
  return `${LINE_DEEP_LINK_SCHEME}${mid}`;
}
