import { Container } from "react-bootstrap"
import Header from "../Header/Header"
import Sidemenu from "../Sidemenu/Sidemenu"

const Content = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Sidemenu />
                <div className="content-wrapper">
                    <Header />
                    <div className="content">
                        <Container fluid>
                            {children}
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content