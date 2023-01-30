import './App.css';
import Compprofile from './Profile/Compprofile';
import picture from "./picture.jpg";
function App() {
  const fullName="Abdelli Rania";
  const bio="Agée 29 ans, douée par le domaine d'IT et d'agriculture."
  const profession="Ingénieur Electronique à la recherche d'emploi"
  const object={backgroundColor:"#32CECE"}
  const handleName=()=>{
    alert(fullName)
  }
  //<img src="/picture.jpg" className='profile-photo'/>
  //const pic=img
  return (
    <div className="App">
      <Compprofile fullName={fullName} bio={bio} profession={profession} style={object} handleName={handleName}/>
      <img src={picture} width="200"/>
    </div>
  );
}

export default App;
