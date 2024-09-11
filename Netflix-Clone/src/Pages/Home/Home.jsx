// Importing React and the necessary components for the home page layout.
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import RowList from "../../Components/Rows/RowList/RowList";
// Home component that renders the main structure of the page including the header, banner, row list, and footer.
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
