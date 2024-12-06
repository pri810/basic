import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profile({ name, location }) {
    return (
        // <div>
        // <p>Name :{name}</p>
        // <p>Location :{location}</p>
        // </div>

        <Card style={{width: '18rem'}} className='col-md-4'>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/111479652?s=48&v=4" />
            <Card.Body >
                <Card.Title >prince</Card.Title>
                <Card.Text >
                    i am studying BSCIT!!!!!
                </Card.Text>
                <a variant="primary" href='https://github.com/pri810/basic'>
                   <Button>open Profile</Button> 
                </a>
            </Card.Body>
        </Card>
    );
}
export default Profile;