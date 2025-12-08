import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';

// Pages
import Home from './Home/Home';
import DJNights from './DJNights/DJNight';
import BirthdayCelebrations from './BirthdayCelebrations/BirthdayCelebration';
import MehandhiFunction from './MehandhiFunctions/MehandhiFunction';
import MarriageStage from './MarriageStages/MarriageStage';
import MangalaSnanam from './MangalaSnanams/MangalaSnanam';
import EventMembers from './EventMembers/EventMember';
import Contact from "./Contacts/Contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DJNights" element={<DJNights />} />
        <Route path="/BirthdayCelebrations" element={<BirthdayCelebrations />} />
        <Route path="/MehandhiFunction" element={<MehandhiFunction />} />
        <Route path="/MarriageStage" element={<MarriageStage />} />
        <Route path="/MangalaSnanam" element={<MangalaSnanam />} />
        <Route path='/EventMembers' element={<EventMembers />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
