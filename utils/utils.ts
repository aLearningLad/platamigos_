import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function showTime() {
  const date = new Date();
  const time = date.toTimeString();
  return time;
}
