import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabinet from '../../pages/cabinet';
import Root from '../../pages/root';
import SignIn from '../../pages/sign-in';
import SignUp from '../../pages/signup';
import { AppRoutes } from '../../utils/conts';


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
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoutes.Cabinet}
          element={<Cabinet />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
