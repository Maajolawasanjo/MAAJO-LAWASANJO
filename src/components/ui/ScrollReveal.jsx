import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom center',
  wordAnimationEnd = 'bottom center'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const processNode = (node, indexPath = '') => {
      if (typeof node === 'string') {
        return node.split(/(\s+)/).map((word, index) => {
          if (word.match(/^\s+$/)) return word;
          return (
            <span className="inline-block word" key={`${indexPath}-${index}`}>
              {word}
            </span>
          );
        });
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(node, {
          children: React.Children.map(node.props.children, (child, i) =>
            processNode(child, `${indexPath}-${i}`)
          )
        });
      }
      return node;
    };
    return React.Children.map(children, (child, i) => processNode(child, `${i}`));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength
  ]);

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
