import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/MainLayout';
import { Homepage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuestionPage } from './pages/QuestionPage';
import { AddQuestionPageLazy } from './pages/AddQuestionPage';
import EditQuestionPageLazy from './pages/EditQuestionPage/EditQuestionPage.lazy';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/addquestion' element={<AddQuestionPageLazy />}></Route>
          <Route path='/question/:id' element={<QuestionPage/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
          <Route path='/editquestion/:id' element={<EditQuestionPageLazy />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
