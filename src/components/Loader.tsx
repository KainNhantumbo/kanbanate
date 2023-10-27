import { CSSProperties } from 'react';
import { DotLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

const styles: CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  fontWeight: '500',
  fontSize: '1.2rem',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  padding: 'calc(25% - 1px) 12px'
};

export default function Loader() {
  const theme = useTheme();
  return (
    <section style={{ ...styles }}>
      <h3>Loading... just a moment...</h3>
      <DotLoader
        color={`rgb(${theme.primary_a})`}
        cssOverride={{
          display: 'block',
          background: `rgb(${theme.background})`
        }}
      />
    </section>
  );
}