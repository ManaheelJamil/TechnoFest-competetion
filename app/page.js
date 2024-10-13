import Header from "@/app/component/Header";
import Innovative from "@/app/component/Innovative";
import Overview from "@/app/component/Overview";
import Competetion from "@/app/component/Competetions"
export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <Innovative />
        <Overview />
        <Competetion />
      </h1>
    </div>
  );
}
