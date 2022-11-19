import { useTheme } from "@mui/material";
import "./css/custom-space-loader.css";

const CustomSpaceLoader = () => {
  const theme = useTheme();

  return (
    <div
      className="loader"
      style={{ color: theme.palette.text.disabled }}
    ></div>
  );
};

export default CustomSpaceLoader;
