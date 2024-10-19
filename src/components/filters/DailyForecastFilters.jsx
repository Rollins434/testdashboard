import Select from "react-select";
import { useDailyForecastFilters } from "../../hooks/useDailyForecastFilters";
import "./filtersLayout.scss";

const placeholderSelectText = "--select--";

export default function DailyForecastFilters() {
  const { month, year, market, channel, device, data, byod, setFilters } =
    useDailyForecastFilters();

  const selectedMonth = filtersByMonthOptions.find((op) => op.value === month);
  const selectedYear = filtersByYearOptions.find((op) => op.value === year);
  const selectedMarket = filtersByMarketOptions.find(
    (op) => op.value === market
  );
  const selectedChannel = filtersByChannelOptions.find(
    (op) => op.value === channel
  );
  const selectedDevice = filtersByDeviceOptions.find(
    (op) => op.value === device
  );
  const selectedData = filtersByDataOptions.find((op) => op.value === data);
  const selectedByod = filtersByByodOptions.find((op) => op.value === byod);

  return (
    <div className="filtersContainer" style={{ fontSize: "0.8rem" }}>
      <div>
        <label>Filter by Month</label>
        <Select
          isClearable
          value={selectedMonth}
          options={filtersByMonthOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ month: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by Year</label>
        <Select
          isClearable
          value={selectedYear}
          options={filtersByYearOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ year: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by Market</label>
        <Select
          isClearable
          value={selectedMarket}
          options={filtersByMarketOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ market: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by Channel</label>
        <Select
          isClearable
          value={selectedChannel}
          options={filtersByChannelOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ channel: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by Device</label>
        <Select
          isClearable
          value={selectedDevice}
          options={filtersByDeviceOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ device: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by Data</label>
        <Select
          isClearable
          value={selectedData}
          options={filtersByDataOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ data: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>

      <div>
        <label>Filter by BYOD</label>
        <Select
          isClearable
          value={selectedByod}
          options={filtersByByodOptions}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          onChange={(e) => setFilters({ byod: e?.value || null })}
          placeholder={placeholderSelectText}
        />
      </div>
    </div>
  );
}

const filtersByMonthOptions = [
  { value: "aaa1", label: "aaa1" },
  { value: "aaa2", label: "aaa2" },
];

const filtersByYearOptions = [
  { value: "bbb1", label: "bbb1" },
  { value: "bbb2", label: "bbb2" },
];

const filtersByMarketOptions = [
  { value: "ccc1", label: "ccc1" },
  { value: "ccc2", label: "ccc2" },
];

const filtersByChannelOptions = [
  { value: "ddd1", label: "ddd1" },
  { value: "ddd2", label: "ddd2" },
];

const filtersByDeviceOptions = [
  { value: "eee1", label: "eee1" },
  { value: "eee2", label: "eee2" },
];

const filtersByDataOptions = [
  { value: "fff1", label: "fff1" },
  { value: "fff2", label: "fff2" },
];

const filtersByByodOptions = [
  { value: "ggg1", label: "ggg1" },
  { value: "ggg2", label: "ggg2" },
];
