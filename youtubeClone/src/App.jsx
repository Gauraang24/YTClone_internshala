import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import VideosPage from './pages/VideosPage';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="videos" element={<VideosPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
