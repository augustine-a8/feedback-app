import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>This is the About Page</h1>
        <p>This is a react app to blah blah blah</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Link to home or some shit</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
