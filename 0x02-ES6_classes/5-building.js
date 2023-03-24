export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (Object.getPrototypeOf(this) instanceof Building
      && !(this.evacuationWarningMessage instanceof Function)) throw Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
