export default class HolbertonClass{
  constructor(size, location){
    this._size = size;
    this._location = location;
  }
  [Symbol.toPrimitive](type){
    if (type === 'number')
      return this._size;
    else if (type === 'string')
      return this._location;
    else
      return super[Symbol.toPrimitive](type);
  }
}
