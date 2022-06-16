// ! 다양한 제네릭 타입을 공부해볼 수 있음

// * 1. 제너릭 기본 사용법
type User = {
  id: number;
  name: string;
};

type Address = {
  zipcode: number;
  address: string;
};
function pipOne(value: any): any {
  return value;
}

function pipTwo<T>(value: T): T {
  return value;
}

const pipObjectOne = <T>(obj: T): T => {
  return obj;
};

let po = pipObjectOne({ id: 1, name: "kim", zipcode: 51234 });
// 지워야하는 걸 가르쳐줌
let po2 = pipObjectOne<User>({ id: 1, name: "kim", zipcode: 51234 });

// * 2. 제너릭 클레스 활용
class State<S, Config = {}> {
  private _state: S;
  config: Config;
  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }
  getState(): S {
    return this._state;
  }
}
let s1 = new State<Address, { active: boolean }>(
  {
    zipcode: 123123,
    address: "seoul",
  },
  {
    active: true,
  }
);
const s1Data = s1.getState();
// typescrip가 미리보기를 제공해줌
console.log(s1Data.address);

// * key value 고급 사용법
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// m은 없다는 걸 미리보기로 제공
getProperty(x, "m");

// * interface에 제너릭 사용하기
interface keyPair<T, U> {
  key: T;
  value: U;
}
let kv: keyPair<number, string> = { key: 1, value: "kim" };
let kv2: keyPair<number, number> = { key: 1, value: 2 };
