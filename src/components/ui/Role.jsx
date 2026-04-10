import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "> Fullstack Developer";
  const [displayed, setDisplayed] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[i]);
        setI(i + 1);
      }, 120);

      return () => clearTimeout(timeout);
    }
  }, [i]);

  return (
    <h2 className="font-mono text-2xl text-muted-foreground">
      {displayed}
      <span className="text-primary animate-blink">_</span>
    </h2>
  );
}