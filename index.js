// @flow strict

import { returnConstant } from './my-module';

type Message = {| foo: number |};

function bar(): Message {
  const opts = ({ foo: returnConstant() }: Message);
  const message = { ...opts, };
  return message;
}
