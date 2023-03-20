import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  GeneralRoutes,
  AuthRoutes,
} from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {GeneralRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path} 
            element={<route.layout><route.component/></route.layout>}
          ></Route>
        ))}
        {AuthRoutes.map((route, index=GeneralRoutes.length) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout><route.component/></route.layout>
            }
          >
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
