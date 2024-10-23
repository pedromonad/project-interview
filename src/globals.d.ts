declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.css';

// Workaround suggested by https://github.com/creativetimofficial/material-tailwind/issues/528#issuecomment-2257236256
import React from 'react';
declare module 'react' {
  interface HTMLAttributes {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler;
    onPointerLeaveCapture?: React.PointerEventHandler;
    crossOrigin?: boolean;
  }
}
