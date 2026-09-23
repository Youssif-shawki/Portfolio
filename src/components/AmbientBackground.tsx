export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div
        className="ambient-orb"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          left: '-100px',
          background: 'var(--ambient-1)',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: '400px',
          height: '400px',
          top: '30%',
          right: '-150px',
          background: 'var(--ambient-2)',
          animationDelay: '2s',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: '350px',
          height: '350px',
          bottom: '10%',
          left: '20%',
          background: 'var(--ambient-3)',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}
