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
export const LINE_STATIONCARD_INFO =
  "/v2/en/station_brief_detail/:STATION_CODE";
export const TOURISM = "/v2/en/tourism";
export const FARE =
  "/v2/en/new_fare_with_route/:FROM_STATION/:TO_STATION/:TYPE";
export const PENALTIES = "/v2/en/passenger/penalties";
export const LOST_FOUND_LIST = "/v2/en/lost_found_items/?page=:PAGE_NUMBER";
export const EMERGENCY_EVACUATION =
  "/v2/en/passenger/emergency-evacuation-plan/";
export const LAST_MILE = "v2/en/passenger/last-mile-connectivity/";
export const LAST_MILE_SERVICE = "/v2/en/passenger/:PAGE_SLUG";
export const CARBONLITE_METRO_TRAVEL =
  "/v2/en/passenger/carbonlite-metro-travel/";
