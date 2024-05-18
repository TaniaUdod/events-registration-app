import { Circles } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Circles
        height="100"
        width="100"
        color="#91dde2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
