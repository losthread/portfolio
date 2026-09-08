import { useEffect, useState } from "react";

const phrases = ["> Software Engineer", "> Security Researcher"];

export default function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = phrases[phraseIndex];

    if (!isDeleting && displayed.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, 120);

      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayed.length === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1400);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 70);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed.length === 0) {
      const timeout = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsDeleting(false);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <h2 className="font-mono text-center text-lg md:text-xl lg:text-2xl text-muted-foreground">
      {displayed}
      <span className="text-primary animate-blink">_</span>
    </h2>
  );
}