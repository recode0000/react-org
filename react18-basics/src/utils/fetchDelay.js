
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default delay


// Promise objectの復習
// ・最初にPending（未確定）状態のPromiseオブジェクトを返す
// ・await: 確定状態になるまでまつ
// ・約三秒後にresolve()が実行されてfullfilled状態になる

// await delay(3000)