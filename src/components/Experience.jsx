import React from "react";

const EXPERIENCES = [
    {
        date: 'Oct 2025 — Feb 2026',
        role: 'Frontend Developer',
        company: 'CodeFarm',
        companyUrl: 'https://codefarm.edu.vn',
        desc: [
            'Phát triển và bảo trì các dự án outsourcing sử dụng ReactJS và các thư viện UI hiện đại.',
            'Chuyển đổi Figma designs thành source code responsive, pixel-perfect, chất lượng cao.',
            'Phối hợp với Backend team tích hợp RESTful APIs và xử lý luồng dữ liệu phức tạp.',
            'Tối ưu performance ứng dụng, giảm đáng kể thời gian render và cải thiện UX.',
        ],
        tags: ['ReactJS', 'Tailwind CSS', 'Redux Toolkit', 'REST API', 'Figma'],
    },
    {
        date: 'May — Aug 2025',
        role: 'Automation Intern',
        company: 'Synnex FPT',
        companyUrl: 'https://synnexfpt.com',
        desc: [
            'Hoàn thành chương trình thực tập chuyên sâu về RPA với nền tảng akaBot.',
            'Phân tích quy trình nghiệp vụ thủ công và thiết kế script tự động hóa.',
            'Áp dụng logic lập trình để xử lý các tác vụ automation phức tạp trong môi trường doanh nghiệp.',
        ],
        tags: ['akaBot', 'RPA', 'Process Automation', 'Business Workflow'],
    },
]

function ExpCard({ date, role, company, companyUrl, desc, tags, dimmed, onMouseEnter, onMouseLeave }) {
    const [hovered, setHovered] = React.useState(false)

    return (
        <div
            onMouseEnter={() => { setHovered(true); onMouseEnter() }}
            onMouseLeave={() => { setHovered(false); onMouseLeave() }}
            style={{
                display: 'grid',
                gridTemplateColumns: '130px 1fr',
                gap: '20px',
                padding: '16px',
                borderRadius: '6px',
                marginBottom: '4px',
                transition: 'background 0.2s',
                background: hovered ? 'var(--light-navy)' : 'transparent',
                opacity: dimmed ? 0.4 : 1,
                cursor: 'default',
            }}
        >

            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--slate)',
                letterSpacing: '0.5px',
                paddingTop: '4px',
                lineHeight: 1.6,
            }}>
                {date}
            </div>

            {/* CỘT PHẢI: nội dung */}
            <div>
                {/* Tiêu đề */}
                <div style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    marginBottom: '8px',
                    lineHeight: 1.3,
                }}>

                    <span style={{
                        color: hovered ? 'var(--green)' : 'var(--lightest-slate)',
                        transition: 'color 0.2s',
                    }}>
                        {role}
                    </span>
                    <span style={{ color: 'var(--slate)', margin: '0 6px' }}>·</span>
                    <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: hovered ? 'var(--green)' : 'var(--lightest-slate)',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                    >
                        {company}
                        <span style={{ fontSize: '12px', marginLeft: '4px' }}>↗</span>
                    </a>
                </div>

                {/* Danh sách mô tả */}
                <ul style={{ padding: 0, margin: '0 0 12px 0' }}>
                    {desc.map((item, i) => (
                        <li
                            key={i}
                            style={{
                                listStyle: 'none',
                                display: 'flex',
                                gap: '8px',
                                color: 'var(--slate)',
                                fontSize: '14px',
                                lineHeight: 1.7,
                                marginBottom: '4px',
                            }}
                        >
                            <span style={{
                                color: 'var(--green)',
                                fontSize: '12px',
                                marginTop: '5px',
                                flexShrink: 0,
                            }}>
                                ▹
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tags.map(tag => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: 'var(--green)',
                                background: 'var(--green-tint)',
                                padding: '4px 12px',
                                borderRadius: '50px',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div >
    )
}

function Experience() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null)
    return (
        <section
            id="experience"
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
                    02.
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
                    Experience
                </h2>
                <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--lightest-navy)',
                }} />
            </div>
            <div>
                {EXPERIENCES.map((exp, i) => (
                    <ExpCard key={i} {...exp}
                        dimmed={hoveredIndex !== null && hoveredIndex !== i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>

            {/* Link CV */}
            <div style={{ marginTop: '24px', paddingLeft: '16px' }}>
                <a
                    href="/public/CV_Tran_Tuan_Vu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--lightest-slate)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        borderBottom: '1px solid transparent',
                        paddingBottom: '2px',
                        transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--green)'
                        e.currentTarget.style.borderBottomColor = 'var(--green)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--lightest-slate)'
                        e.currentTarget.style.borderBottomColor = 'transparent'
                    }}
                >
                    Xem toàn bộ Resume
                    <span style={{ fontSize: '14px' }}>↗</span>
                </a>
            </div>
        </section>
    )
}

export default Experience