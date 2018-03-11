// @flow

type Message = {| foo: number |};

function bar(): Message {
  const opts = ({ foo: 1 }: any);
  const message = { ...opts, bar: 1 };
  return message;
}

