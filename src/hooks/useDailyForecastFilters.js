import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useDailyForecastFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const month = searchParams.get("month");
  const year = searchParams.get("year");
  const market = searchParams.get("market");
  const channel = searchParams.get("channel");
  const device = searchParams.get("device");
  const data = searchParams.get("data");
  const byod = searchParams.get("byod");

  const setFilters = useCallback((filters) => {
    setSearchParams((params) => {
      const currentMonth = searchParams.get("month");
      const currentYear = searchParams.get("year");
      const currentMarket = searchParams.get("market");
      const currentChannel = searchParams.get("channel");
      const currentDevice = searchParams.get("device");
      const currentData = searchParams.get("data");
      const currentByod = searchParams.get("byod");

      if (filters.month !== undefined) {
        params.set("month", filters.month);
      } else {
        params.set("month", currentMonth);
      }

      if (filters.year !== undefined) {
        params.set("year", filters.year);
      } else {
        params.set("year", currentYear);
      }

      if (filters.market !== undefined) {
        params.set("market", filters.market);
      } else {
        params.set("market", currentMarket);
      }

      if (filters.channel !== undefined) {
        params.set("channel", filters.channel);
      } else {
        params.set("channel", currentChannel);
      }

      if (filters.device !== undefined) {
        params.set("device", filters.device);
      } else {
        params.set("device", currentDevice);
      }

      if (filters.data !== undefined) {
        params.set("data", filters.data);
      } else {
        params.set("data", currentData);
      }

      if (filters.byod !== undefined) {
        params.set("byod", filters.byod);
      } else {
        params.set("byod", currentByod);
      }

      return params;
    });
  }, []);

  return {
    month,
    year,
    market,
    channel,
    device,
    data,
    byod,
    setFilters,
  };
}
