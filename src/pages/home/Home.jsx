import TypewriterAnimation from "../../components/typewriter/TypewriterAnimation";
import Image from "../../components/image/Image";
import { Button, Box, Grid, Typography } from "@mui/material";
import boy from "../../assets/boy.png";


const Home = () => {
  const introduction = [
    "Hi! I'm Asif Hussain.",
    "I'm a fullstack web developer",
  ];
  return (
    <Grid className="p-4" container height={"100%"}>
      <Grid item xs={12} sm={6} spacing={4}>
        <Grid container spacing={4}>
          <Grid item marginTop={"20vh"} minHeight={"20vh"}>
            <TypewriterAnimation text={introduction}></TypewriterAnimation>
          </Grid>
          <Grid item>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>
          <Grid item>
            <Button className="mr-4" variant="outlined">
              Contact
            </Button>
            <Button variant="outlined">Download CV</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item maxHeight={"100%"} xs={12} sm={6}>
        <Grid container flex={"row"} justifyContent={"center"}>
          <Grid item sm={12} md={8} lg={6} justifyContent={"center"}>
            <Image src={boy}></Image>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
