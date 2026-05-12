import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/MainLayout';
import { Homepage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuestionPage } from './pages/QuestionPage';
import { AddQuestionPageLazy } from './pages/AddQuestionPage';
import EditQuestionPageLazy from './pages/EditQuestionPage/EditQuestionPage.lazy';
import { AuthProvider } from './auth/AuthProvider';
import { useAuth } from './hooks/useAuth';
import { ForbiddenPage } from './pages/ForbiddenPage';

function App() {

  const ProtectedRoutes = () => {
    const {isAuth} = useAuth();
    const location = useLocation();

    return isAuth ? <Outlet /> : <Navigate to="/forbidden" state={{from: location.pathname}} replace />; //атрибут replace очищает из истории ту страницу которая была до forbidden.
  }

  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/question/:id' element={<QuestionPage/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
          <Route path='/forbidden' element={<ForbiddenPage />}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path='/addquestion' element={<AddQuestionPageLazy />}></Route>
            <Route path='/editquestion/:id' element={<EditQuestionPageLazy />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  )
}

export default App
