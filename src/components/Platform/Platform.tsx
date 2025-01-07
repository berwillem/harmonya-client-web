import platform from "../../assets/platform.jpeg"
import "./Platform.css"
export default function Platform() {
  return (
    <div className="Platform">
      <div className="left-Platform">
        <h2>Get to know us in a bette way :</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
        <button>Book a reservation</button>

      </div>
      <div className="right-Platform">
        <img src={platform} alt="platform" />

      </div>
    </div>
  )
}