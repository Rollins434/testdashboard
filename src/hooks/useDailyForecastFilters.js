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
  // const maxPrice = searchParams.get("maxPrice")
  //   ? parseInt(searchParams.get("maxPrice"))
  //   : undefined;

  const setFilters = useCallback((filters) => {
    setSearchParams((params) => {
      if (filters.month !== undefined) params.set("month", filters.month);

      if (filters.year !== undefined) params.set("year", filters.year);
      if (filters.market !== undefined) params.set("market", filters.market);
      if (filters.channel !== undefined) params.set("channel", filters.channel);
      if (filters.device !== undefined) params.set("device", filters.device);
      if (filters.data !== undefined) params.set("data", filters.data);
      if (filters.byod !== undefined) params.set("byod", filters.byod);

      // if (filters.maxPrice !== undefined) {
      //   params.set("maxPrice", filters.maxPrice.toString());
      // }
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
