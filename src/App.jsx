import "./App.css";
import CustomerTicketsCard from "./components/CustomerTicketsCard/CustomerTicketsCard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <StatisticsCard></StatisticsCard>

      <CustomerTicketsCard></CustomerTicketsCard>

      <Footer></Footer>
    </>
  );
}

export default App;
