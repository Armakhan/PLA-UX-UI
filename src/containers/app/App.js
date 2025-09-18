import React from 'react';
import StoreManagerRegistration from '../../components/StoreManagerRegistration/StoreManagerRegistration';
import OtpPage from '../../components/OtpPage/OtpPage';
import Generatenewchallange from '../../components/Createnewchallange/Createnewchallange';
import StoreManagerLogin from '../../components/StoreManagerLogin/StoreManagerLogin';
import StoreMangerHome from '../../components/StoreManagerHome/StoreHome';
import StoreMangerProfile from '../../components/StoreManagerProfile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnrollNow from '../../components/EnrollNow/EnrollPage';
import './App.css';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import MapContainer from '../../components/MapView/MapView';
import DashboardOverview from '../../components/DashboardOverview/DashboardOverview';

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<StoreManagerRegistration />} />
          <Route path="/otp/:email/:employeeId" element={<OtpPage />} />
          <Route path="/storemanagerlogin" element={<StoreManagerLogin />} />
          <Route exact path="/newmodal" element={<Generatenewchallange />} />
          <Route path="/enrollpage" element={<EnrollNow />} />
          <Route path="/storemanagerprofile" element={<StoreMangerProfile />} />
          <Route exact path="/storehome" element={<StoreMangerHome />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/mapview" element={<MapContainer />} />
          <Route path="/dashboard" element={<DashboardOverview />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
