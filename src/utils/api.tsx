import apiClient from "../services/axios";
import {
  ALL_LINES,
  LEAST_DISTANCE,
  SEARCH_STATIONS,
} from "../services/constants/apiEndPoints";

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
      ALL_LINES.replace("LINE_CODE", keyword)
    );
    return result?.data || [];
  }

  async leastDistance(
    fromStationCode: string,
    toStationCode: string,
    time: string
  ) {
    const url = LEAST_DISTANCE.replace(":From_Station_Code", fromStationCode)
      .replace(":To_Station_Code", toStationCode)
      .replace(":time", time);

    const result = await this.client.get(url);
    return result?.data || [];
  }
}
