import Upload from './src/upload.js';

(async () => {
    const image = "/Users/sattorbek/Mac/Documents/mac-wallpaper.jpg";
    const upload = new Upload();
    const response = await upload.uploadImage(image);
    console.log(response);
})();