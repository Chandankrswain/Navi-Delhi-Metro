import apiClient from "../services/axios";
import {
  ALL_LINES,
  CARBONLITE_METRO_TRAVEL,
  EMERGENCY_EVACUATION,
  FARE,
  GET_LINE,
  GET_STATION_LINE,
  LAST_MILE,
  LAST_MILE_SERVICE,
  LEAST_DISTANCE,
  LINE_STATIONCARD_INFO,
  LOST_FOUND_LIST,
  MINIMUM_INTERCHANGE,
  NOTICES,
  PENALTIES,
  SEARCH_STATIONS,
  STATION_INFO,
  TICKETS,
  TOURISM,
} from "../services/constants/apiEndPoints";
import { getISTTime } from "./helper";

export class StationData {
  client: any;
  constructor() {
    this.client = apiClient;
  }

  async searchStations(keyword: string) {
    const result = await this.client.get(
      SEARCH_STATIONS.replace(":STATION_NAME", keyword)
    );
    return result?.data || [];
  }

  async getLines() {
    const result = await this.client.get(ALL_LINES);
    return result?.data || [];
  }

  async getLineData(keyword: string) {
    const result = await this.client.get(
      GET_LINE.replace(":LINE_CODE", keyword)
    );

    return result?.data || [];
  }

  async getLineStationsData(keyword: string) {
    const result = await this.client.get(
      GET_STATION_LINE.replace(":LINE_CODE", keyword)
    );

    return result?.data || [];
  }

  async getLineStationCardInfo(keyword: string) {
    const result = await this.client.get(
      LINE_STATIONCARD_INFO.replace(":STATION_CODE", keyword)
    );

    return result?.data || [];
  }

  async leastDistance(
    fromStationCode: string,
    toStationCode: string,
    time: string = getISTTime()
  ) {
    const url = LEAST_DISTANCE.replace(":From_Station_Code", fromStationCode)
      .replace(":To_Station_Code", toStationCode)
      .replace(":time", time);

    const result = await this.client.get(url);
    return result?.data || [];
  }

  async minimumInterchange(
    fromStationCode: string,
    toStationCode: string,
    time: string = getISTTime()
  ) {
    const url = MINIMUM_INTERCHANGE.replace(
      ":From_Station_Code",
      fromStationCode
    )
      .replace(":To_Station_Code", toStationCode)
      .replace(":time", time);

    const result = await this.client.get(url);
    return result?.data || [];
  }
  async getStationBriefInfo(keyword: string) {
    const result = await this.client.get(
      STATION_INFO.replace(":STATION_CODE", keyword)
    );
    return result?.data || [];
  }
}

export class NotificationData {
  client: any;
  constructor() {
    this.client = apiClient;
  }

  async getNotices() {
    const result = await this.client.get(NOTICES);
    return result?.data || [];
  }
}

export class TourismData {
  client: any;
  constructor() {
    this.client = apiClient;
  }

  async getTourism() {
    const result = await this.client.get(TOURISM);
    return result?.data || [];
  }
}

export class FareCalculatorData {
  client: any;
  constructor() {
    this.client = apiClient;
  }
  async getTotalFare(fromStation: string, toStation: string, type: string) {
    const url = FARE.replace(":FROM_STATION", fromStation)
      .replace(":TO_STATION", toStation)
      .replace(":TYPE", type);

    const result = await this.client.get(url);
    return result.data;
  }
}

export class PenaltiesData {
  client: any;
  constructor() {
    this.client = apiClient;
  }
  async getPenalties() {
    const result = await this.client.get(PENALTIES);

    return result.data;
  }
}
export class EmergencyEvacuationData {
  client: any;
  constructor() {
    this.client = apiClient;
  }
  async getEmergencyEvacution() {
    const result = await this.client.get(EMERGENCY_EVACUATION);
    return result.data;
  }
}

export class LostAndFoundData {
  client: any;
  constructor() {
    this.client = apiClient;
  }
  async getLostAndFound(keyword: any) {
    const url = LOST_FOUND_LIST.replace(":PAGE_NUMBER", keyword);
    const result = await this.client.get(url);
    return result.data;
  }
}
export class LastMileData {
  client: any;
  constructor() {
    this.client = apiClient;
  }
  async getLastMile() {
    const result = await this.client.get(LAST_MILE);
    return result.data;
  }

  async getLastSerMile(keyword: string) {
    const result = await this.client.get(
      LAST_MILE_SERVICE.replace(":PAGE_SLUG", keyword)
    );
    return result.data;
  }
}

export class CarbonLiteData {
  client: any;
  constructor() {
    this.client = apiClient;
  }

  async getCarbonLiteMetro() {
    const result = await this.client.get(CARBONLITE_METRO_TRAVEL);
    return result.data;
  }
}

export class TicketsCardData {
  client: any;
  constructor() {
    this.client = apiClient;
  }

  async getTicketsCardData(keyword: string) {
    const result = await this.client.get(
      TICKETS.replace(":PAGE_SLUG", keyword)
    );
    return result.data;
  }
}
