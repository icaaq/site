interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main id="main">{children}</main>;
};

export default Main;
