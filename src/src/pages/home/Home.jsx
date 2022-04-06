import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import CategoryCard from "../../components/category/CategoryCard";
import { useVideo } from "../../context/provider/VideoProvider";
import { GET } from "../../utils/axiosHelper";
import {
  CATEGORIES_API,
  CHANGE_GENRE,
  UPDATE_CATEGORIES,
} from "../../utils/Constants";
import "./Home.css";

const Home = () => {
  const { videoState, videoDispatch } = useVideo();

  const navigate = useNavigate();

  const getCategories = async () => {
    const res = await GET(CATEGORIES_API);
    if (res?.status === 200 || res?.status === 201) {
      videoDispatch({
        type: UPDATE_CATEGORIES,
        payload: { ...videoState, categories: res?.data.categories },
      });
    }
  };

  const navigateTo = (genre) => {
    videoDispatch({
      type: CHANGE_GENRE,
      payload: { ...videoState, selectedGenre: genre },
    });
    navigate("/videos");
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="wrapper pd-bottom-2x">
      <Carousel />
      {videoState.categories.map(({ _id, categoryName, subCategoryList }) => (
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
