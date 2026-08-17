import React from 'react';

/**
 * HeroDigitalEcosystem3D
 * 
 * Lightweight, pure SVG + CSS 3D-styled digital ecosystem illustration for Cool Digital.
 * Represents the central Cool Digital hub connected to 5 core satellites (Web, Logiciels, Support IT, Réseaux Sociaux, Formations)
 * with a transversal AI core.
 * 
 * Performance:
 * - 100% vector SVG & CSS transforms
 * - Zero WebGL / Three.js / video dependencies (< 10 KB)
 * - Hardware accelerated (GPU)
 * - Automatic disable when `prefers-reduced-motion` is active
 * - Aria-hidden for accessible screen-reader experience
 */
export const HeroDigitalEcosystem3D: React.FC = () => {
  return (
    <div 
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.5deg); }
        }
        @keyframes satelliteFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-3px, -5px); }
        }
        @keyframes satelliteFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, -6px); }
        }
        @keyframes satelliteFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, 4px); }
        }
        @keyframes satelliteFloat4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-4px, 5px); }
        }
        @keyframes satelliteFloat5 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, -2px); }
        }
        @keyframes hubGlowPulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.06); }
        }
        @keyframes signalTravel {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes aiSparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .anim-hub-float { animation: subtleFloat 7s ease-in-out infinite; }
        .anim-satellite-1 { animation: satelliteFloat1 6.2s ease-in-out infinite; }
        .anim-satellite-2 { animation: satelliteFloat2 6.8s ease-in-out infinite; }
        .anim-satellite-3 { animation: satelliteFloat3 7.4s ease-in-out infinite; }
        .anim-satellite-4 { animation: satelliteFloat4 6.5s ease-in-out infinite; }
        .anim-satellite-5 { animation: satelliteFloat5 7.1s ease-in-out infinite; }
        .anim-hub-glow { animation: hubGlowPulse 4.5s ease-in-out infinite; }
        .anim-ai-node { animation: aiSparkle 3s ease-in-out infinite; }
        .anim-line-flow {
          stroke-dasharray: 6, 8;
          animation: signalTravel 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-hub-float,
          .anim-satellite-1,
          .anim-satellite-2,
          .anim-satellite-3,
          .anim-satellite-4,
          .anim-satellite-5,
          .anim-hub-glow,
          .anim-ai-node,
          .anim-line-flow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-500/10 via-slate-900/5 to-emerald-400/15 blur-2xl anim-hub-glow"></div>

      <svg 
        viewBox="0 0 600 600" 
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)] overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main 3D Hub Gradients */}
          <linearGradient id="hubGlassFace" x1="200" y1="210" x2="400" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="60%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#090D16" />
          </linearGradient>

          <linearGradient id="hubBevelTop" x1="200" y1="210" x2="400" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#22C55E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="hubBevelBottom" x1="200" y1="390" x2="400" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Emerald Glow Core */}
          <radialGradient id="emeraldCoreGlow" cx="300" cy="300" r="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.6" />
            <stop offset="45%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </radialGradient>

          {/* Transversal AI Neural Glow */}
          <linearGradient id="aiBadgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Satellite Plate Gradients */}
          <linearGradient id="plateTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          <linearGradient id="plateDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="connLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0.7" />
          </linearGradient>

          {/* Soft 3D Drop Shadows */}
          <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.22" />
          </filter>

          <filter id="satelliteShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* BACKGROUND SUBTLE ORBITAL RINGS & PERSPECTIVE GRID */}
        {/* ------------------------------------------------------------- */}
        <g opacity="0.35">
          <ellipse cx="300" cy="300" rx="220" ry="180" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 5" />
          <ellipse cx="300" cy="300" rx="160" ry="130" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE CONNECTION FILAMENTS (Lignes fines au Hub) */}
        {/* ------------------------------------------------------------- */}
        <g stroke="url(#connLineGrad)" strokeWidth="1.5" opacity="0.75">
          {/* To Satellite 1: Web (Top Center) */}
          <path d="M 300 220 L 300 135" className="anim-line-flow" />
          {/* To Satellite 2: Logiciels (Top Right) */}
          <path d="M 365 255 L 450 190" className="anim-line-flow" />
          {/* To Satellite 3: Support IT (Bottom Right) */}
          <path d="M 360 345 L 445 405" className="anim-line-flow" />
          {/* To Satellite 4: Réseaux Sociaux (Bottom Left) */}
          <path d="M 235 345 L 155 405" className="anim-line-flow" />
          {/* To Satellite 5: Formations (Top Left) */}
          <path d="M 235 255 L 150 190" className="anim-line-flow" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* CENTRAL HUB 3D: "COOL DIGITAL" */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-hub-float" filter="url(#shadow3d)">
          {/* Hub Deep Shadow Plate */}
          <rect x="205" y="215" width="190" height="170" rx="34" fill="#020617" opacity="0.4" />
          
          {/* Hub Ambient Green Core Radiation */}
          <circle cx="300" cy="300" r="95" fill="url(#emeraldCoreGlow)" />

          {/* Hub Main Isometric/Glass Plate */}
          <rect 
            x="200" 
            y="210" 
            width="200" 
            height="180" 
            rx="32" 
            fill="url(#hubGlassFace)" 
            stroke="url(#hubBevelTop)" 
            strokeWidth="1.75" 
          />

          {/* Hub Top Specular Light Rim */}
          <path d="M 232 211 L 368 211" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

          {/* Transversal AI Core - Micro Neural Node */}
          <g transform="translate(276, 238)" className="anim-ai-node">
            <rect x="0" y="0" width="48" height="20" rx="10" fill="url(#aiBadgeGradient)" />
            <circle cx="10" cy="10" r="3" fill="#FFFFFF" />
            <text x="26" y="14" fill="#FFFFFF" fontSize="9" fontWeight="800" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">
              IA
            </text>
          </g>

          {/* Hub Typography: "COOL DIGITAL" */}
          <text 
            x="300" 
            y="292" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontSize="18" 
            fontWeight="900" 
            letterSpacing="2.5" 
            fontFamily="sans-serif"
          >
            COOL DIGITAL
          </text>

          {/* Hub Micro-Label: "SOLUTIONS &amp; SUPPORT IT" */}
          <text 
            x="300" 
            y="312" 
            textAnchor="middle" 
            fill="#22C55E" 
            fontSize="9" 
            fontWeight="700" 
            letterSpacing="1.8" 
            fontFamily="sans-serif"
          >
            360° ÉCOSYSTÈME
          </text>

          {/* Transversal Subtle Neural Circuit Lines within Hub */}
          <g stroke="#334155" strokeWidth="1" opacity="0.6">
            <path d="M 235 342 H 275 L 290 355 H 310 L 325 342 H 365" />
            <circle cx="235" cy="342" r="2.5" fill="#22C55E" />
            <circle cx="365" cy="342" r="2.5" fill="#22C55E" />
            <circle cx="300" cy="355" r="2.5" fill="#38BDF8" />
          </g>

          {/* Bottom Bevel Indicator */}
          <path d="M 240 389 L 360 389" stroke="#090D16" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE 01 — WEB (Top Center) */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-satellite-1" filter="url(#satelliteShadow)">
          <g transform="translate(235, 75)">
            {/* 3D Base Plate */}
            <rect x="0" y="5" width="130" height="60" rx="16" fill="#0F172A" opacity="0.25" />
            <rect x="0" y="0" width="130" height="58" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Top accent line */}
            <path d="M 0 16 C 0 7.16 7.16 0 16 0 L 114 0 C 122.84 0 130 7.16 130 16 L 130 18 L 0 18 Z" fill="#F8FAFC" />
            
            {/* Browser dots */}
            <circle cx="14" cy="9" r="2.5" fill="#EF4444" opacity="0.7" />
            <circle cx="23" cy="9" r="2.5" fill="#F59E0B" opacity="0.7" />
            <circle cx="32" cy="9" r="2.5" fill="#22C55E" opacity="0.7" />

            {/* Icon Graphic: Minimal 3D Web Viewport */}
            <rect x="12" y="26" width="22" height="22" rx="6" fill="#0F172A" />
            <circle cx="23" cy="37" r="6" stroke="#22C55E" strokeWidth="1.5" fill="none" />
            <path d="M 17 37 H 29" stroke="#22C55E" strokeWidth="1.2" />

            {/* Label */}
            <text x="42" y="36" fill="#64748B" fontSize="8" fontWeight="800" letterSpacing="1">01</text>
            <text x="42" y="47" fill="#0F172A" fontSize="12" fontWeight="800" letterSpacing="0.8">WEB</text>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE 02 — LOGICIELS (Top Right) */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-satellite-2" filter="url(#satelliteShadow)">
          <g transform="translate(420, 155)">
            {/* 3D Base Plate */}
            <rect x="0" y="5" width="145" height="58" rx="16" fill="#0F172A" opacity="0.25" />
            <rect x="0" y="0" width="145" height="56" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            
            {/* Modular 3D Database/ERP Cubes */}
            <rect x="12" y="14" width="26" height="28" rx="6" fill="#0F172A" />
            <rect x="16" y="19" width="18" height="4" rx="2" fill="#22C55E" />
            <rect x="16" y="26" width="18" height="4" rx="2" fill="#38BDF8" />
            <rect x="16" y="33" width="12" height="4" rx="2" fill="#94A3B8" />

            {/* Label */}
            <text x="46" y="27" fill="#64748B" fontSize="8" fontWeight="800" letterSpacing="1">02</text>
            <text x="46" y="43" fill="#0F172A" fontSize="12" fontWeight="800" letterSpacing="0.8">LOGICIELS</text>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE 03 — SUPPORT IT (Bottom Right) */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-satellite-3" filter="url(#satelliteShadow)">
          <g transform="translate(415, 380)">
            {/* 3D Base Plate */}
            <rect x="0" y="5" width="145" height="58" rx="16" fill="#0F172A" opacity="0.25" />
            <rect x="0" y="0" width="145" height="56" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* 3D Shield / System Maintenance Node */}
            <rect x="12" y="14" width="26" height="28" rx="6" fill="#0F172A" />
            <path d="M 25 20 L 32 23 V 29 C 32 33 25 36 25 36 C 25 36 18 33 18 29 V 23 Z" fill="#22C55E" opacity="0.85" />
            <path d="M 23 28 L 25 30 L 28 26" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

            {/* Label */}
            <text x="46" y="27" fill="#64748B" fontSize="8" fontWeight="800" letterSpacing="1">03</text>
            <text x="46" y="43" fill="#0F172A" fontSize="12" fontWeight="800" letterSpacing="0.8">SUPPORT IT</text>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE 04 — RÉSEAUX SOCIAUX (Bottom Left) */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-satellite-4" filter="url(#satelliteShadow)">
          <g transform="translate(40, 380)">
            {/* 3D Base Plate */}
            <rect x="0" y="5" width="155" height="58" rx="16" fill="#0F172A" opacity="0.25" />
            <rect x="0" y="0" width="155" height="56" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Multi-Channel Wave / Communication */}
            <rect x="12" y="14" width="26" height="28" rx="6" fill="#0F172A" />
            <circle cx="21" cy="28" r="3.5" fill="#22C55E" />
            <path d="M 27 23 C 29 25 29 31 27 33" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 31 20 C 34 24 34 32 31 36" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Label */}
            <text x="46" y="27" fill="#64748B" fontSize="8" fontWeight="800" letterSpacing="1">04</text>
            <text x="46" y="43" fill="#0F172A" fontSize="11" fontWeight="800" letterSpacing="0.6">RÉSEAUX SOCIAUX</text>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* SATELLITE 05 — FORMATIONS (Top Left) */}
        {/* ------------------------------------------------------------- */}
        <g className="anim-satellite-5" filter="url(#satelliteShadow)">
          <g transform="translate(40, 155)">
            {/* 3D Base Plate */}
            <rect x="0" y="5" width="145" height="58" rx="16" fill="#0F172A" opacity="0.25" />
            <rect x="0" y="0" width="145" height="56" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* 3D Graduation & Skills Platform */}
            <rect x="12" y="14" width="26" height="28" rx="6" fill="#0F172A" />
            <path d="M 17 26 L 25 21 L 33 26 L 25 30 Z" fill="#22C55E" />
            <path d="M 20 28.5 V 33 C 20 34.5 25 36 25 36 C 25 36 30 34.5 30 33 V 28.5" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />

            {/* Label */}
            <text x="46" y="27" fill="#64748B" fontSize="8" fontWeight="800" letterSpacing="1">05</text>
            <text x="46" y="43" fill="#0F172A" fontSize="12" fontWeight="800" letterSpacing="0.8">FORMATIONS</text>
          </g>
        </g>
      </svg>
    </div>
  );
};
