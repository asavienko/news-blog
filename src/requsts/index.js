export const getRandomImage = () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(({ message }) => message);

export const loginUser = () =>
  fetch("https://api.mockaroo.com/api/f0efa440?count=1000&key=c5461b50");
