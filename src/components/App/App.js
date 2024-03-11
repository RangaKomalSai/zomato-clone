import "./App.css";
import logo from "../../images/zomato.avif";
import meal from "../../images/meal.jpg";
import dining from "../../images/dining.jpg";
import concert from "../../images/concert.jpg";
import SectionCard from "../SectionCard/SectionCard";
import LocationCard from "../LocationCard/LocationCard";

function App() {
  return (
    <div>
      <div className="home-top">
        <header className="list-container">
          <ul className="header-list">
            <li className="header-list-items">
              <a href="#" className="header-text">
                Investor Relations
              </a>
            </li>
            <li className="header-list-items">
              <a href="#" className="header-text">
                Add restaurant
              </a>
            </li>
            <li className="header-list-items">
              <a href="#" className="header-text">
                Log in
              </a>
            </li>
            <li className="header-list-items">
              <a href="#" className="header-text">
                Sign up
              </a>
            </li>
          </ul>
        </header>
        <div className="home-body">
          <div className="logo-container">
            <img src={logo} className="logo"></img>
          </div>
          <div className="home-body-text">
            <span className="text">Discover the best food & drinks in </span>
            <span className="text-1">Mumbai</span>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="home-sectionCards">
        <div className="home-sCard">
          <SectionCard
            image={meal}
            heading="Order Online"
            subHeading="Stay home and order at your doorstep"
          />
        </div>
        <div className="home-sCard">
          <SectionCard
            image={dining}
            heading="Dining"
            subHeading="View the city's favorite dining venues"
          />
        </div>
        <div className="home-sCard">
          <SectionCard
            image={concert}
            heading="Nightlife and Clubs"
            subHeading="Explore the city's top nightlife outlets"
          />
        </div>
      </div>
      <div className="location-details">
        <div className="location-text">
          <span className="l-text">Popular localities in and around </span>
          <span className="l-text-1">Mumbai</span>
        </div>
        <div className="locationCards-container">
          <LocationCard name={"Lower Parel"} number={"453"} />
          <LocationCard name={"Powai"} number={"410"} />
          <LocationCard name={"Malad West"} number={"881"} />
          <LocationCard name={"Borivalli West"} number={"128"} />
          <LocationCard name={"Bandra Kurla Complex"} number={"638"} />
          <LocationCard name={"Vashi"} number={"137"} />
          <LocationCard name={"Fort"} number={"625"} />
          <LocationCard name={"Juhu"} number={"251"} />
          <LocationCard name={"see more"} number={""} />
        </div>
      </div>
      <footer>Created with ❤️ by RKS</footer>
    </div>
  );
}

export default App;

export const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-left">
        <div className="searchbar-left-icon1">
          <i class="fi fi-sr-marker"></i>
        </div>
        <div className="searchbar-left-input">
          <input
            type="text"
            placeholder=", Mumbai"
            className="location-input"
          ></input>
        </div>
        <div className="searchbar-left-icon2">
          <i class="fi fi-rr-caret-down"></i>
        </div>
      </div>
      <div className="divider"></div>
      <div className="searchbar-right">
        <div className="searchbar-right-icon">
          <i class="fi fi-rr-search"></i>
        </div>
        <div className="searchbar-right-input">
          <input
            className="search-input"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          ></input>
        </div>
      </div>
    </div>
  );
};
