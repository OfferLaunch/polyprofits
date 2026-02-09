/**
 * LightPillar mount – renders into #light-pillar-root.
 * Build: npm run build:lightpillar
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import LightPillar from './components/LightPillar/LightPillar.jsx';

if (typeof window !== 'undefined') {
  window.React = React;
}

function initLightPillar() {
  const root = document.getElementById('light-pillar-root');
  if (!root) {
    setTimeout(initLightPillar, 100);
    return;
  }

  const path = (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname.toLowerCase() : '';
  const isLighterPage = /^\/(about|results|legal\/)/.test(path) || /(^|\/)about\.html|results\.html/.test(path);
  const topColor = isLighterPage ? '#243b52' : '#1a2f4a';
  const bottomColor = isLighterPage ? '#1a2f4a' : '#0f2037';

  try {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(
      React.createElement(
        'div',
        { style: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 } },
        React.createElement(LightPillar, {
          topColor,
          bottomColor,
          intensity: 0.9,
          rotationSpeed: 0.1,
          glowAmount: 0.002,
          pillarWidth: 8.4,
          pillarHeight: 0.4,
          noiseIntensity: 0.5,
          pillarRotation: 121,
          interactive: false,
          mixBlendMode: 'screen',
          quality: 'high',
        })
      )
    );
  } catch (e) {
    console.error('LightPillar init error:', e);
    setTimeout(initLightPillar, 200);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLightPillar);
} else {
  setTimeout(initLightPillar, 0);
}
