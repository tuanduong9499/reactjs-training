import Header from "../Header";

const Main = ({ children }) => {
  return (
    <div className="app">
      <Header className="app-title" headerTitle="Todo App" />
      {children}
    </div>
  );
};
export default Main;
