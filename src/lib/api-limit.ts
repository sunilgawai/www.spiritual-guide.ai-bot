import { getAuthSession } from "./auth";
import {
  MAX_BASE_PLAN_API_LIMIT,
  MAX_PREMIUM_PLAN_API_LIMIT,
} from "./constants";

const increaseApiLimit = async () => {
  const user = await getAuthSession();
  if (!user) {
    return false;
  }

  //
};
