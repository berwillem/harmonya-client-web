import about1 from "../../assets/about.jpeg"
import about2 from "../../assets/about2.jpeg"
import "./About.css"
export default function About() {
  return (
    <div className="about">
      <div className="left-about">
        <h2>Get to know us in a bette way :</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
        <button>Book a reservation</button>

      </div>
      <div className="right-about">
        <img src={about1} alt="about1" />
        <img src={about2} alt="about2" />
      </div>
    </div>
  )
}