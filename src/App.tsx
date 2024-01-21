import { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import MainPage from "./components/MainPage";
import "./styles/App.css";
// import Header from './Header';
// import RegularBtn from './common/RegularBtn';
// import Toggle from './common/Toggle';
interface Theme {
  isDark: boolean;
  handleDarkMood: () => void;
}
interface Search {
  seacrhValue: string;
  handleSearchChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Theme = createContext<Theme>({
  isDark: false,
  handleDarkMood: () => "",
});

const Search = createContext<Search>({
  seacrhValue: "",
  handleSearchChange: (value: React.ChangeEvent<HTMLInputElement>) => value,
});
const Page = createContext({
  currentPage: 1,
  handlePage: (value: number) => {},
});

const handleBodyStyle = (isDark: boolean): void => {
  document.body.className = isDark
    ? "bg-slate-950 text-gray-100"
    : " text-gary-950 bg-gray-100";
};
export const useSearch = () => {
  return useContext(Search);
};
export const useTheme = () => {
  return useContext(Theme);
};
export const usePage = () => {
  return useContext(Page);
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const [seacrhValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleDarkMood = () => {
    setIsDark((isDark) => !isDark);
  };
  const handleSearchChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearchValue(value.target.value);
  };
  const handlePage = (page: number) => {
    setCurrentPage(page);
  };
  handleBodyStyle(isDark);

  return (
    <>
      <Search.Provider value={{ seacrhValue, handleSearchChange }}>
        <Theme.Provider value={{ isDark, handleDarkMood }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/*"
              element={
                <Page.Provider value={{ currentPage, handlePage }}>
                  <MainPage />
                </Page.Provider>
              }
            ></Route>
          </Routes>

          {/* <LoginPage /> */}
          {/* <RegisterPage/> */}
        </Theme.Provider>
      </Search.Provider>
    </>
  );
}

export default App;
