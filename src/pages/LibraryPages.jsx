import FilterLibrary from "../components/LibraryComponents/FilterLibrary";
import CardsLibrary from "../components/LibraryComponents/CardsLibrary";
import LibraryHead from "../components/LibraryComponents/LibraryHead";

function LibraryPages() {
  return (
    <div>
      <LibraryHead />
      <FilterLibrary />
      <CardsLibrary />
    </div>
  );
}

export default LibraryPages;
