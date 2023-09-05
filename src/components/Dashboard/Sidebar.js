import { NavLink } from "react-router-dom";


const Sidebar = () => {

    return (

        <>

            <div className="sidebar">
                <ul>
                    <li><NavLink to="/home" className="link"><i class="fa fa-home"></i>Dashboard</NavLink></li>
                    <li><NavLink to="/read" className="link"><i class="fa fa-user"></i>Userdata</NavLink></li>
                </ul>

            </div>

        </>
    );
}

export default Sidebar;