"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type DayButtonProps } from "react-day-picker";
import useSchedule from "../_hooks/use-schedule";

export default function ScheduleCalendar() {
  const { isDate, handleSelectDate, handleDisabledDate, handleDayButton } =
    useSchedule();
  return (
    <Card className="bg-background-light">
      <Calendar
        mode="single"
        selected={isDate}
        onSelect={handleSelectDate}
        showOutsideDays={false}
        disabled={handleDisabledDate}
        className="bg-background-light w-full p-2"
        classNames={{
          month: "w-full space-y-4",
          month_grid: "w-full border-collapse",
          weekdays: "grid grid-cols-7 gap-2",
          weekday:
            "text-muted-foreground font-normal text-sm h-9 flex items-center justify-center",
          week: "grid grid-cols-7 gap-2 lg:gap-6 mt-2",
          day: "h-20 w-full p-0 relative flex items-center justify-center lg:h-28",
          today: "bg-background-light",
        }}
        components={{
          DayButton: (props: DayButtonProps) => {
            const { isSelectedDate, isDisabledDate, dateNumber, isDayData } =
              handleDayButton(props);

            return (
              <Button
                {...props}
                className={cn(
                  "border-border bg-background hover:bg-muted text-foreground h-full w-full border",
                  isSelectedDate && "border-primary",
                  isDisabledDate &&
                    "bg-muted/30 pointer-events-none cursor-not-allowed border-dashed opacity-30",
                )}
              >
                <div className="flex h-full w-full flex-col items-center-safe justify-center-safe text-xs lg:space-y-2">
                  <span className="lg:text-lg">{dateNumber}</span>
                  {!isDisabledDate && isDayData ? (
                    <div className="text-muted-foreground flex flex-col items-center text-[10px] leading-tight">
                      <span className="text-foreground font-medium">
                        {isDayData.participants}/{isDayData.quota}
                      </span>
                      <span>Terisi</span>
                    </div>
                  ) : (
                    <div className="text-muted-foreground/50 text-[10px]">
                      -
                    </div>
                  )}
                </div>
              </Button>
            );
          },
        }}
      />
    </Card>
  );
}
