import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../pages/root';
import { AppRoutes } from '../utils/conts';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<Root />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
