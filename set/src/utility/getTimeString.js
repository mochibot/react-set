

export const getTimeString = (sec) => {
  let hours = Math.floor (sec / 3600);
  let minutes = Math.floor ((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;

  return `${hours}:${minutes}:${seconds}`; 
}