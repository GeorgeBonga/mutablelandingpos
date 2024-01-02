import Footer from "../components/Footer";
import RetailPointOfSaleContainer from "../components/RetailPointOfSaleContainer";
import WinesAndSpiritsPosSystemContai from "../components/WinesAndSpiritsPosSystemContai";
import RestaurantPosSystemContainer1 from "../components/RestaurantPosSystemContainer1";
import SupermarketMinimartPosSystemCo from "../components/SupermarketMinimartPosSystemCo";
import FormContainer2 from "../components/FormContainer2";
import FormContainer from "../components/FormContainer";
import RetailPosSystemContainer from "../components/RetailPosSystemContainer";
import Header from "../components/Header";
import HomeContainer from "../components/HomeContainer";
import FormLeadingPos from "../components/FormLeadingPos";
const DivFullpage = () => {
  return (
    <div >

      <div className="absolute top-[0px] left-[calc(50%_-_615px)] w-[1230px] h-[214px] mix-blend-normal">
        <Header />
        <HomeContainer />
      </div>
      <RetailPointOfSaleContainer />
      <WinesAndSpiritsPosSystemContai />
      <RestaurantPosSystemContainer1 />
      <SupermarketMinimartPosSystemCo />
      <FormLeadingPos/>  
      <FormContainer2 />
      <FormContainer />
      <RetailPosSystemContainer />
      <Footer />
    </div>
 
  );
};

export default DivFullpage;
