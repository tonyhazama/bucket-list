import { AxiosResponse } from "axios";
import { getInstance, routes, config } from ".";
import UserCredential from "../types/user-credential";

const logins = async (userCredential: UserCredential) => {
  try {
    const response: AxiosResponse = await getInstance().post(
      routes.login(), userCredential
    );
    return [response.data, ];
  } catch (err) {
    return [, err];
  }
};

export { logins };