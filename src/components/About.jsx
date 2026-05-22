const skills = [
    'ReactJS', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'Node.js', 'MySQL', 'MongoDB',
]

function About() {
    return (
        <section
            id="about"
            style={{ marginBottom: '100px', scrollMarginTop: '50px' }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
            }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--green)',
                    fontWeight: 500,
                }}>
                    01.
                </span>
                <h2 style={{
                    color: 'var(--lightest-slate)',
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    margin: 0,
                    whiteSpace: 'nowrap',
                }}>
                    About Me
                </h2>
                <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--lightest-navy)',
                }} />
            </div>
            <p style={{
                color: 'var(--slate)',
                fontSize: '16px',
                lineHeight: 1.8,
                marginBottom: '16px',
            }}>
                Tôi là một{' '}
                <span style={{ color: 'var(--lightest-slate)', fontWeight: 500 }}>
                    Frontend Developer
                </span>{' '}
                với hơn 1 năm kinh nghiệm thực chiến trong các môi trường
                phát triển phần mềm chuyên nghiệp. Tôi đam mê xây dựng
                những giao diện đẹp, chuẩn pixel và hiệu năng cao.
            </p>

            <p style={{
                color: 'var(--slate)',
                fontSize: '16px',
                lineHeight: 1.8,
                marginBottom: '16px',
            }}>
                Tôi thành thạo{' '}
                <span style={{ color: 'var(--green)' }}>ReactJS</span>,
                JavaScript và các công nghệ web hiện đại. Tôi đã làm việc
                thực tế tại{' '}
                <span style={{ color: 'var(--lightest-slate)' }}>CodeFarm</span>{' '}
                và thực tập RPA tại{' '}
                <span style={{ color: 'var(--lightest-slate)' }}>Synnex FPT</span>.
            </p>

            <p style={{
                color: 'var(--slate)',
                fontSize: '16px',
                lineHeight: 1.8,
                marginBottom: '32px',
            }}>
                Hiện tại tôi đang mở rộng sang{' '}
                <span style={{ color: 'var(--lightest-slate)', fontWeight: 500 }}>
                    Fullstack Development
                </span>{' '}
                với Node.js và Java. Ngoài giờ làm, tôi hay chơi cầu lông,
                khám phá AI và tham gia tình nguyện hướng dẫn khách quốc tế
                tại{' '}
                <span style={{ color: 'var(--green)' }}>VTour Club</span>.
            </p>

            {/* Skills grid */}
            <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(120px, 1fr))',
                gap: '8px',
                padding: 0,
                margin: 0,
            }}>
                {skills.map(skill => (
                    <li
                        key={skill}
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--slate)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                        }}
                    >
                        <span style={{ color: 'var(--green)', fontSize: '12px' }}>▹</span>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default About