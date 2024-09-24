import { Accesses } from "../Access";
import { User } from "../User";
import { View } from "../View";

export interface UserProfile {
  message: string;
  user: User;
  accesses: Accesses;
  view: View;
}
