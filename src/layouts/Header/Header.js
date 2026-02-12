import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

  const handleToggle = () => {
    document.body.classList.toggle("mini-sidemenu");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1199.98) {
        document.body.classList.add("mini-sidemenu");
      } else {
        document.body.classList.remove("mini-sidemenu");
      }
    };

    // Initial check
    handleResize();

    // Listen to resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className='header'>
        <div className='sidemenu-toogler' onClick={handleToggle}>
          <img className="img-fluid" src={require("../../assets/images/bar-icon.png")} />
        </div>
        <div className='user-profile-dropdown'>
          <Dropdown align={{ lg: 'end' }}>
            <Dropdown.Toggle id="dropdown-basic">
              <span className='dropdown-support'>
                <span>
                  <img className='img-fluid' src={require("../../assets/images/profile-user.png")} />
                </span>
                <span className='dropdown-title'>Prakash Software</span>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
    </>
  )
}

export default Header