import './assets/scss/styles';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function Page() {
    return (
        <div className="page">
            <Navbar/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default Page;
