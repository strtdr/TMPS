import Pbl from "./Pbl";
import NoPbl from "./NoPbl";

let instance = null;

export default class SingletonPblFactory {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  createPbl(groupName) {
    return new Pbl(groupName);
  }
  createNoPbl(groupName) {
    return new NoPbl(groupName);
  }
}