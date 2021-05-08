import Head from "next/head";
import Image from "next/image";
import {
  WelcomeStep,
  ChooseAvatarStep,
  EnterCodeStep,
  EnterNameStep,
  EnterPhoneStep,
  TwitterStep,
} from "../components/registration/steps";

export default function Home() {
  return (
    <>
      <WelcomeStep />
    </>
  );
}
