// 爬取文件中的颜色

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const readline = require("readline");

// 匹配十六进制颜色的正则表达式
const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
// 匹配 RGB 颜色的正则表达式
const rgbColorRegex = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g;
// 匹配 RGBA 颜色的正则表达式
const rgbaColorRegex =
  /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)/g;

// 查找文件夹中的所有文件
function findFilesInDirectory(directory) {
  const fullDirectory = path.resolve(directory).replace(/\\/g, "/"); // windows 須將 \ 轉換為 /
  const files = glob.sync(`${fullDirectory}/**/*.*`);
  return files;
  // return glob.sync(path.join(directory, "**", "*.*")); // Linux 環境 / 解析
}

// 将十六进制颜色转换为 RGB
function hexToRgb(hex) {
  let normalizedHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;
  const bigint = parseInt(normalizedHex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// 将 RGB 转换为 HSL
function rgbToHsl([r, g, b]) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s, l]; // Hue in degrees
}

// 从文件内容中提取颜色
function extractColorsFromFile(filePath) {
  return new Promise((resolve, reject) => {
    const colors = new Set();
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      let matches;

      // 匹配十六进制颜色
      matches = line.match(hexColorRegex);
      if (matches) {
        matches.forEach((color) => colors.add(color));
      }

      // 匹配 RGB 颜色
      matches = line.match(rgbColorRegex);
      if (matches) {
        matches.forEach((color) => colors.add(color));
      }

      // 匹配 RGBA 颜色
      matches = line.match(rgbaColorRegex);
      if (matches) {
        matches.forEach((color) => colors.add(color));
      }
    });

    rl.on("close", () => resolve(Array.from(colors)));
    rl.on("error", (err) => reject(err));
  });
}

// 将颜色排序
function sortColorsByHue(colors) {
  return colors.sort((a, b) => {
    const hslA = rgbToHsl(parseColorToRgb(a));
    const hslB = rgbToHsl(parseColorToRgb(b));
    return hslA[0] - hslB[0]; // Compare Hue values
  });
}

// 解析颜色为 RGB 格式
function parseColorToRgb(color) {
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgb")) {
    return color.match(/\d+/g).map(Number);
  }
  return [0, 0, 0]; // Fallback to black if parsing fails
}

// 主函数，遍历文件夹并提取颜色
async function findColorsInDirectory(directory) {
  try {
    const files = findFilesInDirectory(directory);
    const allColors = new Set();

    for (const file of files) {
      const colors = await extractColorsFromFile(file);
      colors.forEach((color) => allColors.add(color));
    }

    // 将颜色数组化并按颜色排序
    const sortedColors = sortColorsByHue(Array.from(allColors));

    console.log("Found and color-sorted colors:");
    console.log(sortedColors);
  } catch (err) {
    console.error("Error:", err);
  }
}

// 调用主函数，传入你要扫描的目录路径
const directoryPath = "./src"; // 替换为你的目录路径
findColorsInDirectory(directoryPath);
