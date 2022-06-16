import { v4 } from "uuid";

// uuid package 랜덤 id생성
type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({});
