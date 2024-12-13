export const SEARCH_STATIONS = "/v2/en/station_by_keyword/all/:STATION_NAME";
export const GET_STATIONS = "/v2/en/station_by_keyword/all/:STATION_NAME";
export const ALL_LINES = "/v2/en/line_list";
export const GET_LINE = "/v2/en/metro_line/:LINE_CODE";
export const GET_STATION_LINE = "/v2/en/station_by_line_linepage/:LINE_CODE";
export const LEAST_DISTANCE =
  "/v2/en/station_route/:From_Station_Code/:To_Station_Code/least-distance/:time";
export const MINIMUM_INTERCHANGE =
  "/v2/en/station_route/:From_Station_Code/:To_Station_Code/minimum-interchange/:time";
export const NOTICES = "/v2/en/passengers/notification";
export const STATION_INFO = "/v2/en/station/:STATION_CODE";
