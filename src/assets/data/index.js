import YoutubeVideos from "./b.json" assert { type: "json" };
import Products from "./products.json" assert { type: "json" };

const regex = /\((.*?)\)/;

const youtubeData = YoutubeVideos.map(({ videoId, title }) => ({
  videoId,
  title,
  sku: regex.exec(title) ? regex.exec(title)[1].toLocaleLowerCase() : "",
}));

const modelYoutubeVideoMedia = {
  youtube: true,
  type: "video",
  key: 1,
  url: "https://www.youtube.com/embed/",
};

const addYoutubeVideoInProducts = Products.map((product) => {
  const sku = product.sku;
  const existVideo = youtubeData.find((ybv) => ybv.sku === sku);

  return {
    ...product,

    media: [
      {
        ...modelYoutubeVideoMedia,
        url: `${modelYoutubeVideoMedia.url}${
          existVideo ? existVideo.videoId : ""
        }`,
      },
      ...product.media.map((mediaItem) => ({
        ...mediaItem,
        key: mediaItem.key + 1,
      })),
    ],

    ...(product.variations
      ? {
          variations: [
            ...product.variations.map((variation) => ({
              ...variation,
              icon: { ...variation.icon, key: variation.icon.key + 1 },
            })),
          ],
        }
      : {}),
  };
});

console.log(JSON.stringify(addYoutubeVideoInProducts));
