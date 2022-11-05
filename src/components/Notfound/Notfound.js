import "./style.css";
import notfound from "../../assets/images/404.webp";
function Notfound() {
  return (
    <div className="container text-center">
      <img src={notfound} alt="" />
    </div>
  );
}

export default Notfound;
