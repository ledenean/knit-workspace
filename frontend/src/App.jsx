import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Patterns } from './pages/Patterns';
import { Projects } from './pages/Projects';
import { Upcoming } from './pages/Upcoming';
import { Layout } from './components/Layout';

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/patterns" element={<Patterns/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/upcoming" element={<Upcoming/>}/>
        </Route>
      </Routes>
    </Router>

  );
};
export default App;