import React from "react";
import Header from "./components/Header/Header";
import FileUpload from "./components/FileUpload/FileUpload";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <FileUpload />
      <Footer />
    </div>
  );
};

export default App;
