import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Context
import { ChangePageProvider } from './Context/useChangePageContext';
//Pages
import NavPage from './Nav/NavPage';
import FooterPage from './Footer/FooterPage';
import MainPage from './Content/MainPage';
import PortfolioPage from './Content/PortfolioPage';
import SkillsPage from './Content/SkillsPage';
import ExperiencePage from './Content/ExperiencePage';
import LinksPage from './Content/LinksPage';
import ContactPage from './Content/ContactPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <ChangePageProvider>
          {<NavPage />}
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/links' element={<LinksPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          {<FooterPage />}
        </ChangePageProvider>
      </Router>
    </>
  )
}

export default App
