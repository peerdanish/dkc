import staticImg from "../../assets/video.png";
import classes from "./VideoSection.module.css";

export const VideoSection = () => {
	console.log('VideoSection', staticImg);
  return (
    <>
      <div className={classes["video-wrapper"]}>
        <img src={staticImg} alt="static-image" />
      </div>
    </>
  );
};
