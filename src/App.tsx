import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/layout/layout';

const Home = React.lazy(() => import('./routes/home'));
const Projects = React.lazy(() => import('./routes/projects'));

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Layout />}>
          {/* <Route
            path='/'
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          /> */}
          <Route
            path='/projects'
            element={
              <React.Suspense fallback={<>...</>}>
                <Projects />
              </React.Suspense>
            }
          />
          <Route
            path='*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
