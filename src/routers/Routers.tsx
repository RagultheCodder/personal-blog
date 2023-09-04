import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../error-page';
import HomePage from '../pages/home/HomePage';
import PatientIndex from '../pages/patient/PatientIndex';
import Header from '../components/Header';
import PatientList from '../pages/patientList/PatientList';
import { PatientContextProvider } from '../context/PatientContext';

const Routers = () => {
  return (
    <BrowserRouter>
      <PatientContextProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/patient/create" element={<PatientIndex />} />
            <Route path="/patient/edit/:id" element={<PatientIndex />} />
            <Route path="/patients" element={<PatientList />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PatientContextProvider>
    </BrowserRouter>
  );
};

export default Routers;
