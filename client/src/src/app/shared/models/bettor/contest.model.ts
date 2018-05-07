import {MessageModel} from "./message.model";
import {ContestType} from "./contest-type.model";

export class ContestModel{
  id: number;
  caption: string;
  ownerId: number;
  type: ContestType;
  competitionId: number;
  messages: MessageModel[];
  nbParticipant:number;
}
