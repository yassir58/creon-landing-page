import FaqScreen from "./_components/screens/FaqScreen";
import MainScreen from "./_components/screens/MainScreen";
import PassScreen from "./_components/screens/PassScreen";
import ProfiteScreen from "./_components/screens/ProfiteScreen";
import FeaturesScreen from "./_components/screens/FeaturesScreen";
import MarketScreen from "./_components/screens/MarketScreen";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className="bg-black flex justify-between items-center flex-col">
      <MainScreen/>
      <PassScreen/>
      <ProfiteScreen/>
      <FaqScreen/> 
      <FeaturesScreen/>
      <MarketScreen/>
      <Footer/>
    </main>
  );
}
