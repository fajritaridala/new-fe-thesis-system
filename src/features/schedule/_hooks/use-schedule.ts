import dateHelper from "@/helpers/date";
import { useRouter } from "next/navigation";
import { useState } from "react";
import calendarDataDummy from "../_component/data-dummy";
import { DayButtonProps } from "react-day-picker";

export default function useSchedule() {
  const today = new Date();
  const router = useRouter();
  const [isDate, setIsDate] = useState<Date | undefined>(today);

  function handleSelectDate() {
    return router.push("/service/schedule/register");
  }

  function handleDisabledDate(currentDate: Date): boolean {
    return dateHelper.disableDate({
      currentDate,
      availableDate: calendarDataDummy,
    });
  }

  function handleDayButton(props: DayButtonProps) {
    const { day, modifiers } = props;

    const dateNumber = day.date.getDate();
    const isSelectedDate = modifiers.selected;
    const isDisabledDate = modifiers.disabled;
    const isDayData = dateHelper.getDayData({
      currentDate: day.date,
      availableDate: calendarDataDummy,
    });

    return {
      dateNumber,
      isSelectedDate,
      isDisabledDate,
      isDayData,
    };
  }

  return {
    isDate,
    setIsDate,
    handleSelectDate,
    handleDisabledDate,
    handleDayButton,
  };
}
