import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../error-page';
import HomePage from '../pages/home/HomePage';
import PatientIndex from '../pages/patient/PatientIndex';
import Header from '../components/Header';
import Students from '../pages/patient/Students';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/patient-onboard/:id?" element={<PatientIndex />} />
          <Route path="/students" element={<Students />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
