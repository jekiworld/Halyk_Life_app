import styles from './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import SubmitForm from './components/Submitforms/Submitforms';
import Login from './components/Login/Login';
import AdminPanelPage from './components/Adminpanel/Adminpanel';
import Testdoctor from './components/Testdoctor/Testdoctor';




export default function Home() {

  return (
    <Router>
      <div className="all">
        <Header />
        <Outlet />


        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/testdoctor/submit' element={<SubmitForm />} />
          <Route path='/adminpanel' element={<AdminPanelPage />} />
          <Route path='/testdoctor' element={<Testdoctor/>} />

        </Routes>
      </div>
    </Router>

  )
} 
