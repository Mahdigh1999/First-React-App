import {createContext , useState} from 'react';
import Navbar from './navbar/Navbar';
import MenuBar from './menubar/MenuBar';
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
      <Navbar />
      <MenuBar />


    </Theme.Provider>
    </>
  );
}

export default App;