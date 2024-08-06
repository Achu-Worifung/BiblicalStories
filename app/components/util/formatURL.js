

export default function formatURL(url) {
    return url.replace(/ /g, '-');
  }
  export function decodeURL(url) {
    return url.replace('-', ' ');
  }