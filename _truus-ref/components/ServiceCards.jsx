"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CARDS_DATA } from "@/lib/data";

export default function ServiceCards() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate underline SVG paths on scroll (from HeroSection)
    gsap.to(".title-underline-svg path", {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".service-cards-wrapper",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    initCardAnimations();
  }, []);

  return (
    <>
      {/* ─── "Call us if you need:" Heading ─── */}
      <div className="title-container">
        <h2 className="main-title">
          call us if you <span className="italic-text">need:</span>
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          viewBox="0 0 159 17"
          fill="none"
          className="title-underline-svg"
        >
          <path
            d="M1 12.1515C53.0771 5.7187 105.529 2.30552 158 1.93652"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M30.2672 15.9461C64.1899 12.8158 98.2663 11.3583 132.33 11.5735"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      {/* ─── Service Cards ─── */}
      <div className="cards-wrapper" id="cards-wrapper">
        {CARDS_DATA.map((card) => (
          <div key={card.color} className={`card card-${card.color}`}>
            <span className={`card-sticker sticker-${card.sticker}`} aria-hidden="true">
              {STICKERS[card.sticker]}
            </span>
            <h3 className="card-title">{card.title}</h3>
            <svg
              width="100%"
              height="10"
              className="card-divider-svg"
              aria-hidden="true"
            >
              <use href="#card-divider" />
            </svg>
            <ul className="card-list">
              {card.services.map((service) => (
                <li key={service}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                    className="services-card__bullet-svg"
                    aria-hidden="true"
                  >
                    <use href="#bullet-icon" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

const STICKERS = {
  megaphone: (
    <svg viewBox="0 0 80 80" width="78" height="78">
      <path d="M18 14c22 6 30 18 28 34-16-2-28 4-36 14 2-18 0-36 8-48z" fill="#F6C445" />
      <path d="M22 22c16 4 24 12 22 26" fill="none" stroke="#1E2952" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M30 48l6 16h8l-4-16" fill="#F08A2A" stroke="#1E2952" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="58" cy="22" r="4" fill="#F3D36B" />
      <circle cx="66" cy="36" r="3" fill="#E07A3D" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 80 80" width="74" height="74">
      <ellipse cx="40" cy="42" rx="28" ry="22" fill="#A3C1AD" />
      <path d="M24 50l28-28 8 8-28 28-10 2z" fill="#E1EBEE" stroke="#1E2952" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M48 26l8 8" stroke="#2176E8" strokeWidth="2.2" />
      <path d="M22 52l6 6" stroke="#1E2952" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 80 80" width="80" height="80">
      <path d="M16 22c8-10 18-8 24-2 8-8 22-6 28 4 8 2 10 14 4 22-4 12-20 20-34 16-14 2-26-8-26-22 0-8 2-14 4-18z" fill="#111827" />
      <rect x="26" y="30" width="30" height="20" rx="4" fill="none" stroke="#E1EBEE" strokeWidth="2.2" />
      <circle cx="41" cy="40" r="5" fill="none" stroke="#E1EBEE" strokeWidth="2.2" />
      <path d="M32 30l3-5h10l3 5" fill="none" stroke="#E1EBEE" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  ),
  browser: (
    <svg viewBox="0 0 80 80" width="76" height="76">
      <ellipse cx="40" cy="40" rx="30" ry="24" fill="#7EBEFF" />
      <rect x="20" y="26" width="40" height="30" rx="5" fill="#E1EBEE" stroke="#1E2952" strokeWidth="2.2" />
      <path d="M20 34h40" stroke="#1E2952" strokeWidth="2" />
      <circle cx="26" cy="30" r="1.6" fill="#E07A3D" />
      <circle cx="31" cy="30" r="1.6" fill="#F6C445" />
      <circle cx="36" cy="30" r="1.6" fill="#A3C1AD" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 80 80" width="72" height="72">
      <ellipse cx="40" cy="42" rx="26" ry="22" fill="#C7B6F2" />
      <path d="M44 18L28 44h12l-4 18 18-28H40z" fill="#F6C445" stroke="#1E2952" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  ),
};

function initCardAnimations() {
  const cards = gsap.utils.toArray(".card");
  if (!cards.length) return;

  const originalData = [
    { rotation: 4 },
    { rotation: -5 },
    { rotation: 5 },
    { rotation: -8 },
    { rotation: 5 },
  ];

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  //   let leaveTimeout = null; no need GSAP can handle the interlining tweens internally once you set overwrite: true

  if (!isMobile) {
    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        // if (leaveTimeout) {
        //   clearTimeout(leaveTimeout);
        //   leaveTimeout = null;
        // }
        const hoverGap = 18;
        const clusterGap = 22;
        const cardWidth = cards[index].offsetWidth;
        const hoveredLeft = cards[index].offsetLeft;
        const leftCards = [];
        const rightCards = [];

        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex < index)
            leftCards.push({ card: otherCard, index: otherIndex });
          else if (otherIndex > index)
            rightCards.push({ card: otherCard, index: otherIndex });
        });

        const currentTop = cards[index].offsetTop;
        const targetCommonTop = 50;
        const moveY = targetCommonTop - currentTop;

        gsap.to(cards[index], {
          x: 0,
          y: moveY,
          rotation: 0,
          scale: 1.08,
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
          overwrite: true,
        });

        if (rightCards.length) {
          const clusterStart = hoveredLeft + cardWidth + hoverGap;
          rightCards.forEach((item, i) => {
            const targetAbsLeft = clusterStart + i * clusterGap;
            const targetX = Math.max(targetAbsLeft - item.card.offsetLeft, 10);
            const angleRad =
              originalData[item.index].rotation * (Math.PI / 180);
            const targetY = targetX * Math.tan(angleRad);
            gsap.to(item.card, {
              x: targetX,
              y: targetY,
              rotation: originalData[item.index].rotation,
              scale: 1,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          });
        }

        if (leftCards.length) {
          leftCards.reverse();
          const clusterStart = hoveredLeft - hoverGap - cardWidth;
          leftCards.forEach((item, i) => {
            const targetAbsLeft = clusterStart - i * clusterGap;
            const targetX = Math.min(targetAbsLeft - item.card.offsetLeft, -10);
            const angleRad =
              originalData[item.index].rotation * (Math.PI / 180);
            const targetY = targetX * Math.tan(angleRad);
            gsap.to(item.card, {
              x: targetX,
              y: targetY,
              rotation: originalData[item.index].rotation,
              scale: 1,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        // leaveTimeout = setTimeout(() => {
        cards.forEach((c, i) => {
          gsap.to(c, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: originalData[i].rotation,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
            zIndex: i + 1,
            delay: 0.08,
          });
        });
        // }, 80);
      });
    });
  } else {
    // ─── Mobile: Stacked card scroll reveal ───
    const cardsWrapper = document.querySelector(".cards-wrapper");
    const scrollPerCard = window.innerHeight * 0.8;
    const navH = 60;
    const mobileRotations = [-6, 4, -8, 5, -3];

    cards.forEach((card, i) => {
      gsap.set(card, {
        position: "absolute",
        left: "50%",
        top: "0",
        xPercent: -50,
        y: i === 0 ? 0 : window.innerHeight * 1.1,
        rotation: mobileRotations[i % mobileRotations.length],
        zIndex: i + 1,
        transformOrigin: "center center",
      });
    });

    const wrapperH =
      window.innerHeight * 0.7 + scrollPerCard * (cards.length - 1);
    gsap.set(cardsWrapper, { height: wrapperH });

    ScrollTrigger.create({
      trigger: cardsWrapper,
      start: `top ${navH}px`,
      end: `+=${scrollPerCard * (cards.length - 1)}`,
      pin: true,
      pinSpacing: true,
      id: "mobile-cards-pin",
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      gsap.fromTo(
        card,
        { y: window.innerHeight * 1.1 },
        {
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsWrapper,
            start: `top+=${(i - 1) * scrollPerCard} ${navH}px`,
            end: `top+=${i * scrollPerCard} ${navH}px`,
            scrub: 0.4,
          },
        },
      );
    });
  }
}
