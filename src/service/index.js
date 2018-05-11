import NebPay from 'nebpay'
const nebPay = new NebPay()
const dappAddress = 'n21nUqpeHXYntDLJsdva2sZe5tD2g5hEWPo'

/**
 *
 * @param {String} callFunction 调用合约的方法
 * @param {Array} param 请求的参数
 * @param {Boolean} needPay 是否需要支付
 */
const api = function (callFunction, param = [], needPay = false) {
  return new Promise((resolve, reject) => {
    const to = dappAddress
    const value = '0'
    const callArgs = JSON.stringify(param)
    /**
     * 如果只查询类的请求 就不需要去支付 直接使用 nebPay 的 simulateCall 即可
     * 如果不是查询类的 需要调用支付接口 使用 nebPay 的 call 调用
     */
    const way = needPay ? 'call' : 'simulateCall'
    nebPay[way](to, value, callFunction, callArgs, {
      listener: (res) => {
        console.log('listener', res)
        try {
          resolve(JSON.parse(res.result))
        } catch (e) {
          reject(res.result)
        }
      }
    })
  })
}

export default {
  // 保存内容
  save ({title, content}) {
    return api('save', [title, content], true)
  },
  // 查看自己的时间轴
  query () {
    return api('query')
  },
  // 查看他人的时间轴
  find ({key}) {
    return api('find', [key])
  }
}
