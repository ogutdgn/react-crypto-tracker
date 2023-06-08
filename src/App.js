import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <BrowserRouter>
    //   <div className={classes.App}>
    //     <Header />
    //     <Route path="/" component={Homepage} exact />
    //     <Route path="/coins/:id" component={CoinPage} exact />
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path='/' Component = {Homepage} exact/>
        <Route path='/coins/:id' Component = {CoinPage}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
