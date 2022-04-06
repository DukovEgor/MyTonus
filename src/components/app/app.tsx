import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../../pages/root';
import StepOne from '../../pages/steps/step-one';
import StepTwo from '../../pages/steps/step-two';
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
        >
          <Route path='first' element={<StepOne />} />
          <Route path='second' element={<StepTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
