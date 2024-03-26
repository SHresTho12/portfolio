import { useEffect, useState } from "react";

const ShuffleText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    let interval = null;

    const handleMouseOver = () => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayedText(prevText =>
          prevText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }

              return letter[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const handleMouseOut = () => {
      clearInterval(interval);
      setDisplayedText(text);
    };

    const element = document.getElementById("shuffledText");
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
      clearInterval(interval);
    };
  }, [text]);

  return <h1 id="shuffledText">{displayedText}</h1>;
};

export default ShuffleText;
