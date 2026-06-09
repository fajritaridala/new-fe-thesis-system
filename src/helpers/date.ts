import { type AvailableDateType } from "@/features/schedule/_type/schedule-type";

const dateHelper = {
  formatedDateToString(currentDate: Date): string {
    const offset = currentDate.getTimezoneOffset();
    const getLocaleDate = new Date(currentDate.getTime() - offset * 60 * 1000);
    return getLocaleDate.toISOString().split("T")[0];
  },

  getDayData({
    currentDate,
    availableDate,
  }: {
    currentDate: Date;
    availableDate: AvailableDateType[];
  }): AvailableDateType | undefined {
    if (!currentDate) return;
    return availableDate.find(
      (item) => item.date === this.formatedDateToString(currentDate),
    );
  },

  disableDate({
    currentDate,
    availableDate,
  }: {
    currentDate: Date;
    availableDate: AvailableDateType[];
  }): boolean {
    const availableDateStr = availableDate.map((item) => item.date);
    return !availableDateStr.includes(this.formatedDateToString(currentDate));
  },
};

export default dateHelper;
