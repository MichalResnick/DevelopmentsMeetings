import "./Home.css";
import img from "../../../Assets/pic.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Here you can view your meetings and add a new meeting if you want</h2>
             <img src={img} />
        </div>
    );
}

export default Home;
