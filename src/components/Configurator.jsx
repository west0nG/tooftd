import { useState, useEffect } from 'react';
import './Configurator.css';

const STORAGE_KEY = 'tooftd-config';

const sizes = [
  { id: 'S', label: "S · 4×4'" },
  { id: 'M', label: "M · 6×6'" },
  { id: 'L', label: "L · 8×8'" },
];

const colors = [
  { id: 'moss', label: 'Moss', gradient: ['#6b8f63', '#4a6741'] },
  { id: 'sage', label: 'Sage', gradient: ['#a5c49f', '#7a9a6d'] },
  { id: 'olive', label: 'Olive', gradient: ['#8a9a5b', '#6b7a3d'] },
  { id: 'cream', label: 'Cream', gradient: ['#f0e8d8', '#d4c8b0'] },
];

const sizeScale = { S: 0.7, M: 1, L: 1.3 };

function loadConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export default function Configurator() {
  const [config, setConfig] = useState(() => {
    const saved = loadConfig();
    return saved || { size: 'M', color: 'moss', moundCount: 4 };
  });
  const [saved, setSaved] = useState(false);

  const activeColor = colors.find((c) => c.id === config.color) || colors[0];
  const scale = sizeScale[config.size] || 1;

  const moundPositions = Array.from({ length: config.moundCount }, (_, i) => {
    const angle = (i / config.moundCount) * Math.PI * 0.8 + 0.3;
    const radius = 30 + (i % 3) * 15;
    return {
      left: `${25 + Math.cos(angle) * radius}%`,
      bottom: `${15 + Math.sin(angle) * 8}%`,
      width: `${(60 + (i % 3) * 20) * scale}px`,
      height: `${(35 + (i % 3) * 12) * scale}px`,
      zIndex: i % 3 + 1,
      animationDelay: `${i * 0.5}s`,
    };
  });

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="configurator">
      <div className="configurator__header">
        <p className="eyebrow">Interactive</p>
        <h2 className="section-title">Build your <em>landscape</em></h2>
        <p className="section-desc">
          Choose your size, color, and mound count. Your configuration saves to your browser.
        </p>
      </div>

      <div className="configurator__layout">
        <div className="configurator__canvas">
          <div className="configurator__preview" style={{ transform: `scale(${scale * 0.85 + 0.15})` }}>
            {moundPositions.map((pos, i) => (
              <div
                key={i}
                className="configurator__mound"
                style={{
                  left: pos.left,
                  bottom: pos.bottom,
                  width: pos.width,
                  height: pos.height,
                  zIndex: pos.zIndex,
                  background: `linear-gradient(145deg, ${activeColor.gradient[0]}, ${activeColor.gradient[1]})`,
                  animationDelay: pos.animationDelay,
                }}
              />
            ))}
            <div className="configurator__base" />
          </div>
          <p className="configurator__label">
            {config.size} · {activeColor.label.toUpperCase()} · {config.moundCount} MOUNDS
          </p>
        </div>

        <div className="configurator__controls">
          <div className="configurator__group">
            <label>Rug Size</label>
            <div className="configurator__sizes">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  className={`configurator__size-btn ${config.size === s.id ? 'active' : ''}`}
                  onClick={() => setConfig({ ...config, size: s.id })}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="configurator__group">
            <label>Carpet Color</label>
            <div className="configurator__swatches">
              {colors.map((c) => (
                <button
                  key={c.id}
                  className={`configurator__swatch ${config.color === c.id ? 'active' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}
                  onClick={() => setConfig({ ...config, color: c.id })}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          <div className="configurator__group">
            <label>
              Number of Mounds · <span style={{ color: 'var(--moss)', fontWeight: 500 }}>{config.moundCount}</span>
            </label>
            <input
              type="range"
              className="configurator__slider"
              min="2"
              max="8"
              value={config.moundCount}
              onChange={(e) => setConfig({ ...config, moundCount: Number(e.target.value) })}
            />
            <div className="configurator__slider-labels">
              <span>2</span><span>4</span><span>6</span><span>8</span>
            </div>
          </div>

          <button className="configurator__save" onClick={handleSave}>
            {saved ? '✓ Configuration Saved!' : 'Save My Configuration'}
          </button>
          <p className="configurator__save-note">Saved to your browser — come back anytime</p>
        </div>
      </div>
    </div>
  );
}
