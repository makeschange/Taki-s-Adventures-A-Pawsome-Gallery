import getUrl from "@/util/getUrl";
import axios from "axios";

const apiUrl = getUrl("/api/signin");

export default async function signinUser(data) {
  console.log("apiUrl: ", apiUrl);
  await axios.post(apiUrl, data);
}
