import { useState } from "react";

const THROTTLE_MS = 30_000;
const MIN_FILL_MS = 2500;

export function useFormGuard(key: string) {
  const [mountedAt] = useState(() => Date.now());

  const checkOk = (): { ok: boolean; reason?: "throttled" | "too_fast" | "honeypot" } => {
    const last = Number(localStorage.getItem(`nht_form_${key}`) || 0);
    if (last && Date.now() - last < THROTTLE_MS) return { ok: false, reason: "throttled" };
    if (Date.now() - mountedAt < MIN_FILL_MS) return { ok: false, reason: "too_fast" };
    return { ok: true };
  };

  const stamp = () => localStorage.setItem(`nht_form_${key}`, String(Date.now()));

  return { checkOk, stamp };
}