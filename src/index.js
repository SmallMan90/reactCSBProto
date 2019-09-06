import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./navBar/index";
import HomePage from "./homePage/index";
import Footer from "./footer/index";
import "./styles.css";

// const Welcome = props => {
//   return <h1>Hello, {props.name}</h1>;
// };

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />
        <Footer />
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name="Somnath" />
//       </div>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
