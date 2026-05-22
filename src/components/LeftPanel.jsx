import React from 'react'
import { Typography, Space } from 'antd'
import {
    FacebookOutlined,
    GithubOutlined,
    MailOutlined,
} from '@ant-design/icons'
import avatarImg from '../assets/avatar.jpg'

const { Title, Paragraph } = Typography

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
]

function NavItem({ label, href, isActive }) {
    const [hovered, setHovered] = React.useState(false)
    const highlighted = hovered || isActive

    return (
        <li style={{ listStyle: 'none', marginBottom: '4px' }}>

            <a
                href={href}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    color: highlighted ? 'var(--lightest-slate)' : 'var(--slate)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: highlighted ? 600 : 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    padding: '10px 0',
                    transition: 'color 0.25s',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span
                    style={{
                        display: 'block',
                        height: '1px',
                        flexShrink: 0,
                        width: highlighted ? '64px' : '32px',
                        background: highlighted ? 'var(--lightest-slate)' : 'var(--slate)',
                        transition: 'width 0.3s, background 0.3s',
                    }}
                />
                {label}
            </a>
        </li >
    )
}

function SocialIcon({ href, icon, external }) {
    const [hovered, setHovered] = React.useState(false)

    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            style={{
                fontSize: '20px',
                transition: 'color 0.2s, transform 0.2s',
                color: hovered ? 'var(--green)' : 'var(--slate)',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                display: 'inline-flex',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {icon}
        </a>
    )
}

function LeftPanel() {

    const [activeSection, setActiveSection] = React.useState('about')

    React.useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0,
            }
        )

        sections.forEach(s => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    return (
        <aside
            className="left-panel"
            style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                width: '340px',
                minWidth: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '100px 0',
            }}
        >
            <div>
                <div style={{
                    marginBottom: '24px',
                    position: 'relative',
                    display: 'inline-block',
                }}>
                    <img
                        src={avatarImg}
                        alt="Trần Tuấn Vũ"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            border: '2px solid var(--green)',
                            display: 'block',
                            filter: 'grayscale(20%)',
                            transition: 'filter 0.3s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                        onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(20%)'}
                    />
                    <span style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '4px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: 'var(--green)',
                        border: '2px solid var(--navy)',
                    }} />
                </div>

                <Title
                    level={1}
                    style={{
                        color: 'var(--lightest-slate)',
                        fontSize: '42px',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        margin: 0,
                    }}
                >
                    Trần Tuấn Vũ
                </Title>

                <Title
                    level={3}
                    style={{
                        color: 'var(--light-slate)',
                        fontSize: '20px',
                        fontWeight: 500,
                        marginTop: '12px',
                        marginBottom: 0,
                    }}
                >
                    Frontend Developer
                </Title>

                <Paragraph
                    style={{
                        color: 'var(--slate)',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        marginTop: '16px',
                        maxWidth: '280px',
                    }}
                >
                    Tôi xây dựng những trải nghiệm web
                    chuẩn pixel, hiệu năng cao và dễ tiếp cận.
                </Paragraph>

                <nav style={{ marginTop: '48px' }}>
                    <ul style={{ padding: 0, margin: 0 }}>
                        {NAV_ITEMS.map(item => (
                            <NavItem
                                key={item.href}
                                label={item.label}
                                href={item.href}
                                isActive={activeSection === item.href.replace('#', '')}
                            />
                        ))}
                    </ul>
                </nav>
            </div>

            <Space size={20}>
                <SocialIcon
                    href="https://github.com/VertaSport"
                    icon={<GithubOutlined />}
                    external={true}
                />
                <SocialIcon
                    href="https://www.facebook.com/trantuanvu2101"
                    icon={<FacebookOutlined />}
                    external={true}
                />
                <SocialIcon
                    href="mailto:2101trantuanvu@gmail.com"
                    icon={<MailOutlined />}
                    external={false}
                />
            </Space>
        </aside>
    )
}

export default LeftPanel