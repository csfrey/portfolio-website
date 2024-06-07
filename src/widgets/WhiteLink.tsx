import { Link } from "@mui/material";

const WhiteLink = (props: any) => {
  return (
    <Link
      {...props}
      sx={{
        color: "white",
        textDecorationColor: "white",
        cursor: "pointer",
      }}
    >
      {props.children}
    </Link>
  );
};

export default WhiteLink;
