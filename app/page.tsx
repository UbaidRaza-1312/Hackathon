import { Hero } from "./hero/page";
import { Products } from "./product/page";
import  { Upper , Footer} from "./layout";
import { Comments } from "./comments/page";

export default function Home() {
  return (
    <div>
    <Upper />
    <Hero />
    <Products />
    <Comments />
    <Footer />
    
    </div>
  );
}
