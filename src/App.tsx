import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JointFreelancerP from "./pages/JointFreelancerP";
import JointFreelancerP1 from "./pages/JointFreelancerP1";
import JointFreelancerP2 from "./pages/JointFreelancerP2";
import JointFreelancerInterview from "./pages/JointFreelancerInterview";

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
      case "/joint-freelancer-p1":
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
      <Route path="/" element={<HomePage />} />
      <Route path="/joint-freelancer-p1" element={<JointFreelancerP />} />
      <Route path="/joint-freelancer-p2" element={<JointFreelancerP1 />} />
      <Route path="/joint-freelancer-p3" element={<JointFreelancerP2 />} />
      <Route
        path="/joint-freelancer-interview"
        element={<JointFreelancerInterview />}
      />
    </Routes>
  );
}
export default App;
