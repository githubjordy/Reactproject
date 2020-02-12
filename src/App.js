import React,{useState} from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Sidedrawer from './components/Sidedrawer/Sidedrawer'
import Backdrop from './components/backdrop/Backdrop'
import HomePage from './Home/HomePage'
import Images from './Images/Images'
import {BrowserRouter as Router,Switch,Route} from'react-router-dom'

export const SidedrawerContext = React.createContext()
export const BackdropContext = React.createContext()
function App() {
 
  const backdropclickhandler=()=>{
    console.log("handler called")
    SetSidedraweropen(false);
  }

  const[Sidedraweropen, SetSidedraweropen] =useState(false);
  
  const DrawToggleClickHandler=()=>{
    console.log('executed');  
    SetSidedraweropen(previousstate=>{ 
      return {Sidedraweropen:!previousstate.Sidedraweropen}
    });
    
  } 

  
  let backdrop;
 
  if(Sidedraweropen.Sidedraweropen){
    console.log("backdropcalled")
    backdrop = <Backdrop />

  }


  return (
    <Router>
    <div style={{height:'100%'}}>
      <SidedrawerContext.Provider value={DrawToggleClickHandler}>
        <BackdropContext.Provider value={backdropclickhandler}>
       <Toolbar/>
        <Sidedrawer show={Sidedraweropen}/>
        {backdrop}
        </BackdropContext.Provider>
       </SidedrawerContext.Provider>
    
       <main style= {{marginTop:'56px'}}>
       
       
        <Switch>     
        <Route path='/' exact component={HomePage}/>
        <Route path='/Images' exact component={Images}/>
        </Switch>
       

       </main>
 
    

    </div>
    </Router>
  );
  
}

export default App;
