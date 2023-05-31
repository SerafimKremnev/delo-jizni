import Banner from "@/components/blocks/Banner/Banner";
import Strah from "@/components/blocks/Starh/Strah";
import Uslovie from "@/components/blocks/Uslovie/Uslovie";
import Packets from "@/components/blocks/Packets/Packets";
import Questions from "@/components/blocks/Questions/Questions";
import Doing from "@/components/blocks/Doing/Doing";
import Form from "@/components/blocks/Form/Form";

export default function Home() {
  return (
    <>
      <Banner />
      <Strah/>
      <Uslovie/>
      <Questions/>
      <Doing/>
      <Form/>
    </>
  )
}
