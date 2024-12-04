import apiClient from "../services/axios";
import {
  ALL_LINES,
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

  async getLines(keyword: string) {
    const result = await this.client.get(
      ALL_LINES.replace(":LINE_CODE", keyword)
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
      STATION_INFO.replace(":station_code", keyword)
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
