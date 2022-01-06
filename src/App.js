import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddTutorAds from './Pages/Teacher/AddTutorAds/AddTutorAds';
import TeacherHome from './Pages/Teacher/TeacherHome/TeacherHome';
import NewTeacherStatus from './Pages/Teacher/NewTeacherStatus/NewTeacherStatus';

import Header from './Pages/Student/Header/Header';
// import Home from './Pages/Banner/Home/Home';
import Home from './Pages/Student/Home/Home';
import About from './Pages/Student/About/About';
import Contact from './Pages/Student/Contact/Contact';
import Footer from './Pages/Student/Footer/Footer';
import Courses from './Pages/Student/Courses/Courses';
import Teach from './Pages/Student/Teach/Teach';
import NotFound from './Pages/Student/NotFound/NotFound';

import AddTutor from './Pages/Admin/AddTutor/AddTutor';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageTutor from './Pages/Admin/ManageTutor/ManageTutor';
import ManageTutorAds from './Pages/Admin/ManageTutorAds/ManageTutorAds';
import ManageTutorBooks from './Pages/Admin/ManageTutorBooks/ManageTutorBooks';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import MyOrder from './Pages/Student/MyOrder/MyOrder';
import MakeTeacher from './Pages/Admin/MakeTeacher/MakeTeacher';

import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import TeacherRoute from './Pages/Login/TeacherRoute/TeacherRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AllUsers from './Pages/Admin/AllUsers/AllUsers';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            {/* student */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/courses/:id" element={<PrivateRoute><Courses /></PrivateRoute>}></Route>
            {/* <Route path="/teach" element={<Teach />}></Route> */}
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/myOrder" element={<PrivateRoute><MyOrder /></PrivateRoute>}></Route>

            {/* Teacher */}
            <Route path="/add-techer-ads" element={<TeacherRoute><AddTutorAds /></TeacherRoute>}>
            </Route>
            <Route path="/teacher-dashboard" element={<TeacherRoute><TeacherHome /></TeacherRoute>}>
            </Route>
            <Route path="/post-pending" element={<TeacherRoute><NewTeacherStatus /></TeacherRoute>}>
            </Route>

            {/* Admin*/}
            <Route path="/" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              <Route exact path="/admin" element={<AdminRoute><AllUsers /></AdminRoute>}>
              </Route>
              <Route path={`admin/users`} element={<AdminRoute><AllUsers /></AdminRoute>}>
              </Route>
              <Route path={`admin/make-admin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
              </Route>
              <Route path={`admin/make-teacher`} element={<AdminRoute><MakeTeacher /></AdminRoute>}>
              </Route>
              <Route path={`admin/add-tutor`} element={<AdminRoute><AddTutor /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor`} element={<AdminRoute><ManageTutor /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor-ads`} element={<AdminRoute><ManageTutorAds /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor-books`} element={<AdminRoute><ManageTutorBooks /></AdminRoute>}>
              </Route>
            </Route>

            {/* autentication */}
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
