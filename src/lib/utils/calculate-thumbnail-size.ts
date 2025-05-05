export default function calculateThumbnailSize(numberOfImages: number) {
  if (numberOfImages === 2) {
    return 'lg';
  } else if (numberOfImages === 3) {
    return 'md';
  } else {
    return 'sm';
  }
}
