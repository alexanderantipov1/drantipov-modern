// Gallery "@2x" filenames are not reliable resolution indicators. These are
// verified same-case, same-view previews of the corresponding gallery composites.
// Keep original gallery assets when no larger version of that view exists.
const largerViews: Record<string, string> = {
  "019/2": "preview@2x-eff14a5a.jpg",
  "020/2": "preview-6221af45.jpg",
  "021/2": "preview@2x-c405c5b5.jpg",
  "022/3": "preview@2x-aa359c01.jpg",
  "026/3": "preview@2x-0e7ec9f7.jpg",
  "026/4": "preview-67e15ac7.jpg",
  "030/2": "preview@2x-38ccc814.jpg",
  "030/5": "preview@2x-030239b0.jpg",
  "031/2": "preview@2x-ed4889d6.jpg",
  "032/4": "preview@2x-dde038ba.jpg",
  "033/1": "preview-b4198776.jpg",
  "035/1": "preview-2116b385.jpg",
  "035/5": "preview@2x-b5a6716e.jpg",
  "039/3": "preview-7d908dfb.jpg",
  "043/2": "preview@2x-ccd578bb.jpg",
  "043/4": "preview-a3a8c8eb.jpg",
  "044/1": "preview-3c9a49d9.jpg",
  "047/5": "preview-aa537d0c.jpg",
  "049/4": "preview@2x-8151ae83.jpg",
  "051/1": "preview@2x-c3a69e8f.jpg",
};

const width360 = new Set([
  "031/1", "032/5", "037/5", "038/4", "040/6", "043/5", "051/4",
]);
const width640 = new Set([
  "020/2", "022/6", "024/3", "026/4", "033/1", "034/1", "034/6",
  "035/1", "036/4", "039/3", "041/3", "041/5", "043/4", "044/1",
  "045/3", "047/5",
]);

// Verified alternate before/after composites for the eight surgical case pages.
// 045's main image already shows its side profile, so don't repeat it here.
export const jawCaseAdditionalViews: Record<string, string[]> = {
  oms000045: [
    "/images/cases/corrective-jaw-surgery/oms000045/2/gallery@2x-169c8a85.jpg",
    "/images/cases/corrective-jaw-surgery/oms000045/4/gallery@2x-29ef8f91.jpg",
  ],
  oms000046: [
    "/images/cases/corrective-jaw-surgery/oms000046/2/gallery@2x-92e0b6c0.jpg",
    "/images/cases/corrective-jaw-surgery/oms000046/4/gallery@2x-6e10b165.jpg",
  ],
  oms000047: [
    "/images/cases/corrective-jaw-surgery/oms000047/2/gallery@2x-0f0db188.jpg",
    "/images/cases/corrective-jaw-surgery/oms000047/3/gallery@2x-f8db8eb2.jpg",
  ],
  oms000048: [
    "/images/cases/corrective-jaw-surgery/oms000048/2/gallery@2x-a1cab86d.jpg",
    "/images/cases/corrective-jaw-surgery/oms000048/3/gallery@2x-c2ecbc1f.jpg",
  ],
  oms000049: [
    "/images/cases/corrective-jaw-surgery/oms000049/2/gallery@2x-88276f2e.jpg",
    "/images/cases/corrective-jaw-surgery/oms000049/3/gallery@2x-f37124fe.jpg",
  ],
  oms000050: [
    "/images/cases/corrective-jaw-surgery/oms000050/2/gallery@2x-759e36c4.jpg",
    "/images/cases/corrective-jaw-surgery/oms000050/3/gallery@2x-a2fced22.jpg",
  ],
  oms000051: [
    "/images/cases/corrective-jaw-surgery/oms000051/2/gallery@2x-0d180ee1.jpg",
    "/images/cases/corrective-jaw-surgery/oms000051/3/gallery@2x-ac8c18ca.jpg",
  ],
  oms000052: [
    "/images/cases/corrective-jaw-surgery/oms000052/2/gallery@2x-39848b9d.jpg",
    "/images/cases/corrective-jaw-surgery/oms000052/3/gallery@2x-e2f7d0a1.jpg",
  ],
};

export function jawGalleryPhoto(src: string): { src: string; width: number } {
  const match = src.match(/^\/images\/cases\/corrective-jaw-surgery\/oms000(\d{3})\/(\d+)\/gallery@2x-[a-f0-9]+\.jpg$/);
  if (!match) throw new Error(`Unexpected jaw gallery image: ${src}`);
  const key = `${match[1]}/${match[2]}`;
  const replacement = largerViews[key];
  return {
    src: replacement ? src.replace(/gallery@2x-[a-f0-9]+\.jpg$/, replacement) : src,
    width: width360.has(key) ? 360 : width640.has(key) ? 640 : replacement ? 1280 : 720,
  };
}