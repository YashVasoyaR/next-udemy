import nextImg from "@/public/next.webp"
import Image from "next/image";
const Home=async()=> {
  return (
   <>
    <Image className="w-full" src={nextImg} height={200} width={200} />
   </>
  )
}

export default Home;