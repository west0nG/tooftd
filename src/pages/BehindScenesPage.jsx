import './BehindScenesPage.css';

const R = '/images/behind-scenes/raster';
const S = '/images/behind-scenes/svg';

const moundBoard = { w: 1150, h: 815.449 };
const layerBoard = { w: 652, h: 291 };

function sx(board, px) {
  return `${(px / board.w) * 100}%`;
}

function sy(board, px) {
  return `${(px / board.h) * 100}%`;
}

function MoundDiagram() {
  const B = moundBoard;
  const p = (l, t, wi, he) => ({
    position: 'absolute',
    left: sx(B, l),
    top: sy(B, t),
    width: sx(B, wi),
    height: sy(B, he),
  });

  return (
    <div className="behind-scenes__diagram behind-scenes__diagram--mound">
      <div className="behind-scenes__board" style={{ '--bw': `${B.w}`, '--bh': `${B.h}` }}>
        <div className="behind-scenes__board-stage" aria-hidden="true">
          <Svg p={p(278.07, 356.08, 525.319, 171.55)} src={`${S}/bf4426d3d8df719067a8e045d937a28ca35ee5fd.svg`} />
          <Svg p={p(275.57, 528.43, 554.593, 1.736)} src={`${S}/b2897bdc2038d6959683b54fb49c30f71ae400d1.svg`} />
          <Svg p={p(801.55, 515.33, 28.754, 10.173)} src={`${S}/027a94a379b563a9686c81c19011b32b626ca8b8.svg`} />
          <Svg p={p(484.91, 465.19, 3.928, 4.515)} src={`${S}/cb9d948772c8d96304cba75ad88c66aa9c5eaeca.svg`} />
          <Svg p={p(551.61, 418.54, 6.248, 3.246)} src={`${S}/5d85794526962634eb3fb15ed44a4afc488b3297.svg`} />
          <Svg p={p(616.57, 470.66, 5.97, 5.58)} src={`${S}/48d5dd9acae24bc702c2d89ee47dcfa5a32dbd6d.svg`} />
          <Svg p={p(625.85, 427.47, 3.45, 5.234)} src={`${S}/d14dcd70a89e1d73204faa1008a25948dc620e2e.svg`} />
          <Svg p={p(465.55, 411.07, 9.422, 4.422)} src={`${S}/89d978b6d55533b309f0a116afc1e7c183e6e519.svg`} />
          <Svg p={p(410.31, 476.91, 2.634, 2.905)} src={`${S}/18fc20f28562836f370db92f6b2cf11503971045.svg`} />
          <Svg p={p(370.18, 491.13, 7.304, 6.761)} src={`${S}/a07281579f119a8219d39df337a849d93992bc7a.svg`} />
          <Svg p={p(540.19, 493.96, 6.025, 4.809)} src={`${S}/7877c02b0cc9ad5370cac7e6cc158fca4662e833.svg`} />
          <Svg p={p(529.4, 374.13, 4.191, 3.859)} src={`${S}/60ce059e56abb5cc77f44ba006e39f24250867be.svg`} />
          <Svg p={p(696.18, 492.13, 4.837, 5.718)} src={`${S}/6c5b35bfc5772b9c93c0856ff75234b7dd426b24.svg`} />
          <Svg p={p(190.3, 324.13, 419.916, 207.354)} src={`${S}/cc6acd60e570d7945c77fde410207e409a27a94c.svg`} />
          <Svg p={p(612.38, 345.02, 302.347, 178.221)} src={`${S}/9c126a68cd9bec96d8261450807e1fdbcd8b46d5.svg`} />
          <Svg p={p(187.78, 518.64, 81.647, 25.753)} src={`${S}/a86672e6fd7c203a45492088a780357e74b4b8d6.svg`} />
          <Svg p={p(270.21, 491.65, 63.115, 28.758)} src={`${S}/775273f5fe7356b4d2c2dc4ecca9fc560bb1aa15.svg`} />
          <Svg p={p(815.95, 521.49, 113.7, 15.525)} src={`${S}/4c938c1a1d4ec041ae7d871dc7170132743909fc.svg`} />
          <Svg p={p(319.74, 542.1, 195.767, 11.977)} src={`${S}/87db4fe9103e31ca0be4885f0b522813c6efbaa4.svg`} />
          <Svg p={p(605.12, 535.22, 195.358, 12.781)} src={`${S}/2cf3f9c45f0137b4c2648b1154677f43ec6bdff2.svg`} />
          <Svg p={p(81.01, 295.03, 55.692, 262.574)} src={`${S}/9d167ab63887fb01fe1f87b6e942903476d312e9.svg`} />
          <Svg p={p(77.42, 588.98, 28.752, 80.926)} src={`${S}/36209756e6b63d41e8579f43aa3c5340795b4fd2.svg`} />
          <Svg p={p(193.76, 607.55, 329.319, 38.889)} src={`${S}/df48f2293592e084f14296c5bd87a9fc365be689.svg`} />

          <div style={p(534.9, 554.84, 472.76, 121.746)} className="behind-scenes__tilt-slot">
            <img alt="" src={`${S}/73aa443722567accf79c3edc943ee4862aca92af.svg`} className="behind-scenes__tilt-img" />
          </div>

          <Svg p={p(1007.94, 617.55, 120.176, 27.78)} src={`${S}/6e63fd3ee5dc2d9fa96a0fafc038d639a119ec27.svg`} />
          <Svg p={p(136.82, 613.07, 56.501, 36.67)} src={`${S}/5bbffdf7b484b48658a0bccf09def0d710e98402.svg`} />
          <Svg p={p(139.49, 660.96, 970.353, 0.01)} src={`${S}/01c86aab6e886bcd9109ac236d07dd9237a06653.svg`} />
          <Svg p={p(523.47, 627.97, 12.221, 11.704)} src={`${S}/64f030d944bec2375fc429369a7f4fbcfb1048c8.svg`} />
          <Svg p={p(135.08, 660.9, 6.105, 20.083)} src={`${S}/daeb5e3cceb205a4a7abe7311f0c9293522d1501.svg`} />
          <Svg p={p(137.55, 676.7, 981.672, 0.01)} src={`${S}/d715297057047b2920991530b71e0e2a3875b129.svg`} />
          <Svg p={p(1111.26, 661.15, 5.932, 12.953)} src={`${S}/017931e0935249254b97c92f02e8529299a53209.svg`} />
          <Svg p={p(151.55, 685.71, 132.739, 5.505)} src={`${S}/f40639ce19ca53d63f7ad3735a1997317d572d2c.svg`} />
          <Svg p={p(496.43, 685.54, 109.584, 13.385)} src={`${S}/c0014a8dbbbe7ad9d24106e18f44ee21d28bdc59.svg`} />
          <Svg p={p(853.38, 683.46, 211.394, 7.107)} src={`${S}/40fec3eef293bf3a489db082d1c0066ccd2aca92.svg`} />
          <Svg p={p(939.04, 302.16, 27.25, 271.63)} src={`${S}/c56f6ee407f872172680861b33bb5ced62a40542.svg`} />
          <Svg p={p(942.84, 307.5, 99.695, 267.496)} src={`${S}/b7a0c62a37042e0d66e57d5a027580d9c0397808.svg`} />
          <Svg p={p(893.26, 54.93, 252.643, 247.268)} src={`${S}/2b58be5ece553950e2af0718f3cc945a421ec81c.svg`} />
          <Svg p={p(926.21, 74.26, 140.549, 69.858)} src={`${S}/78a28fe9214131aa17f37c4a1e61360ddd2e94a7.svg`} />
          <Svg p={p(925.67, 132.76, 130.794, 36.48)} src={`${S}/49f9e468a7d46bf9466ab01fd388c70d4de754f5.svg`} />
          <Svg p={p(1036.69, 120.43, 42.247, 14.481)} src={`${S}/b456313b1de4c9da98dbbb9b8f90e1fd7667165d.svg`} />
          <Svg p={p(1032.31, 115.52, 74.023, 45.251)} src={`${S}/bae9974af4f12800779517eeae73ffea8bdfbb83.svg`} />
          <Svg p={p(1033.67, 159.32, 101.429, 2.144)} src={`${S}/a270148c8e024890561ceddf398a74d4766e667a.svg`} />
          <Svg p={p(934.87, 155.5, 114.822, 29.364)} src={`${S}/d68214e13c8795d8b9edb1672bf6298a46e11328.svg`} />
          <Svg p={p(1048.94, 169.19, 91.655, 13.826)} src={`${S}/189cd3545b3f7f09d5a1bf83be665afe142a5a2e.svg`} />
          <Svg p={p(905.63, 165.32, 28.155, 17.483)} src={`${S}/5eaab84a24a0303c0e58e41e2b63d4927c018c65.svg`} />
          <Svg p={p(209.88, 559.22, 85.46, 30.56)} src={`${S}/4496c464c87693d2788d831bc4284604dde681a1.svg`} />
          <Svg p={p(815.23, 562.46, 86.663, 30.427)} src={`${S}/e6ca41ee6f549bead6673f4bee86bd601892a496.svg`} />
        </div>

        <div style={p(33.2, 379.6, 32, 168)} className="behind-scenes__side-slot">
          <p className="behind-scenes__side-label">Mound Structure</p>
        </div>
        <div style={p(33.2, 582.73, 32, 123)} className="behind-scenes__side-slot">
          <p className="behind-scenes__side-label">Base Carpet</p>
        </div>
        <p
          className="behind-scenes__bubble-copy"
          style={{ left: sx(B, 1020.39), top: sy(B, 194.69) }}
        >
          Base Carpet; seamless
          <br />
          connection between top
          <br />
          and bottom due to material
          <br />
          interlocking
        </p>
        <p
          className="behind-scenes__shape-copy"
          style={{ left: sx(B, 228.5), top: sy(B, 377.45) }}
        >
          Shape distributes weight &amp; friction easily so mound doesn’t move
        </p>
      </div>
    </div>
  );
}

function Svg({ src, p }) {
  return (
    <div className="behind-scenes__svg-wrap" style={p}>
      <img src={src} alt="" className="behind-scenes__svg-img" draggable={false} />
    </div>
  );
}

function LayerDiagram() {
  const B = layerBoard;
  const p = (l, t, wi, he) => ({
    position: 'absolute',
    left: sx(B, l),
    top: sy(B, t),
    width: sx(B, wi),
    height: sy(B, he),
  });

  return (
    <div className="behind-scenes__diagram behind-scenes__diagram--layers">
      <div className="behind-scenes__board" style={{ '--bw': `${B.w}`, '--bh': `${B.h}` }}>
        <div className="behind-scenes__board-stage" aria-hidden="true">
          <Svg p={p(230.73, 18.11, 392.351, 126.398)} src={`${S}/24b5a2cf4c35500cbb19d79a5cb25fc7689b5c16.svg`} />
          <Svg p={p(234.78, 97.12, 407.981, 55.809)} src={`${S}/c230200f964531cbbc6706af13705375f2499f18.svg`} />
          <Svg p={p(230.49, 169.36, 409.917, 0.5)} src={`${S}/539e1d5373a4331e9984a9e52ab5ccb6d531b4e8.svg`} />
          <Svg p={p(231.29, 170.11, 1.064, 29.238)} src={`${S}/e616e62fb074405e08e88f87b18dafe0791d809b.svg`} />
          <Svg p={p(232.36, 199.35, 409.997, 0.5)} src={`${S}/2188e0a6f490acaed9d56338871953371ba28acb.svg`} />
          <Svg p={p(644.34, 170.89, 0.5, 27.227)} src={`${S}/296176d92d2872eb2c4f7f60b3ead0c113682e36.svg`} />
          <Svg p={p(238.77, 201.91, 379.758, 12.336)} src={`${S}/dfef2e8870a66e0cf99f149a48e011d8962b9656.svg`} />
          <Svg p={p(613.38, 174.18, 0.094, 1.67)} src={`${S}/be1bac9f0d6acaa3da10ad7a0d5f5d415847cc56.svg`} />
          <Svg p={p(578.35, 180.29, 7.222, 0.216)} src={`${S}/a1535d65a415e21c7d08a7f9015c493b8a3751ad.svg`} />
          <Svg p={p(536.62, 173.65, 1.204, 0.751)} src={`${S}/995f63fe886045dbceac093e41e5b56eeb6f3656.svg`} />
          <Svg p={p(553.71, 177.75, 4.7, 4.001)} src={`${S}/ba895f909c906eb2a408afd8452db8286146ac1d.svg`} />
          <Svg p={p(523.51, 180.39, 5.373, 4.884)} src={`${S}/79838477fc47c185918e71c7afc9afbb4c787a72.svg`} />
          <Svg p={p(497.51, 178.06, 1.037, 3.844)} src={`${S}/e8c99641a601d33cae0b2de6da88a8406f5ba1a0.svg`} />
          <Svg p={p(470.83, 178.06, 4.434, 2.759)} src={`${S}/0d23a557b868b112b0c421e997d026b309054062.svg`} />
          <Svg p={p(432.53, 178.5, 4.818, 5.42)} src={`${S}/f742fb4628466125464e094f6f799296e38cf4ca.svg`} />
          <Svg p={p(386.27, 176.29, 14.603, 0.192)} src={`${S}/222736d4c08e525e951c59eaaefc7eaa4755d698.svg`} />
          <Svg p={p(355.4, 178.25, 0.324, 1.113)} src={`${S}/a43dc4393471de553b26937aa31bde3f0e78e920.svg`} />
          <Svg p={p(320.23, 174.61, 2.411, 7.401)} src={`${S}/1470516b03b1c33eee92f48a140094f57138ed0c.svg`} />
          <Svg p={p(282.01, 180.66, 0.884, 0.595)} src={`${S}/db9a9a90490e520ba7a632938cfa003541ebef85.svg`} />
          <Svg p={p(253.59, 183.82, 0.115, 6.978)} src={`${S}/85cac8f89449674f9ace8cc199e54e10640ee1b5.svg`} />
        </div>
        <p className="behind-scenes__layer-copy" style={p(36.67, 91.75, 320, 24)}>
          Top layer: Shaggy Carpet
        </p>
        <p className="behind-scenes__layer-copy" style={p(27, 169.1, 220, 24)}>
          Middle layer: Foam/Cushion
        </p>
        <p className="behind-scenes__layer-copy" style={p(31.83, 202.94, 220, 44)}>
          Bottom Layer: Rubber/Grip
        </p>
      </div>
    </div>
  );
}

export default function BehindScenesPage() {
  return (
    <div className="page behind-scenes-page">
      <section className="section page-hero behind-scenes__hero" aria-labelledby="behind-scenes-title">
        <div className="page-hero__inner">
          <p className="eyebrow">Process</p>
          <h1 id="behind-scenes-title" className="page-hero__title h-display">
            Behind the scenes
          </h1>
        </div>
      </section>

      <section className="behind-scenes__gallery">
        <div className="behind-scenes__inner">
          <figure className="behind-scenes__figure behind-scenes__figure--wide">
            <img src={`${R}/artwork-29.jpg`} alt="Early concept sketches exploring mound forms on a perspective grid." />
          </figure>
          <figure className="behind-scenes__figure behind-scenes__figure--wide" aria-hidden="true">
            <img src={`${R}/artwork-29.jpg`} alt="" />
          </figure>
          <figure className="behind-scenes__figure">
            <img src={`${R}/artwork-3.jpg`} alt="Green marker studies of organic mound silhouettes alongside wireframe thumbnails." />
          </figure>
          <figure className="behind-scenes__figure">
            <img src={`${R}/artwork-31.jpg`} alt="Ink drawing of clustered bubble volumes with green tonal accents." />
          </figure>
          <figure className="behind-scenes__figure behind-scenes__figure--landscape">
            <img src={`${R}/artwork-5.jpg`} alt="Large perspective line rendering of modular mounds arranged on the ground plane." />
          </figure>

          <div className="behind-scenes__row behind-scenes__row--triple">
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/img-3318.jpg`} alt="Studio photograph of sketches pinned beside small green massing models." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/image-29.jpg`} alt="Printed diagram showing grid logic and mound placement cues." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/image-26.jpg`} alt="Poster-style layout exploring scale and stacking of soft forms." />
            </figure>
          </div>

          <div className="behind-scenes__row behind-scenes__row--triple">
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/artwork-33.jpg`} alt="Annotated axonometric with green highlights guiding circulation." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/artwork-34.jpg`} alt="Plan-like grid study with clustered organic footprints." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/artwork-35.jpg`} alt="Perspective sketch emphasizing texture direction on mound surfaces." />
            </figure>
          </div>

          <figure className="behind-scenes__figure">
            <img src={`${R}/photo-20260307.jpg`} alt="Hands-on prototyping session photographing physical mockups." />
          </figure>

          <figure className="behind-scenes__figure behind-scenes__figure--diagram">
            <figcaption className="visually-hidden">Cross-section diagrams explaining mound stability and carpet interlock.</figcaption>
            <MoundDiagram />
          </figure>

          <figure className="behind-scenes__figure behind-scenes__figure--diagram">
            <figcaption className="visually-hidden">Exploded layering diagram for carpet, cushion, and rubber base.</figcaption>
            <LayerDiagram />
          </figure>

          <figure className="behind-scenes__figure">
            <img src={`${R}/artwork-5b.jpg`} alt="Full-scene tonal render portraying sculpted turf volumes from above." />
          </figure>

          <div className="behind-scenes__row behind-scenes__row--triple behind-scenes__row--tall">
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/img-6966.jpg`} alt="Close-up photographs of tactile green prototypes under warm lighting." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/img-6963.jpg`} alt="Angled tabletop view of a tufted moss-green prototype mound." />
            </figure>
            <figure className="behind-scenes__figure behind-scenes__figure--grow">
              <img src={`${R}/img-6962.jpg`} alt="Closer detail of sculpted green surfacing highlighting seam transitions." />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
