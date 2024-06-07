import { Box } from "@mui/material";
import Project from "../components/Project";
import { loremipsum } from "../constants";

const PortfolioPage = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "calc(20px + 1vw)",
          marginBottom: "4vw",
        }}
      >
        Some projects I'm proud of
      </Box>
      <Project
        title="AMPED-UP"
        link="https://www.linquest.com/products-and-solutions/amped-up/"
        description="Would it surprise you to know that the US Air Force plans their missions using white 
        boards and laminated maps? It's true! Most USAF cadets learn to plan a mission entirely by hand, 
        and the whole process can take well over 80 man-hours. I've watched them do it. I had the 
        opportunity to work with some incredible developers at The Perduco Group (now a LinQuest company) 
        to develop software tools to reduce that time dramatically. Our software allowed the mission
        planning team to organize runway times, draw flight paths on an interactive 3D globe, collaborate 
        on mission-critical information, and more, all with multi-user features, real-time updates, and
        automatic error checking in an isolated, secure software environment. We even had the opportunity
        to visit Red Flag at Eilson AFB in Fairbanks Alaska to get feedback on our work from real AF pilots.
        You can read more about AMPED-UP on LinQuest's website."
        image="https://www.aerotechnews.com/nellisafb/wp-content/uploads/sites/5/2021/12/nellis-wsint2.jpg"
        imageSourceText="https://www.aerotechnews.com"
        floatRight
      />
      <Project
        title="React Mobile"
        link="https://www.reactmobile.com"
        description="When your team works in a big building, like a hotel or a hospital, with lots of rooms
        and customers, how do you make sure your whole team is safe? React Mobile provides a safety with
        a distributed network of location monitors and panic buttons to allow security to deploy resources
        to the exact location of the emergency within seconds of an alert. While working at GenUI, I served
        as the technical lead for the web-based central reporting hub of the React Mobile service. When I
        first arrived on the project, the codebase was in a sorry state, with mountains of code debt. I 
        personally orchestrated a massive refactor of the real-time data ingestion and the state management
        of the webapp, which eliminated numerous performance issues and streamlined future development
        dramatically. I also had the incredible opportunity to mentor three junior developers on the project,
        which was some of the most rewarding work I've ever done, and a huge inspiration to me to begin
        tutoring. You can read more about the program on React Mobile's website."
        image="https://www.pdchealthcare.com/media/wysiwyg/pdchc-m2/react-mobile/rm-with-waves-2x.png"
        imageSourceText="https://www.pdchealthcare.com"
      />
      <Project
        title="HAL"
        link="https://www.linquest.com/products-and-solutions/hal/"
        description="HAL, or the Harness for Adaptive Learning, was another project that I was moved to
        well into the life of it's development. I was tasked with creating an investor-friendly interface
        for the already existing product, which at the time required manually editing .py files to configure.
        I include this project here, not because of the great success I had, but because of the lessons I
        learned along the way. In truth, this project was not my proudest moment of my career, but it
        revealed several areas of growth for me in my career. The most apparent area of growth was Visual
        Design. At the time, I was still a fairly junior developer and I new almost nothing about design.
        The final product provided a GUI that, while certainly better for non-developers than editing .py
        files, was not what I would call 'Investor Friendly.' Since then I have spent a lot of time learning
        about the fundamentals of design, which is hopefully apparent on this website. From a technical aspect
        I also learned a valuable lesson about over-designing. I was convinced it would be a good idea to
        write the backend in Go, mostly because of the way it can efficiently handle multithreading. My
        thought was that since machine learning involves a lot of data, I needed to use a language with a
        high throughput. Since Go was not my strongest language, I spent a LOT more time than expected to
        develop simple features like SQL operations and file storage. By the end of the project I was putting
        in 50 and 60 hour weeks to meet my deadlines. In the end, I realized it was completely unnecessary 
        because all of the intense computation and data throughput would be handled by HAL itself. I would
        have been better off just writing the backend in Node.js, which I already knew well. Lesson learned.
        You can read more about HAL on LinQuest's website."
        image="https://www.linquest.com/wp-content/uploads/2022/11/hal-03.jpg"
        imageSourceText="https://www.linquest.com"
        floatRight
      />
    </Box>
  );
};

export default PortfolioPage;
