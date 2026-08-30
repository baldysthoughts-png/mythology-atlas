export function MesopotamiaHeroArt() {
  return (
    <>
      <img
        src="/hero-mesopotamia.png"
        alt="Reconstruction-inspired view of an ancient Mesopotamian city and monumental ziggurat"
        className="absolute inset-0 h-full w-full select-none"
        style={{
          objectFit: 'cover',
          objectPosition: 'center right',
          filter: 'saturate(0.9) contrast(1.05)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(10, 12, 18, 0.82) 0%, rgba(10, 12, 18, 0.58) 22%, rgba(10, 12, 18, 0.26) 42%, rgba(10, 12, 18, 0.08) 62%, rgba(10, 12, 18, 0) 100%)',
        }}
      />
    </>
  );
}
