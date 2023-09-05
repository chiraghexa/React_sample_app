import Footer from "../Dashboard/Footer";
import Header from "../Dashboard/Header"
import Sidebar from "../Dashboard/Sidebar";

const Privatelayout = ({children}) => {

    return (

        <> 
            <Header />

            <Sidebar />

            {children}  

            <Footer /> 
            
        </>


    );


}
export default Privatelayout;