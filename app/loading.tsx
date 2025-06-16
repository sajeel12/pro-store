import Image from "next/image"
import loader from "@/assets/loader.gif"
const loading = () => {
  return (
    <div className="flex-center h-dvh" >
        <Image src={loader} width={150} height={150} alt="Loading..." />
    </div>
  )
}

export default loading