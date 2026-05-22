import { Layout } from 'antd'
import LeftPanel from './components/LeftPanel'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Spotlight from './components/Sportlight'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Spotlight />
      <Content>
        <div
          className="app-container"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            gap: '60px',
            minHeight: '100vh',
          }}
        >
          <LeftPanel />
          <main
            className="right-panel"
            style={{ flex: 1, padding: '100px 0 200px' }}
          >
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
        <Footer />
      </Content>
    </Layout>
  )
}

export default App