export function inputLengthValid(input) {
  if (input.length < 6 || input.length > 20) {
    return '6~20文字で入力してください。';
  }
  const pattern = /^[0-9a-zA-Z]+$/
  if (!pattern.test(input)) {
    return '半角英数字で入力してください。';
  }
  return '';
}

export function passwordValid(input, checkInput) {
  if (input !== checkInput) {
    return 'パスワードが一致しません。';
  }
  return '';
}

export function errorCheck(loginInput, passInput, checkPassInput) {
  console.log(loginInput)
  if (loginInput!=='' || passInput!=='' || checkPassInput!=='') {
    return true;
  }
  return false;
}