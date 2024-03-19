import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import JointFreelancerP from "./pages/JointFreelancerP";
import HomePage from "./pages/HomePage";
import JointFreelancerP1 from "./pages/JointFreelancerP1";
import JointFreelancerP2 from "./pages/JointFreelancerP2";
import JointFreelancerInterview from "./pages/JointFreelancerInterview";
import Login from "./pages/Login";
import LoginFreelancer from "./pages/LoginFreelancer";
import LoginRecruiter from "./pages/LoginRecruiter";
import LoginRecruiter1 from "./pages/LoginRecruiter1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/joint-freelancer-p2":
        title = "";
        metaDescription = "";
        break;
      case "/joint-freelancer-p3":
        title = "";
        metaDescription = "";
        break;
      case "/joint-freelancer-interview":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login-freelancer":
        title = "";
        metaDescription = "";
        break;
      case "/login-recruiter":
        title = "";
        metaDescription = "";
        break;
      case "/login-recruiter1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<JointFreelancerP />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/joint-freelancer-p2" element={<JointFreelancerP1 />} />
      <Route path="/joint-freelancer-p3" element={<JointFreelancerP2 />} />
      <Route
        path="/joint-freelancer-interview"
        element={<JointFreelancerInterview />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/login-freelancer" element={<LoginFreelancer />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/login-recruiter1" element={<LoginRecruiter1 />} />
    </Routes>
  );
}
export default App;
