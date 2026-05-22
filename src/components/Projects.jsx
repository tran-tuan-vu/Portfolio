import React from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const PROJECTS = [
    {
        year: '2025',
        title: 'Verta Sport — E-commerce Platform',
        desc: 'Nền tảng thương mại điện tử thể thao full-featured với vai trò Team Leader trong nhóm 4 người. Thiết kế kiến trúc Client-Server, database schema, phát triển Shopping Cart, Secure Checkout và Admin Dashboard hoàn chỉnh.',
        tags: ['ReactJS', 'Bootstrap', 'RESTful API', 'MySQL'],
        github: 'https://github.com/VertaSport',
        live: null,
    },
]

function ProjectCard({ year, title, desc, tags, github, live, dimmed, onMouseEnter, onMouseLeave }) {
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
                transition: 'background 0.2s, opacity 0.2s',
                background: hovered ? 'var(--light-navy)' : 'transparent',
                opacity: dimmed ? 0.4 : 1,
                cursor: 'default',
            }}
        >
            {/* CỘT TRÁI: năm */}
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--slate)',
                paddingTop: '4px',
            }}>
                {year}
            </div>

            {/* CỘT PHẢI: nội dung */}
            <div>
                {/* Tiêu đề + icon links */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
                }}>
                    <span style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: hovered ? 'var(--green)' : 'var(--lightest-slate)',
                        transition: 'color 0.2s',
                    }}>
                        {title}
                    </span>

                    {/* Icon GitHub */}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{
                                color: 'var(--slate)',
                                fontSize: '16px',
                                display: 'inline-flex',
                                transition: 'color 0.2s, transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--green)'
                                e.currentTarget.style.transform = 'translate(2px, -2px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--slate)'
                                e.currentTarget.style.transform = 'translate(0, 0)'
                            }}
                        >
                            <GithubOutlined />
                        </a>
                    )}

                    {/* Icon live demo */}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{
                                color: 'var(--slate)',
                                fontSize: '16px',
                                display: 'inline-flex',
                                transition: 'color 0.2s, transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--green)'
                                e.currentTarget.style.transform = 'translate(2px, -2px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--slate)'
                                e.currentTarget.style.transform = 'translate(0, 0)'
                            }}
                        >
                            <LinkOutlined />
                        </a>
                    )}
                </div>

                {/* Mô tả */}
                <p style={{
                    color: 'var(--slate)',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    marginBottom: '12px',
                }}>
                    {desc}
                </p>

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

function Projects() {
    const [hoveredIndex, setHoveredIndex] = React.useState(null)

    return (
        <section
            id="projects"
            style={{ marginBottom: '100px', scrollMarginTop: '50px' }}
        >
            {/* Section heading */}
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
                    03.
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
                    Projects
                </h2>
                <div style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--lightest-navy)',
                }} />
            </div>

            {/* Cards */}
            <div>
                {PROJECTS.map((project, i) => (
                    <ProjectCard
                        key={i}
                        {...project}
                        dimmed={hoveredIndex !== null && hoveredIndex !== i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects