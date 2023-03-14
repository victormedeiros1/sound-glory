const secondsToMinutes = (time: number, text: boolean = false) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 3600) % 60);

  if (text) {
    return `${hours > 0 ? hours + "hr" : ""} ${minutes}min ${seconds}s`;
  } else {
    return `${hours > 0 ? hours + ":" : ""} ${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
};

export { secondsToMinutes };
