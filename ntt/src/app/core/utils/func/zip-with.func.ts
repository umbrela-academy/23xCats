/**
 * -- The zipWith family generalises the zip family by zipping with the
-- function given as the first argument, instead of a tupling function.

----------------------------------------------
-- 'zipWith' generalises 'zip' by zipping with the
-- function given as the first argument, instead of a tupling function.
--
-- > zipWith (,) xs ys == zip xs ys
-- > zipWith f [x1,x2,x3..] [y1,y2,y3..] == [f x1 y1, f x2 y2, f x3 y3..]
--
-- For example, @'zipWith' (+)@ is applied to two lists to produce the list of
-- corresponding sums:
--
-- >>> zipWith (+) [1, 2, 3] [4, 5, 6]
-- [5,7,9]
--
-- 'zipWith' is right-lazy:
--
-- >>> let f = undefined
-- >>> zipWith f [] undefined
-- []
--
-- 'zipWith' is capable of list fusion, but it is restricted to its
-- first list argument and its resulting list.
{-# NOINLINE [1] zipWith #-}  -- See Note [Fusion for zipN/zipWithN]
  zipWith :: (a->b->c) -> [a]->[b]->[c]
  zipWith f = go
    where
      go [] _ = []
      go _ [] = []
      go (x:xs) (y:ys) = f x y : go xs ys
 * */
export const zipWith: ZipWithType =
  <A, B, C>(abc: AtoBtoC<A, B, C>) =>
  (as: A[]) =>
  (bs: B[]) =>
    as.map((_, i) => abc(as[i])(bs[i]));

export type ZipWithType = <A, B, C>(
  abc: AtoBtoC<A, B, C>
) => (as: A[]) => (bs: B[]) => C[];

export type AtoBtoC<A, B, C> = (a: A) => (b: B) => C;

/**
 * 'zip' takes two lists and returns a list of
-- corresponding pairs.
--
-- >>> zip [1, 2] ['a', 'b']
-- [(1,'a'),(2,'b')]
--
-- If one input list is shorter than the other, excess elements of the longer
-- list are discarded, even if one of the lists is infinite:
--
-- >>> zip [1] ['a', 'b']
-- [(1,'a')]
-- >>> zip [1, 2] ['a']
-- [(1,'a')]
-- >>> zip [] [1..]
-- []
-- >>> zip [1..] []
-- []
--
-- 'zip' is right-lazy:
--
-- >>> zip [] undefined
-- []
-- >>> zip undefined []
-- *** Exception: Prelude.undefined
-- ...
--
-- 'zip' is capable of list fusion, but it is restricted to its
-- first list argument and its resulting list.
 * 
*/
export const zip: ZipType =
  <A, B>(as: A[]) =>
  (bs: B[]) =>
    zipWith((x: A) => (y: B) => [x, y] as [A, B])(as)(bs);

export type ZipType = <A, B>(as: A[]) => (bs: B[]) => [A, B][];
