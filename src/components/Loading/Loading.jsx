import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottie/loding/Animation - 1735203983892.json";
const Loading = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-2
     mt-64 w-11/12 md:w-3/4"
    >
      <Lottie animationData={loadingAnimation} loop={true}></Lottie>
      <h3 className="text-4xl font-bold dark:text-white">Loading...!</h3>
    </div>
  );
};

export default Loading;
