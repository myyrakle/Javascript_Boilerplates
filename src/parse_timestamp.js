//타임스탬프를 20XX-XX-XX 형식으로 변환
function timestampToDateString(timestamp, deliminator='-'){
  const date = new Date(timestamp);
  return `${date.getFullYear()}${deliminator}${("00" + (date.getMonth() + 1)).slice(-2)}${deliminator}${("00" + date.getDate()).slice(-2) }`;
}
