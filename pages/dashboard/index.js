import { motion } from "framer-motion";
import Card from "../../components/Card.component";
import Table from "../../components/Table.component";

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
    <div className="p-6 2xl:container md:px-6 xl:px-6">
      <div className="h-full items-center justify-center">
      <h1 className="pb-4 text-xl bold text-cyan-400"> Recent ...</h1>
        <Table />
        <h1 className="pt-4 text-xl bold text-cyan-400">All Images ...</h1>
        <Card />
      </div>
    </div>

    // </motion.main>
  );
};

export default Dashboard;
