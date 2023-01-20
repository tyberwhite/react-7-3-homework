import EmployeeList from "./EmployeeList";
import HeaderHome from "./HeaderHome";
import SearchBar from "./SearchBar";

function Homepage() {
  return (
    <div className="homepage">
      <HeaderHome />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;
