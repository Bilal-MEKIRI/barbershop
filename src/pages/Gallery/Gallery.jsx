import { useEffect } from 'react';
import './Gallery.scss';

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="gallery-container" id="gallery-page">
      <img src="/assets/images/gallery_1.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_7.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_10.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_11.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_15.jpg" alt="man haircut" className="gallery-img" />

      <img src="/assets/images/gallery_2.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_6.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_8.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_5.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_4.jpg" alt="man haircut" className="gallery-img" />

      <img src="/assets/images/gallery_3.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_9.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_13.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_14.jpg" alt="man haircut" className="gallery-img" />
      <img src="/assets/images/gallery_12.jpg" alt="man haircut" className="gallery-img" />
    </main>
  );
}
