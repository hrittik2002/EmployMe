import './App.css';
import HomePage from './pages/HomePage/HomePage';
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage';
import JobSearchPage from './pages/JobSearchPage/JobSearchPage';
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/search' element={<JobSearchPage/>} />
      <Route path='/search/:jobId' element={<JobDetailsPage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
