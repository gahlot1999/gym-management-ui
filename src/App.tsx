import { BrowserRouter, Route, Routes } from 'react-router';
import Profile from './components/Profile';
import Landing from './containers/landing/Landing';
import ProtectedRoute from './containers/misc/protectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route element={<ProtectedRoute />}>
          <Route path='profile' Component={Profile} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
