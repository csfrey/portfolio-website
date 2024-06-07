import { Box } from "@mui/material";
import Project from "../components/Project";
import { loremipsum } from "../constants";

const PortfolioPage = () => {
  return (
    <Box>
      <Project
        title="AMPED-UP"
        link="https://www.linquest.com/products-and-solutions/amped-up/"
        description={loremipsum}
        image="https://www.aerotechnews.com/nellisafb/wp-content/uploads/sites/5/2021/12/nellis-wsint2.jpg"
        imageSourceText="https://www.aerotechnews.com"
        floatRight
      />
      <Project
        title="React Mobile"
        link="https://www.reactmobile.com"
        description={loremipsum}
        image="https://www.pdchealthcare.com/media/wysiwyg/pdchc-m2/react-mobile/rm-with-waves-2x.png"
        imageSourceText="https://www.pdchealthcare.com"
      />
      <Project
        title="HAL"
        link="https://www.linquest.com/products-and-solutions/hal/"
        description={loremipsum}
        image="https://www.linquest.com/wp-content/uploads/2022/11/hal-03.jpg"
        imageSourceText="https://www.linquest.com"
        floatRight
      />
    </Box>
  );
};

export default PortfolioPage;
