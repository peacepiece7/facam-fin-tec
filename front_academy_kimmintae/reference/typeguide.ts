// helper function

interface Foo {
  foo: string;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({ foo: "ok", common: "wow" }));
