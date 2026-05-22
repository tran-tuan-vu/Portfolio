function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 20px 60px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--slate)',
            lineHeight: 2,
            borderTop: '1px solid var(--lightest-navy)',
            marginTop: '40px',
        }}>
            <p style={{
                color: 'var(--lightest-slate)',
                fontWeight: 500,
                fontSize: '13px',
            }}>
                Trần Tuấn Vũ
            </p>

            <p style={{ marginTop: '4px' }}>
                Được thiết kế sơ lược trên Figma và lập trình bằng Visual Studio Code bởi chính tôi.
            </p>

            <a
                href="mailto:2101trantuanvu@gmail.com"
                style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    color: 'var(--slate)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}
            >
                2101trantuanvu@gmail.com
            </a>

        </footer >
    )
}

export default Footer