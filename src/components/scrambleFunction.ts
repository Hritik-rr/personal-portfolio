// A set of random characters for the scramble effect
const letters = "!<>-_\\/[]{}—=+*^?#1234567890________abcdefghijklmnopqrstuvwxyz";

export function scrambleText(element: HTMLElement, originalText: string, duration = 1500) {
  let iteration = 0;
  const length = originalText.length;

  // How many updates happen per second depends on 'duration' & 'interval' below
  const intervalTime = 20; // ms between each scramble frame
  const totalFrames = duration / intervalTime;

  const interval = setInterval(() => {
    // Build the scrambled string character-by-character
    const scrambled = originalText
      .split("")
      .map((char: string, index: number) => {
        // If we've passed this char's "scramble point," show the real letter
        if (index < iteration) {
          return char;
        }
        // Otherwise, show a random character
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    element.innerText = scrambled;

    // Once we've iterated enough, clear the interval & show final text
    if (iteration >= length) {
      clearInterval(interval);
      element.innerText = originalText;
    }

    // Move the scramble boundary a fraction per frame
    // so that letters gradually resolve
    iteration += length / totalFrames;
  }, intervalTime);
}

// const scrambleLink: HTMLElement | null = document.getElementById("scrambleLink");
// const originalText: string = scrambleLink?.innerText || "";

// scrambleLink?.addEventListener("mouseover", () => {
//   scrambleText(scrambleLink, originalText, 800);
// });
