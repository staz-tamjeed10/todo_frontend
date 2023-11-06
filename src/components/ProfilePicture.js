import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import profile from '../assets/images/profile.jpg'

function ProfilePicture() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} className="text-center">
            <Image
                src={profile}
                style={{
                    border: "3px solid white",
                    width: "200px",
                    height: "200px"
                }}
                roundedCircle
            />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePicture;