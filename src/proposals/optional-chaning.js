const obj = {
    a: 3,
    b: null,
    c: {
        d: undefined,
        e: [1, 2, 3],
    }

};

const test1 = obj.b?.test;
const test2 = obj.c.d?.test;
const test3 = obj.c.e[1];
const test4 = obj.c.e[5]?.test;

console.log(test1, test2, test3, test4);
