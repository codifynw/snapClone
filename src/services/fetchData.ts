import data from "../data.json";
import { Snap } from "../types";

export default (): Promise<{
  users: { id: number; name: string }[];
  snaps: Snap[];
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
