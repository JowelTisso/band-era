import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import CategoryCard from "../../components/category/CategoryCard";
import { useVideo } from "../../context/provider/VideoProvider";
import { GET } from "../../utils/axiosHelper";
import { CHANGE_GENRE } from "../../utils/Constants";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const { videoDispatch } = useVideo();

  const navigate = useNavigate();

  const getCategories = async () => {
    const { status = 0, data = {} } = await GET("/api/categories");
    if (status === 200 || 201) {
      setCategories(data.categories);
    }
  };

  const navigateTo = (genre) => {
    videoDispatch({ type: CHANGE_GENRE, payload: genre });
    navigate("/videos");
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
              <div key={_id} onClick={() => navigateTo(subCategoryName)}>
                <CategoryCard
                  categoryName={subCategoryName}
                  img={subCategoryImg}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Home };
