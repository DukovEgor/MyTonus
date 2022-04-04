import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../pages/root';
import SignUp from '../pages/sign-up';
import { AppRoutes } from '../utils/conts';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Root />}
        />
        <Route
          path={AppRoutes.SignUp}
          element={<SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
