import type { Plugin } from "vite";

export function transformTestSource(code: string): { text: string; counts: Record<string, number> };
export function fortisTestCodemod(): Plugin;
