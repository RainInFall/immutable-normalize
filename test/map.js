import test from 'ava';
import Immutable from 'immutable'
import wrap, { set } from '../dist/all.js';

test('map#constructor', t => {
  let temp = wrap(Immutable.Map());
});

test('map#set', t => {
  let temp = wrap(Immutable.Map());
  t.throws(() => temp.a = 1);
  t.throws(() => temp.b = 2);
  temp = set(temp, 'a', 1);
  temp = set(temp, Symbol('b'), 2);
})

test('map#get', t => {
  let temp = wrap(Immutable.Map());
  t.is(temp.a, undefined);
  temp = set(temp, 'a', 1);
  t.is(temp.a, 1);
  let b = { c : 1 };
  temp = set(temp, 'a', b);
  t.is(temp.a, b);
  let sym = Symbol('a');
  temp = set(temp, sym, 10);
  t.is(temp[sym], 10);
});

test('map#for in', t => {
  let temp = wrap(Immutable.Map());
  let src = {a : 1, b: 2};
  for(var key in src) {
    temp = set(temp, key, src[key]);
  }
  t.deepEqual(temp, src);
});

test('map#delete', t=> {
  let data = {a:1};
  let temp = wrap(Immutable.Map(data));
  t.deepEqual(temp, data);
  t.throws(()=>delete temp.a);
  t.deepEqual(temp, data);
});

test('map#Obecjt.keys', t => {
  let data = { a: 1, b: 2, d: { c : 3} };
  let temp = wrap(Immutable.Map(data));
  t.deepEqual(data, temp);
  t.deepEqual(Object.keys(data), Object.keys(temp));
});

test('map#Object.getOwnPropertySymbols', t => {
  let sym = Symbol('RainInFall');
  let data = { [sym] : 10 };
  let temp = set(wrap(Immutable.Map()), sym, 10);
  t.deepEqual(data, temp);
  t.deepEqual(Object.getOwnPropertySymbols(data), Object.getOwnPropertySymbols(temp));
});
