import apiClient from "../services/axios";
import {
  ALL_LINES,
  GET_LINE,
  LEAST_DISTANCE,
  MINIMUM_INTERCHANGE,
  NOTICES,
  SEARCH_STATIONS,
  STATION_INFO,
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
    console.log("API response:", result.data);
    return result?.data || [];
  }

  async getLineData(keyword: string) {
    const result = await this.client.get(
      GET_LINE.replace(":LINE_CODE", keyword)
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
      STATION_INFO.replace(":STATION.CODE", keyword)
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
