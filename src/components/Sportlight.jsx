import React from 'react'

function Spotlight() {
    const [pos, setPos] = React.useState({ x: 0, y: 0 })
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        // Chỉ bật trên desktop
        if (window.innerWidth < 1024) return

        const handleMove = e => {
            setPos({ x: e.clientX, y: e.clientY })
            setVisible(true)
        }

        const handleLeave = () => setVisible(false)

        window.addEventListener('mousemove', handleMove)
        window.addEventListener('mouseleave', handleLeave)
        return () => {
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 30,
                pointerEvents: 'none',
                transition: 'opacity 0.3s',
                opacity: visible ? 1 : 0,
                background: `radial-gradient(
          600px circle at ${pos.x}px ${pos.y}px,
          rgba(29, 78, 216, 0.12),
          transparent 80%
        )`,
            }}
        />
    )
}

export default Spotlight