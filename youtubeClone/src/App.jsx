import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import VideosPage from './pages/VideosPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="videos/:id" element={<VideosPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
