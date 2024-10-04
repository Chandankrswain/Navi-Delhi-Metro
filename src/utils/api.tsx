import apiClient from "../services/axios";
import {
  SEARCH_STATIONS,
  GET_STATIONS,
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
  async getStations(keyword: string) {
    const result = await this.client.get(
      GET_STATIONS.replace(":STATION_NAME", keyword)
    );
    return result?.data || [];
  }
}
