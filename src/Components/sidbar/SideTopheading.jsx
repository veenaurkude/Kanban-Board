import { Typography } from "@mui/material";
import { RxChevronLeft } from "react-icons/rx";
const SideTopheading = ({ setShow }) => {
  return (
    <Typography
      component="div"
      sx={{
        flex: 1 / 2,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottom: "1px solid white",
      }}
    >
      <div style={{ flex: 1 / 2 }}>
        <img
          src="https://knowbility.org/media/pages/blog/the-myth-of-javascript-accessibility/fc4717b7ec-1662134552/javascriptlogosmall.png"
          alt="logo"
          style={{ objectFit: "cover", height: "4rem", width: "4rem" }}
        />
      </div>
      <span style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <strong>Trello Workspace</strong>
        <span>Free</span>
      </span>
      <span
        style={{
          flex: 2,
          alignSelf: "flex-start",
          position: "absolute",
          top: -12,
          left: "85%",
        }}
        onClick={() => {
          setShow(false);
        }}
      >
        <RxChevronLeft
          size={28}
          style={{
            border: "1px solid black",
            backgroundColor: "gray",
          }}
        />
      </span>
    </Typography>
  );
};

export default SideTopheading;
