# Image Upload Script

A simple and efficient script for uploading an image using a custom `Upload` class. This script allows you to upload an image file from your local system to a specified destination.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Description

This script demonstrates how to use an `Upload` class to handle image uploads. In this example, an image (`mac-wallpaper.jpg`) is uploaded to a destination server or service. The script uses `async/await` for asynchronous operations and handles the upload process neatly in a self-executing function.

This project is hosted under the **user** `sattorbekh` and the **repository** `imgur` on GitHub.

## Installation

To run this project, ensure you have Node.js installed. If it's not installed, you can download it from [Node.js Official Website](https://nodejs.org/).

### 1. Clone the repository:

```bash
git clone https://github.com/sattorbekh/imgur.git
cd imgur
```

### 2. Install the necessary dependencies:

This script assumes you have a custom `Upload` class or module, so make sure to install any required dependencies for the upload functionality.

If you're using external libraries (e.g., `axios` for HTTP requests), run:

```bash
npm install
```

### 3. Ensure the required `upload.js` module is available:

The script expects an `Upload` class located in `./src/upload.js`. This class should have an `uploadImage(imagePath)` method.

## Usage

To run the script, use the following command in your terminal:

```bash
node index.js
```

The script will:
1. Load the image located at `/Users/sattorbek/Mac/Documents/mac-wallpaper.jpg`.
2. Upload the image using the `Upload` class's `uploadImage` method.
3. Print the response from the server to the console.

### Example

The main part of the script is:

```javascript
import Upload from './src/upload.js';

(async () => {
    const imagePath = "/Users/sattorbek/Documents/mac-wallpaper.jpg";
    const upload = new Upload();
    const response = await upload.uploadImage(imagePath);
    console.log(response);
})();
```

### Example Response

After the image is successfully uploaded, the API will return a response similar to the following:

```json
{
  "data": {
    "link": "https://imgur.com/adKcslM"
  }
}
```

In this case, the response contains a `link` property that points to the uploaded image on the remote server.

### Image Upload

You can replace the `imagePath` variable with the path to any image file you wish to upload. Make sure that the `uploadImage` method in the `Upload` class is set up to handle the upload to your desired server or service (e.g., cloud storage, an API endpoint, etc.).

## File Structure

```
/imgur
|-- /src
|   |-- upload.js       # Upload class that handles the image upload logic
|-- README.md          # This file
|-- LICENSE
|-- package.json       # Node.js package file (if applicable)
```

- `src/upload.js`: This is where the logic for the image upload resides.
- `index.js`: This is the entry point for the application, where the image upload is triggered.
- `README.md`: This file.
- `package.json`: Contains dependencies and project configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Notes:

- **Upload class**: The `upload.js` file should define a class `Upload` with a method `uploadImage(imagePath)`. You can add additional functionality such as validation, error handling, and custom configurations inside that class.
- **Image path**: The `imagePath` variable stores the path to the image you want to upload. Replace the path with the one that suits your needs.

Feel free to modify the `README.md` if your script changes or if you add more features.

Let me know if you need further help with any part of the project!
