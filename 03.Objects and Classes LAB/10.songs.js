function songs(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];

  let numberOfSongs = input.shift();

  let command = input.pop();

  for (let index = 0; index < numberOfSongs; index++) {
    let [type, name, time] = input[index].split('_');

    let song = new Song(type, name, time);

    songs.push(song);
  }

  if (command === 'all') {
    songs.forEach((x) => console.log(x.name));
  } else {
    let filter = songs.filter((x) => x.type === command);
    filter.forEach((x) => console.log(x.name));
  }
}

songs([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);
