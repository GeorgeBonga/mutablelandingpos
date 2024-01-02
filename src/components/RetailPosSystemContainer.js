import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const RetailPosSystemContainer = () => {
  const handleLoginClick = () => {
    // Redirect to the login page
    window.location.href = "https://pos.mutabletech.co.ke/login";
  };
  return (
    <div className="absolute top-[183px] left-[calc(50%_-_615px)] w-[1230px] h-[416px]  overflow-hidden mix-blend-normal text-left text-16xl text-steelblue font-inter">
      <div className=" flex h-full w-full  top-[183px] bg-[url('/public/landing1.jpg')] bg-cover bg-center bg-no-repeat bg-[top] mix-blend-normal">

        {/* <FaAngleLeft className="absolute top-[188px] left-[40px] rounded-31xl w-10 h-10 object-cover mix-blend-normal" />
        <FaAngleRight className="absolute top-[188px] left-[1154px] rounded-31xl w-10 h-10 object-cover mix-blend-normal" />
      */}
      </div>
      <div className="absolute top-[97px] left-[639px] w-[554.97px] h-12 mix-blend-normal hover:text-blue transition duration-300">
        <b className="absolute  top-[0px] left-[19px] leading-[25px] flex items-center w-[553px] h-[53px]">
          THE BEST RETAIL POS SYSTEM
        </b>
      </div>
      <div
        className="absolute top-[214px] left-[939px] hover:text-blue-900 transition duration-300 ease-in-out rounded-10xs bg-orangered box-border w-[154.63px] h-[47px] mix-blend-normal text-4xs-8 text-darkslateblue border-[3px] border-solid border-orangered cursor-pointer"
        onClick={handleLoginClick}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center  text-sm  font-bold uppercase font-medium">
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailPosSystemContainer;
