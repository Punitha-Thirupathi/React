import Cards from "../Cards/Cards.jsx";
import Flower1 from "../Assests/img5.jpg";
import Flower2 from "../Assests/img4.jpg";
import Flower3 from "../Assests/img3.jpg";
import '../Cards/Cards.css';


function Main() {
    return (
      <section className="container my-5 card-section">
        <div className="row g-3">
          <div className="col-md-4 col-xl-4">
            <Cards
              src={Flower1}
              alt="Flower"
              title="Flowers"
              desc="Its an amazing"
              
            />
          </div>
          <div className="col-md-4 col-xl-4">
            <Cards
              src={Flower2}
              alt="Flower"
              title="Tulips"
              desc="Its amazing color for Tulips"
            />
          </div>
          <div className="col-md-4 col-xl-4">
            <Cards
              src={Flower3}
              alt="Flower"
              title="Lotus"
              desc="Looks Beautiful"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Main;
