import { motion } from "framer-motion";
import Card from "../../components/Card.component";

const Dashboard = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    // <motion.main
    //   initial="hidden"
    //   animate="enter"
    //   exit="exit"
    //   variants={variants}
    //   transition={{ type: "linear" }}
    // >
    <div>
      <Card/>
    </div>

    // </motion.main>
  );
};

export default Dashboard;
