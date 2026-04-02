import { useState, useEffect } from 'react';
import './Gallery.css';
import { galleryImages } from '../data/timeline';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <div className="gallery">
      <p className="eyebrow" style={{ textAlign: 'center', marginTop: 32 }}>Gallery</p>
      <h3 className="gallery__title">Process <em>gallery</em></h3>

      <div className="gallery__grid">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className={`gallery__item placeholder-img ${img.span === 'large' ? 'gallery__item--large' : ''} ${img.span === 'wide' ? 'gallery__item--wide' : ''}`}
            onClick={() => setLightbox(i)}
          >
            {img.label}
          </div>
        ))}
      </div>

      <p className="gallery__note">Click any photo to view full size</p>

      {lightbox !== null && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <div className="gallery__lightbox-img placeholder-img">
              {galleryImages[lightbox].label}
            </div>
            <div className="gallery__lightbox-nav">
              <button onClick={() => setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length)}>←</button>
              <span>{lightbox + 1} / {galleryImages.length}</span>
              <button onClick={() => setLightbox((lightbox + 1) % galleryImages.length)}>→</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
