import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress() {
  const percentage = 77;
  const primaryColor = "#15A25E";
  return (
    <CircularProgressbar
      className="text-primary size-52 my-10"
      value={percentage}
      text={`${percentage}%`}
      styles={{
        // customize the path (progress bar)
        path: {
          stroke: primaryColor, // change the progressbar color
          strokeLinecap: "round", // rounded edges
          transition: "stroke-dashoffset 0.5s ease 0s", // smooth transition
        },
        // customize the trail (background)
        trail: {
          stroke: "#e2e8f0", // change the background color
        },
        // customize the text
        text: {
          fill: primaryColor, // change the text color
          fontSize: "16px", // change the font size
        },
      }}
    />
  );
}
