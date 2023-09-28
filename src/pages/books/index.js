import { useState, useEffect } from "react";
import SectionSeparator from "@/components/separator";
import CardBook from "@/components/cardBook";
import CarouselVertical from "@/components/carousel";
import FilterSidebar from "@/components/filter";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./book.module.css";

const Book = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const categories = ["Ficción", "No ficción", "Ciencia", "Historia"]; // Lista de categorías
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Filtra los libros según la categoría seleccionada y actualiza filteredBooks
    const filtered = setFilteredBooks(filtered); // Realiza la lógica de filtrado aquí
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/books");

        if (!response.ok) {
          throw new Error("La petición no fue exitosa");
        }

        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la petición GET:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <CarouselVertical />
      <div className="container">
        <div className="row">
          <div className={`col-md-2 `}>
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
          <div className="col-md-10 ">
            <h3 className={` ${style.h2} text-white border-bottom border-5`}>
              {" "}
              Los libros más vendidos... !
            </h3>
            <CardBook data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
