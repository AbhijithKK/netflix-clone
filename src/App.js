
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/navBar';
import RowPost from './Components/RowPost/RowPost';
import {action_url,API_KEY,BASE_URL} from './credentials/Credentials'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`} title='Netflix Origins'/>
     <RowPost url={action_url} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
