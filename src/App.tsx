import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PostYourJob from "./pages/PostYourJob";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LoginFreelancer from "./pages/LoginFreelancer";
import LoginRecruiter from "./pages/LoginRecruiter";
import LoginRecruiter1 from "./pages/LoginRecruiter1";
import PortfolioFreelancer from "./pages/PortfolioFreelancer";
import PageDiscussions from "./pages/PageDiscussions";
import Dashboard from "./pages/Dashboard";
import Frame from "./pages/Frame";
import RecruiterInterview from "./pages/RecruiterInterview";
import JointFreelancerP from "./pages/JointFreelancerP";
import JointFreelancerP2 from "./pages/JointFreelancerP2";
import JointFreelancerInterview from "./pages/JointFreelancerInterview";
import JointFreelancerP1 from "./pages/JointFreelancerP1";

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
      case "/portfolio-freelancer":
        title = "";
        metaDescription = "";
        break;
      case "/page-discussions":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/recruiter-interview":
        title = "";
        metaDescription = "";
        break;
      case "/joint-freelancer-p1":
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
      case "/joint-freelancer-p2":
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
      <Route path="/" element={<PostYourJob />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-freelancer" element={<LoginFreelancer />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/login-recruiter1" element={<LoginRecruiter1 />} />
      <Route path="/portfolio-freelancer" element={<PortfolioFreelancer />} />
      <Route path="/page-discussions" element={<PageDiscussions />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/frame-6" element={<Frame />} />
      <Route path="/recruiter-interview" element={<RecruiterInterview />} />
      <Route path="/joint-freelancer-p1" element={<JointFreelancerP />} />
      <Route path="/joint-freelancer-p3" element={<JointFreelancerP2 />} />
      <Route
        path="/joint-freelancer-interview"
        element={<JointFreelancerInterview />}
      />
      <Route path="/joint-freelancer-p2" element={<JointFreelancerP1 />} />
    </Routes>
  );
}
export default App;
