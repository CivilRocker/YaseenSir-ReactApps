import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Todolist } from './Components/Todolist';
import {Counterapp} from "./Components/Counterapp"
import { Api } from './Components/Api';
import { Turnary } from './Components/Turnary';
import { Classcomponent } from './Components/Classcomponent';
import { Classtodo } from './Components/Classtodo';
import { StudentsList } from './Components/StudentsList';
import { StaffList } from './Components/StaffList';
import { AddStaff } from './Components/AddStaff';
import { EditSaff } from './Components/EditStaff';
import { AddStudent } from './Components/AddStudent';
import { EditStudent } from './Components/EditStudent';
import { Landing } from './Assignment/Landing';
import { Useref1 } from './UseRef/Useref1';
import { Usememo1 } from './UseMemo/Usememo1';






function App() {
  return (
    <div className="App">  
    {/* <StudentsList/> */}   
      
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>          
          <Route path='/todo' element={<Todolist/>}/>
          <Route path='/counterapp' element={<Counterapp/>}/>
          <Route path='/api' element={<Api/>} />
          <Route path='/turnary' element={< Turnary/>} />
          <Route path='/class' element={<Classcomponent/>}/>
          <Route path='/classtodo' element={<Classtodo/>}/> 
          <Route path='/students' element={<StudentsList/>}/> 
          <Route path='/staff' element={<StaffList/>}/> 
          <Route path="/addstaff" element={<AddStaff />}/>
          <Route path="/editstaff" element={< EditSaff/>}/> 
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/editstudent' element={<EditStudent/>}/>
          <Route path='/useref' element={<Useref1/>}/>
          <Route path="/usememo" element={<Usememo1/>} />
          <Route path='/' element={<Home/>}/>
        </Routes>    
      </BrowserRouter> */}
      <Landing/>
     
      
    </div>
  );
}

export default App;
