import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import CategoryCard from "../../components/category/CategoryCard";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { status, data } = await axios.get("/api/categories");
      if (status === 200 || 201) {
        setCategories(data.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="wrapper pd-bottom-2x">
      <Carousel />
      {categories.map(({ _id, categoryName, subCategoryList }) => (
        <div className="category-container mg-top-2x" key={_id}>
          <p className="t3">{categoryName}</p>
          <div className="category-card-container">
            {subCategoryList.map(({ _id, subCategoryName, subCategoryImg }) => (
              <CategoryCard
                key={_id}
                categoryName={subCategoryName}
                img={subCategoryImg}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Home };
