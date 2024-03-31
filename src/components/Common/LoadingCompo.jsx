import { HashLoader } from "react-spinners";

const LoadingCompo = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HashLoader
        color="red"
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      ></HashLoader>
    </div>
  );
};

export default LoadingCompo;
