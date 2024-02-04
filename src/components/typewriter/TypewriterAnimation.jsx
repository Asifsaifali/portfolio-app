import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

const TypewriterAnimation = ({ text }) => {
  return (
    <Typography variant="h3">
      <Typewriter
        options={{
          strings: text,
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>
  );
};

export default TypewriterAnimation;
