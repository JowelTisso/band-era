import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const _90s_Song = {
  _id: uuid(),
  categoryName: "90's song",
  subCategoryList: [
    {
      _id: uuid(),
      subCategoryName: "Electronic",
      subCategoryImg:
        "https://i.ytimg.com/vi/51iquRYKPbs/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAZDcEALdMvcUKtuPCIhuWsL3E8vQ",
    },
    {
      _id: uuid(),
      subCategoryName: "Alternative Metal",
      subCategoryImg:
        "https://i.ytimg.com/vi/9sTQ0QdkN3Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAgYSimwcF4ZaZilfwy1_TZD5m4tQ",
    },
    {
      _id: uuid(),
      subCategoryName: "Pop",
      subCategoryImg:
        "https://i.ytimg.com/vi/r0U0AlLVqpk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD8NRqz9TG3lgwyeJ94eUa5GAvOJQ",
    },
    {
      _id: uuid(),
      subCategoryName: "Metal",
      subCategoryImg:
        "https://i.ytimg.com/vi/GbwHAxd3BNk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0YV6UWweY4pgU530TTH5lYP-uig",
    },
    {
      _id: uuid(),
      subCategoryName: "Rock",
      subCategoryImg:
        "https://i.ytimg.com/vi/O-fyNgHdmLI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDnr_oUPjSWvXE5vCWlAgVISn76Q",
    },
  ],
};

const Recommended = {
  _id: uuid(),
  categoryName: "Recommended",
  subCategoryList: [
    {
      _id: uuid(),
      subCategoryName: "Punk rock",
      subCategoryImg:
        "https://i.ytimg.com/vi/Qv2izUgPSo4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXuBinc0cJ-IfwbmvAdcrCQSVdbw",
    },
    {
      _id: uuid(),
      subCategoryName: "Metal",
      subCategoryImg:
        "https://i.ytimg.com/vi/aF2teDfV4Fo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJswPPupkUadl1lWr9oEl4b8tGkw",
    },
    {
      _id: uuid(),
      subCategoryName: "Pop",
      subCategoryImg:
        "https://i.ytimg.com/vi/lic0oCDMfwk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJbCzh6vEVZH1WkY87vZinxF5Y-Q",
    },
    {
      _id: uuid(),
      subCategoryName: "Alternative/Indie",
      subCategoryImg:
        "https://i.ytimg.com/vi/RtBbinpK5XI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUVv7dCs9Gz74kg6IkQ_O0usU4UA",
    },
    {
      _id: uuid(),
      subCategoryName: "Rock",
      subCategoryImg:
        "https://i.ytimg.com/vi/HKtsdZs9LJo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJn9hkILK8M6oA62gEPVbJPKhm0w",
    },
  ],
};

export const categories = [_90s_Song, Recommended];
