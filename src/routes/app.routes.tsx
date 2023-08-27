import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Detail } from '../components/detail/detail';

const PagHome = lazy(() => import('../pages/home/home.page'));
const PagForm = lazy(() => import('../pages/form/form.page'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<PagHome></PagHome>}></Route>
        <Route path="/home" element={<PagHome></PagHome>}></Route>
        <Route path="/form" element={<PagForm></PagForm>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </Suspense>
  );
};
