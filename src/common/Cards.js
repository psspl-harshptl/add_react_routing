import { Card, Col } from "react-bootstrap"

const Cards = ({ classname, img, count, desc }) => {
    return (
        <>
            <Col xl={4} xxl={3} className='mb-4'>
                <Card className={`custom-card ${classname}`}>
                    <Card.Body>
                        <div className='d-flex flex-column'>
                            <div className='card-img'>
                                <img className='img-fluid' src={img} alt="img" width={70} />
                            </div>
                            <div className='count'>{count}</div>
                            <div className='card-desc'>{desc}</div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Cards