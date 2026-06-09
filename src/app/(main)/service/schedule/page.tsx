import ScheduleContainer from "@/features/schedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sipena - Pilih Jadwal Tes",
};

export default function SchedulePage() {
  return (
    <>
      <ScheduleContainer />
    </>
  );
}
