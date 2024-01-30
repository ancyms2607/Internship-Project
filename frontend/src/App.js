import './App.css';
import { ColorModeContext ,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/admin/elements/Dashboard';
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
import Addnewtopic from './components/admin/elements/Addnewtopic';
import Addnewmentor from './components/admin/elements/Addnewmentor';
import Valuation from './components/mentor/elements/Valuation';



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
     <Route path='/topics' element={<PrivateRoute Component={Project}/>}/>
     <Route path='/addtopic'element={<PrivateRoute Component={AddTopic}/>}/>
     <Route path='/addnewtopic' element={<PrivateRoute Component={Addnewtopic}/>}/>
     <Route path='/mentors' element={<PrivateRoute Component={Mentors}/>} />
     <Route path='/updatementor' element={<PrivateRoute Component={MentForm}/>}/>
     <Route path='/addnewmentor' element={<PrivateRoute Component={Addnewmentor}/>}/>


     <Route path='/dashment' element={<PrivateRoute Component={MentDashboard}/>}/>
     <Route path='/menttopics' element={<PrivateRoute Component={MentTopic}/>}/>

     <Route path='/table' element={<ListTable/>}/>
     
     <Route path='/mentsub'element={<PrivateRoute Component={Submissions}/>}/>
     <Route path='/evals'element={<PrivateRoute Component={Evaluations}/>}/>
     <Route path='/evaluate' element={<PrivateRoute Component={Evaluate}/>}/>
     <Route path='/valuation' element={<PrivateRoute Component={Valuation}/>}/>

     <Route path='/refmaterials' element={<PrivateRoute Component={Refmats}/>}/>
     <Route path='/addrefers' element={<PrivateRoute Component={AddRefmat}/>}/>
     
     
    


      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
