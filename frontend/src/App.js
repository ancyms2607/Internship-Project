import './App.css';
import { ColorModeContext ,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/admin/elements/Dashboard';
import Sidebar from './components/admin/elements/Sidebar';
import Project from './components/admin/elements/Project';
import Main from './components/Main';
import AddTopic from './components/admin/elements/AddTopic';
import Mentors from './components/admin/elements/Mentors';
import MentForm from './components/admin/elements/MentForm';
import Common from './components/Common';
import MentDashboard from './components/mentor/elements/MentDashboard';
import MentTopic from './components/mentor/elements/MentTopic';
import ListTable from './components/mentor/elements/ListTable';
import Submissions from './components/mentor/elements/Submissions';
import Evaluations from './components/mentor/elements/Evaluations';
import Evaluate from './components/mentor/elements/Evaluate';
import Refmats from './components/mentor/elements/Refmats';
import AddRefmat from './components/mentor/elements/AddRefmat';
import PrivateRoute from './components/PrivateRoute';



function App() {
  const [theme,colorMode]=useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline/> */}
    <div className="app">
      
      <main className='content'>
        
      
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>


     <Route path='/dashadmin' element={<PrivateRoute Component={Dashboard}/>}/>
     <Route path='/topics' element={<Main child={<Project/>}/>}/>
     <Route path='/addtopic'element={<Main child={<AddTopic/>}/>}/>
     <Route path='/mentors' element={<Main child={<Mentors/>}/>} />
     <Route path='/mentform' element={<Main child={<MentForm/>}/>}/>


     <Route path='/dashment' element={<Common child={<MentDashboard/>}/>}/>
     <Route path='/menttopics' element={<Common child={<MentTopic/>}/>}/>

     <Route path='/table' element={<ListTable/>}/>
     
     <Route path='/mentsub'element={<Common child={<Submissions/>}/>}/>
     <Route path='/evals'element={<Common child={<Evaluations/>}/>}/>
     <Route path='/evaluate' element={<Common child={<Evaluate/>}/>}/>
     <Route path='/refmaterials' element={<Common child={<Refmats/>}/>}/>
     <Route path='/addrefers' element={<Common child={<AddRefmat/>}/>}/>
     
     
    


      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
