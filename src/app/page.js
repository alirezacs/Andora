import Category from "@/components/Category/Category";
import Header from "@/components/header/Header";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Slider />
      <Category />
    </div>
  );
}
