import ScheduleRegisterContainer from "@/features/schedule-register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Formulir Pendaftaran Tes TOEFL",
};

export default function ScheduleRegisterPage() {
  return (
    <>
      <ScheduleRegisterContainer />
    </>
  );
}
