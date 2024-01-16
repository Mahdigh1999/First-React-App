import {createContext , useState} from 'react';
import { Routes , Route } from 'react-router-dom';
// import Header from './Header';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import MainPage from './components/MainPage';
import "./styles/App.css"
// import RegularBtn from './common/RegularBtn';
// import Toggle from './common/Toggle';
interface Theme{
  isDark:boolean;
  handleDarkMood:()=>void
};
export const Theme = createContext<Theme>({isDark:false , handleDarkMood:() => ''})

const handleBodyStyle = (isDark:boolean):void => {
  document.body.className = isDark ? "bg-slate-950 text-gray-100" :" text-gary-950 bg-gray-100"

}


function App() {
  const [isDark , setIsDark] = useState(true  )

  const handleDarkMood = () => {
    setIsDark(isDark => !isDark)
  }
  handleBodyStyle(isDark);

  return (
    <>
    <Theme.Provider value={{isDark , handleDarkMood}}>
      <Routes>
        <Route path='/login' element = {<LoginPage />}/>
        <Route path='/register' element = {<RegisterPage />}/>
        
      </Routes>
      <MainPage />
      {/* <LoginPage /> */}
      {/* <RegisterPage/> */}


    </Theme.Provider>
    </>
  );
}

export default App;