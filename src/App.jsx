import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Tools from './pages/Tools';
import Jobs from './pages/Jobs';
import Mentoring from './pages/Mentoring';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tools" element={<Tools />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="mentoring" element={<Mentoring />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
