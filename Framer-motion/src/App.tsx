import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.11);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          layoutId="1"
          style={{ position: "relative" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Box
          onClick={() => setId("2")}
          layoutId="2"
          style={{ position: "relative" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("3")}
          layoutId="3"
          style={{ position: "relative" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("4")}
          layoutId="4"
          style={{ position: "relative" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Grid>

      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button onClick={toggleClicked} style={{ marginTop: 20 }}>
        Swtich
      </button>
    </Wrapper>
  );
}

export default App;
