import Header from "@/app/component/Header";
import Innovative from "@/app/component/Innovative";
import Overview from "@/app/component/Overview";
import Competetion from "@/app/component/Competetions"
import Future from "@/app/component/Future"
export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <Innovative />
        <Overview />
        <Competetion />
        <Future/>
      </h1>
    </div>
  );
}
