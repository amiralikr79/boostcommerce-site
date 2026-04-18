import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Boost Commerce Group — Permanent capital. Focused businesses.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #141312 0%, #1a1916 45%, #1e3d32 100%)',
          color: '#f7f6f2',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10b981 0%, #22d3ee 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#04120d',
              fontSize: '30px',
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: '22px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8a8885',
              fontFamily: 'monospace',
            }}
          >
            Boost Commerce Group
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: '88px',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              color: '#f7f6f2',
              maxWidth: '980px',
            }}
          >
            Permanent capital.
          </div>
          <div
            style={{
              fontSize: '88px',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              color: '#5a9e88',
              maxWidth: '980px',
            }}
          >
            Focused businesses.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '22px',
            color: '#8a8885',
            fontFamily: 'monospace',
          }}
        >
          <div>British Columbia &middot; Est 2025</div>
          <div>boostcommerce.ca</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
