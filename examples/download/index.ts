import { Innertube, UniversalCache } from 'youtubei.js';
import { readFileSync, existsSync, mkdirSync, createWriteStream } from 'fs';
import { streamToIterable } from 'youtubei.js/dist/src/utils/Utils';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });

  const search = await yt.music.search('No Copyright Background Music', { type: 'album' });

  if (!search.results)
    throw new Error('Filter "type" must be used');

  const album = await yt.music.getAlbum(search.results[0].id as string);

  if (!album.contents)
    throw new Error('Album appears to be empty');

  console.info(`Album "${album.header?.title.toString()}" by ${album.header?.author?.name}`, '\n');

  for (const song of album.contents) {
    const stream = await yt.download(song.id as string, {
      type: 'audio', // audio, video or audio+video
      quality: 'best', // best, bestefficiency, 144p, 240p, 480p, 720p and so on.
      format: 'mp4' // media container format 
    });

    console.info(`Downloading ${song.title} (${song.id})`);

    const dir = `./${album.header?.title.toString()}`;

    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    const file = createWriteStream(`${dir}/${song.title?.replace(/\//g, '')}.m4a`);

    for await (const chunk of streamToIterable(stream)) {
      file.write(chunk);
    }

    console.info(`${song.id} - Done!`, '\n');
  }

  console.info(`Downloaded ${album.header?.song_count}!`);
})();