import axios from "axios";

export class Accounts {
  static async getAccountList() {
    const res = await axios
      .get("http://localhost:8080/api/accounts")
      .then((response) => {
        return response;
      });

    return res;
  }
}
