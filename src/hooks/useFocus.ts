import React, { useState } from "react";

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);

  const focusHandler = (e: React.SyntheticEvent) => {
    if (e.type === "focus") {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  return { isFocused, focusHandler };
};
