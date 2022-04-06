import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/VideoReducer";

const VideoContext = createContext({ state: {}, dispatch: () => {} });

const VideoProvider = ({ children }) => {
  const defaultData = {
    selectedGenre: "",
    videos: [],
    likedVideos: [],
    watchLater: [],
    playlist: [],
    history: [],
    categories: [],
  };
  const [state, dispatch] = useReducer(reducer, defaultData);

  return (
    <VideoContext.Provider
      value={{ videoState: state, videoDispatch: dispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
