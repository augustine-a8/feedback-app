import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackProvider>
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutLinkIcon />
                  </>
                }
              />
              <Route path='/about' element={<About />} />
            </Routes>
          </Router>
        </FeedbackProvider>
      </div>
    </>
  );
}

export default App;
