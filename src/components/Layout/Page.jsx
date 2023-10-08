import { motion } from "framer-motion";

const Page = ({ children, animated }) => {
  if (!animated) {
    return (
      <main className="mx-auto mb-12 mt-[4rem] min-h-[calc(100vh-4rem)] max-w-screen-2xl bg-background px-5 pt-12">
        {children}
      </main>
    );
  }
  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="mx-auto mb-12 mt-[4rem] min-h-[calc(100vh-4rem)] max-w-screen-2xl bg-background px-5 pt-12"
    >
      {children}
    </motion.main>
  );
};

export default Page;
