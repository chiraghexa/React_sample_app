import logo from '../../logo_1.png'
import profile from '../../profile.png'

const Header = () => {

    return (

        <>
            <div className="header">
                <div>
                    <img src={logo} alt="logo" className='header-logo' />
                </div>

                <h1> This is header part </h1>
                <div>
                    <img src={profile} alt="profile" className='profile-logo' />
                </div>
            </div>


        </>

    );
}

export default Header;