import * as React from "react";

export interface VsfIconCompareProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconCompare(props: VsfIconCompareProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 4h-5.2c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H4c-.6 0-1 .4-1 1s.4 1 1 1h5.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H20c.6 0 1-.4 1-1s-.4-1-1-1Zm-8 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1ZM7.241 7.833a1.342 1.342 0 0 0-2.482 0L1 17c0 2.8 2.2 5 5 5s5-2.2 5-5L7.241 7.833ZM3 17l3-8 3 8H3Zm13.645-9.114a1.41 1.41 0 0 1 2.614-.011L23 17c0 2.8-2.2 5-5 5s-5-2.2-5-5l3.645-9.114ZM18 9l-3 8h6l-3-8Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "compare"}
      content={useContent()}
    />
  );
}