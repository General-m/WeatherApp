import Footer from "../Footer/Footer";
import ForecastPast from "../ForecastPast/ForecastPast";
import ForecastPresent from "../ForecastPresent/ForecastPresent";
import Header from "../Header/Header";
import classes from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <ForecastPresent />
        <ForecastPast />
      </main>
      <Footer />
    </div >
  )
}

export default App;
