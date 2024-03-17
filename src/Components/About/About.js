import { useNavigate, useParams } from "react-router-dom";

const About = () => {

    const { name } = useParams();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Welcome {name ? name : 'on About Page'}!</h1>
            <button onClick={handleClick}>Go to home !</button>
        </div>
    )
};

export default About;