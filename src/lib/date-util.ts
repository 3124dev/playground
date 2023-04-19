/**
 * Date 정보를 받아서 평균 시간을 반환한다.
 * 년도와 일자와는 상관없이 오직 시간 정보에 대한 평균만을 계산한다.
 * @param dateStringList ['2023-02-06T20:00:00+0900', ...]
 * @returns
 */
export const getAvgTime = (dateStringList: string[]) => {
  const totalSeconds = dateStringList.reduce((accumulator, dateString) => {
    const date = new Date(dateString);
    const timeOnly = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return accumulator + timeOnly;
  }, 0);

  const averageSeconds = totalSeconds / dateStringList.length;
  const avgHour = Math.floor(averageSeconds / 3600);
  const avgMinute = Math.floor((averageSeconds % 3600) / 60);
  const avgSecond = Math.floor(averageSeconds % 60);

  const hours = avgHour.toString().padStart(2, '0');
  const minutes = avgMinute.toString().padStart(2, '0');
  const seconds = avgSecond.toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
