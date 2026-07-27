"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 30,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'words',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  tag = 'p',
  textAlign = 'left',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const onCompleteRef = useRef(onLetterAnimationComplete);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  // Split text into word spans cleanly without requiring paid GSAP Club plugins
  const units = splitType === 'chars' ? text.split('') : text.split(' ');

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const spans = containerRef.current.querySelectorAll('.split-unit');
      if (!spans.length) return;

      gsap.fromTo(
        spans,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      );
    },
    {
      dependencies: [text, delay, duration, ease, splitType],
      scope: containerRef
    }
  );

  const Tag = (tag || 'p') as React.ElementType;

  return (
    <Tag
      ref={containerRef}
      style={{ textAlign, wordWrap: 'break-word' }}
      className={`inline-block whitespace-normal ${className}`}
    >
      {units.map((unit, index) => (
        <span
          key={`${unit}-${index}`}
          className="split-unit inline-block will-change-transform"
          style={{ marginRight: splitType === 'chars' ? '0.05em' : '0.25em' }}
        >
          {unit === ' ' ? '\u00A0' : unit}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
