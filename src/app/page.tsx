import Landing from "../components/Landing";
import { Journey } from "../components/Journey";
import Contactme from "../components/Contact-me";
import Skills from "../components/Skills";



export default function Home() {
  return (
    
    <div className=" dark:bg-black/[0.96] bg-white antialiased bg-grid-white/[0.02]">
      <Landing />
      <Journey />
      <Skills />
      <Contactme />
    </div>
    
  );
}
