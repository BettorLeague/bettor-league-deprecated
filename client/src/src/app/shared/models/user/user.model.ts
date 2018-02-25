import {AuthorityModel} from "../auth/authority.model";

export class UserModel {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  authorities: AuthorityModel[];
  email: string;
  lastPasswordResetDate : string;
}

