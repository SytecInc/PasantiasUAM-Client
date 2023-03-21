import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './utils/PrivateRoutes';
import {
  GeneralRoutes,
  AuthRoutes,
} from './config/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {GeneralRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path} 
              element={<route.layout><route.component/></route.layout>}
            ></Route>
          ))}
          <Route element={<PrivateRoutes />}>
            {AuthRoutes.map((route, index=GeneralRoutes.length) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.layout>
                    <route.component/>
                  </route.layout>
                }
              >
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
