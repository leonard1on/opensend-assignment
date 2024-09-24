import { Tokens } from "../Tokens";
import { UserProfile } from "./UserProfile";

export interface LoginResponse extends UserProfile {
  tokens: Tokens;
}
