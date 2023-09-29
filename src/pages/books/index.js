import { useState, useEffect } from "react";
import SectionSeparator from "@/components/separator";
import CardBook from "@/components/cardBook";
import CarouselVertical from "@/components/carousel";
import FilterSidebar from "@/components/filter";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./book.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts } from "@/store/products/productsSlice";

const Book = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const productsList = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const categories = [
    "Ficción",
    "No ficción",
    "Ciencia",
    "Historia",
    "herotica",
    "romantica",
    "terror",
    "impredecible",
  ]; // Lista de categorías
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/books");

        if (!response.ok) {
          throw new Error("La petición no fue exitosa");
        }

        const responseData = await response.json();
        setData(responseData.data);
        dispatch(addProducts(responseData.data));
        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la petición GET:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    console.log(category);
    // setSelectedCategory(category);
    // // Filtra los libros según la categoría seleccionada y actualiza filteredBooks
    // const filtered = setFilteredBooks(filtered); // Realiza la lógica de filtrado aquí
  };

  if (loading) {
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>;
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
            <CardBook data={productsList} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
