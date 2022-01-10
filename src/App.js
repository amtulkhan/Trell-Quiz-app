import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './Components/QuestionsPage/Questions';

function App() {
  return (
    <div className="App">

      {/* <LandingPage /> */}
      <Questions/>

    </div>
  );
}

export default App;
