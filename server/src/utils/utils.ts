
const idChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function generateId(length: number = 6): string {
  var result = '';
  for (var i = length; i > 0; --i) result += idChars[Math.floor(Math.random() * idChars.length)];
  return result;
}