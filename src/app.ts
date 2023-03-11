enum cols {
  GREEN = 'green',
  RED = 'red'
}

type Fields = `${cols}`;


const colors = {
  GREEN: 'green',
  RED: 'red'
} as const;

type asta = {
  col: typeof colors[keyof typeof colors][]
}

const o: asta = { col: ['red'] };

let a:Fields = 'red';

//-------------------------------------

type t1 = 'a' | 'b' | 'c';

type t2 = {
  [key in t1]: string
}

// let b: t2 = {a: 'sdf'};

const str: number | string = 'fsdgfsd' ||1;

