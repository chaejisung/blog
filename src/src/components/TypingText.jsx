import { useEffect, useRef, useState } from 'react';

const texts = [
  'Web Development',
  'Server Development',
  'Computer Systems',
  'Python Programming Language',
  'Java Programming Language',
];

export default function TypingText() {
  const [displayText, setDisplayText] = useState('');

  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const lastFrameTime = useRef(0);
  const pauseUntil = useRef(0);

  useEffect(() => {
    const typeSpeed = 100;     // 타이핑 속도 (ms)
    const deleteSpeed = 50;    // 삭제 속도 (더 빠르게)
    const pauseTime = 1000;    // 전체 출력 후 쉬는 시간

    const step = (time) => {
      const delta = time - lastFrameTime.current;

      // 백그라운드 복귀 시 강제 초기화 방지
      if (time < pauseUntil.current) {
        requestAnimationFrame(step);
        return;
      }

      const currentText = texts[textIndex.current];

      if (!deleting.current && delta > typeSpeed) {
        setDisplayText(currentText.slice(0, charIndex.current + 1));
        charIndex.current++;

        lastFrameTime.current = time;

        if (charIndex.current === currentText.length) {
          deleting.current = true;
          pauseUntil.current = time + pauseTime;
        }
      } else if (deleting.current && delta > deleteSpeed) {
        setDisplayText(currentText.slice(0, charIndex.current - 1));
        charIndex.current--;

        lastFrameTime.current = time;

        if (charIndex.current === 0) {
          deleting.current = false;
          textIndex.current = (textIndex.current + 1) % texts.length;
        }
      }

      requestAnimationFrame(step);
    };

    const animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <span className="typing-text">{displayText}|</span>;
}
