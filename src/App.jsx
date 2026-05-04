import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/MainLayout';
import { Homepage } from './pages/HomePage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/forbidden' element={<div>Page Not Found 404</div>}></Route>
          <Route path='/addquestion' element={<div>Add Question</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
