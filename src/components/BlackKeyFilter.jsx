export default function BlackKeyFilter() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <filter id="black-key" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0.333 0.334 0.333 0 0"
            in="SourceGraphic"
            result="keyed"
          />
          <feComponentTransfer in="keyed" result="sharp">
            <feFuncA type="linear" slope="8" intercept="-0.25" />
          </feComponentTransfer>
          <feComposite in="sharp" in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="white-key" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              -0.333 -0.334 -0.333 0 1"
            in="SourceGraphic"
            result="keyed"
          />
          <feComponentTransfer in="keyed" result="sharp">
            <feFuncA type="linear" slope="8" intercept="-0.25" />
          </feComponentTransfer>
          <feComposite in="sharp" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
