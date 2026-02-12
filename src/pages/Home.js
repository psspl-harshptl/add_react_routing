import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardContent from '../helper/cardContent';
import Cards from '../common/Cards';

const Home = () => {
  return (
    <>
      <section className='home-wrapper'>
        <div className='title'>Welcome</div>
        <Row>
          <Col xl={12} xxl={10}>
            <Row>
              {cardContent.map((item) =>
                <Cards
                  img={item.img}
                  classname={item.clasname}
                  count={item.count}
                  desc={item.description} />
              )}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Home