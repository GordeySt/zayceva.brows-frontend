import { Skeleton } from "@mui/material";

const ConfirmVerifyingInfo = () => {
  return (
    <>
      <Skeleton
        sx={{ margin: "20px auto" }}
        animation="wave"
        width="25%"
        height="40px"
      />
      <Skeleton sx={{ margin: "0 auto" }} animation="wave" width="70%" />
      <Skeleton
        sx={{ margin: "0 auto" }}
        animation="wave"
        width="48%"
        height="50px"
      />
    </>
  );
};

export default ConfirmVerifyingInfo;
