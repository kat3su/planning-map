import { Application, Plan } from "@/app/type";
import { subYears } from "date-fns";

const SELECTED_YEAR = 2;

export default {
  async searchPlans(
    lat: number,
    lng: number,
    radius: number = 500
  ): Promise<Application[]> {
    const apiUrl = "https://api.planningalerts.org.au/applications.json";
    const key = process.env.NEXT_PUBLIC_PLANNING_ALERT_API_KEY as string;
    const data = {
      key,
      lat: lat.toString(),
      lng: lng.toString(),
      radius: radius.toString(),
    };
    const fetchUrl = `${apiUrl}?${new URLSearchParams(data).toString()}`;
    const plans: Plan[] = await (await fetch(fetchUrl)).json();
    const lastYear = subYears(new Date(), SELECTED_YEAR);
    return plans
      .filter((plan) => new Date(plan.application.date_received) >= lastYear)
      .map((plan) => plan.application);
  },
};
