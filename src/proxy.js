const KEYS = Symbol('keys');
const PROTOTYPE = {};

const READABLE_HANDLER = {
  get: (me, key) => me.get(key) ,
  set: () => false ,
  ownKeys: (me) => Array.from(me, pair => pair[0]) ,
  has: (me, key) => me.has(key) ,
  getPrototypeOf: (me) => me,
  defineProperty: () => false,
  deleteProperty: () => false,
  isExtensible: () => false,
  getOwnPropertyDescriptor: (me, key) => (me.has(key)) ?
    ({value: me.get(key), enumerable: true, writable: false, configurable: true}) :
    (undefined)
};

const wrap = (me) => {
  return new Proxy(me, READABLE_HANDLER);
};
export default wrap;

export const set = (proxy, key, value) => {
  return new Proxy( Object.getPrototypeOf(proxy).set(key, value), READABLE_HANDLER );
}
