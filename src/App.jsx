import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import IssuesManagement from "./components/IssuesManagement/IssuesManagement";
import Navbar from "./components/Navbar/Navbar";

const fetchIssues = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
