const obj = {
    a: 3,
    b: null,
    c: {
        d: undefined,
        e: [1, 2, 3],
    }

};

const test1 = obj.b?.test ?? 'test1';
const test2 = obj.c.d?.test ?? 'test2';
const test3 = obj.c.e[1] ?? 'test3';
const test4 = obj.c.e[5]?.test ?? 'test4';

console.log(test1, test2, test3, test4);
