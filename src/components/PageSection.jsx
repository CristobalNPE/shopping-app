const PageSection = ({ children }) => {
  return (
    <section className=" h-screen sm:items-start text-center sm:text-left items-center">
      {children}
    </section>
  );
};

export default PageSection;
