import * as React from "react";

export interface VsfIconGlobeProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconGlobe(props: VsfIconGlobeProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.534 21.98a10.032 10.032 0 0 0 8.708-13.84 9.949 9.949 0 0 0-9.661-6.132 9.801 9.801 0 0 0-9.58 9.787 10.127 10.127 0 0 0 9.412 10.177c.095.02.192.025.289.016.085.004.17.006.257.008h.017c.124 0 .249-.002.373-.007.062.003.124 0 .185-.009ZM14.81 4.493a13.412 13.412 0 0 1 1.604 3.502h2.535a7.95 7.95 0 0 0-4.139-3.502Zm-2.805-.421c1.063 1.236 1.83 2.553 2.31 3.923h-4.62c.48-1.37 1.247-2.687 2.31-3.923Zm2.8 5.923h-5.6a10.848 10.848 0 0 0-.113 1.565c0 .881.105 1.782.319 2.696h5.188a11.82 11.82 0 0 0 .319-2.697c0-.526-.037-1.047-.112-1.564Zm-.84 6.261h-3.92a17.616 17.616 0 0 0 1.96 3.571 17.762 17.762 0 0 0 1.96-3.57Zm-6.6-2a13.71 13.71 0 0 1-.273-2.696c0-.526.032-1.048.095-1.565H4.213A7.798 7.798 0 0 0 4 11.801v.006a8.123 8.123 0 0 0 .358 2.45h3.005Zm-2.079 2H7.91c.38 1.101.893 2.199 1.532 3.285a8.125 8.125 0 0 1-4.156-3.285Zm10.813 0h2.66a8.03 8.03 0 0 1-4.21 3.315 18.231 18.231 0 0 0 1.55-3.315Zm3.569-2h-3.022c.18-.902.272-1.803.272-2.697 0-.526-.032-1.048-.095-1.564h2.935a7.97 7.97 0 0 1 .243 1.965v.002a8.03 8.03 0 0 1-.333 2.294ZM9.233 4.441a13.428 13.428 0 0 0-1.637 3.554H4.995a7.799 7.799 0 0 1 4.238-3.554ZM12 2h.003v.086l-.005-.002V2H12Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "globe"}
      content={useContent()}
    />
  );
}