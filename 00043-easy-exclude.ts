// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >,
]

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T

// Explanation here: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
