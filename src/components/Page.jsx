const Page = ({ children }) => {
  return (
    <main className="mt-[4rem] bg-background max-w-screen-2xl min-h-[calc(100vh-4rem)] mx-auto px-5 pt-12 mb-12">
      {children}
    </main>
  );
};

export default Page;
