import React from 'react'
import { CONFIG_BRANDING } from '../config';

export function Logo({ theme = CONFIG_BRANDING.THEME_DARK, ...props }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 536.8 536.8"
      {...props}
    >
      <defs>
        <path id="a" d="M105.9 105.9h325v325h-325z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path clipPath="url(#b)" fill="#fff" d="M0 0h536.8v536.8H0z" />
      <g clipPath="url(#b)">
        <path
          d="M334.9 421.1H232.6c33.1-21.6 54.7-59 54.7-100.9v-205h134.2v205.1c-.1 51-36.1 94.1-86.6 100.8z"
          fill="#2d2d2d"
        />
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="308.2086"
          y1="178.3294"
          x2="-138.7383"
          y2="-168.8506"
          gradientTransform="matrix(1 0 0 -1 0 328)"
        >
          <stop offset="0" stopColor="#2d2d2d" />
          <stop offset="1" stopColor="#2d2d2d" stopOpacity="0" />
        </linearGradient>
        <path
          d="M137.4 387.9c26.3 29.9 75.6 30 102.2.3 5.5-6.1 10.3-12.9 14.2-20.2-6-14.3-9.4-29.9-9.4-46.3V115.2h-132v206.5c0 25.2 9.4 48.4 25 66.2z"
          fill="url(#c)"
        />
      </g>
    </svg>
  );
}

export function LogoFull({ theme = CONFIG_BRANDING.THEME_DARK, ...props }) {
  return null;
}
