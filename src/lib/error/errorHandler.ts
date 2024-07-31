import type { TRPCCustomError } from '@/lib/error/type'

export const errorHandler = (error: TRPCCustomError) => {
  if (error.data === null || error.data === undefined) {
    alert('想定しないエラーが発生しました。')
    return
  }
  /*** @note zodのrequest バリデーション **/
  if (error.data.zodError !== null) {
    const messageValues = Object.values(error.data.zodError.fieldErrors)
    const messages = messageValues[0]
    if (messages === undefined || messages.length === 0) {
      alert('入力をした値をご確認ください。')
      return
    }
    alert(messages.join('\n'))
    return
  }
  /*** @note サーバー側でバリデーションエラーを返すとき **/
  if (error.data.code === 'CONFLICT' && error.data.httpStatus === 409) {
    alert(error.message)
    return
  }
  // 原因不明のエラー
  alert('原因不明のエラーが発生しました。')
  return
}
