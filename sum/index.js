'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}
function multi(numbers) {
    let result = 1;
    for (const num of numbers) {
        result = result * num;
    }
    return result;
  }
/**
 * 特定の関数をモジュールとしてファイルの外部から使えるようにするには、
 * 使えるようにしたい関数やオブジェクトを module.exports に代入します。
 */
module.exports = {
    // 左側の add はオブジェクトのプロパティ（メソッド）の名前で、右側の add は上で定義した関数です。
  add: add,
  multi: multi
};
/**
 * 左側と右側が同じ場合は以下のように省略できる
 * module.exports = { add };
 */