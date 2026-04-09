"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

interface CaseData {
  id: string;
  label: string;
  title?: string;
  description?: string;
  images: string[];
}

const jawCases: CaseData[] = [
  { id: "oms000019", label: "Case 1", images: ["/images/cases/corrective-jaw-surgery/oms000019/1/gallery@2x-a8de713f.jpg","/images/cases/corrective-jaw-surgery/oms000019/2/gallery@2x-c7fcf4e4.jpg","/images/cases/corrective-jaw-surgery/oms000019/3/gallery@2x-d02fd7bf.jpg","/images/cases/corrective-jaw-surgery/oms000019/4/gallery@2x-00da6612.jpg"] },
  { id: "oms000020", label: "Case 2", images: ["/images/cases/corrective-jaw-surgery/oms000020/1/gallery@2x-2a2bfdf1.jpg","/images/cases/corrective-jaw-surgery/oms000020/2/gallery@2x-9fb88fcb.jpg","/images/cases/corrective-jaw-surgery/oms000020/3/gallery@2x-251efca0.jpg","/images/cases/corrective-jaw-surgery/oms000020/4/gallery@2x-3e2e007c.jpg"] },
  { id: "oms000021", label: "Case 3", images: ["/images/cases/corrective-jaw-surgery/oms000021/1/gallery@2x-e21aea25.jpg","/images/cases/corrective-jaw-surgery/oms000021/2/gallery@2x-30859fc7.jpg","/images/cases/corrective-jaw-surgery/oms000021/3/gallery@2x-31062b14.jpg","/images/cases/corrective-jaw-surgery/oms000021/4/gallery@2x-b9f39a13.jpg"] },
  { id: "oms000022", label: "Case 4", images: ["/images/cases/corrective-jaw-surgery/oms000022/1/gallery@2x-2429fa85.jpg","/images/cases/corrective-jaw-surgery/oms000022/2/gallery@2x-52f8744f.jpg","/images/cases/corrective-jaw-surgery/oms000022/3/gallery@2x-95ffeb24.jpg","/images/cases/corrective-jaw-surgery/oms000022/4/gallery@2x-fa1090ad.jpg","/images/cases/corrective-jaw-surgery/oms000022/5/gallery@2x-7e2806dd.jpg","/images/cases/corrective-jaw-surgery/oms000022/6/gallery@2x-c8668ba4.jpg","/images/cases/corrective-jaw-surgery/oms000022/7/gallery@2x-d70d1c02.jpg"] },
  { id: "oms000023", label: "Case 5", images: ["/images/cases/corrective-jaw-surgery/oms000023/1/gallery@2x-fcb5aaa1.jpg","/images/cases/corrective-jaw-surgery/oms000023/2/gallery@2x-be05aa4e.jpg","/images/cases/corrective-jaw-surgery/oms000023/3/gallery@2x-6888eb17.jpg","/images/cases/corrective-jaw-surgery/oms000023/4/gallery@2x-374ccd54.jpg"] },
  { id: "oms000024", label: "Case 6", images: ["/images/cases/corrective-jaw-surgery/oms000024/1/gallery@2x-4b9347a9.jpg","/images/cases/corrective-jaw-surgery/oms000024/2/gallery@2x-be6589ac.jpg","/images/cases/corrective-jaw-surgery/oms000024/3/gallery@2x-373d5e02.jpg","/images/cases/corrective-jaw-surgery/oms000024/4/gallery@2x-4bfb1948.jpg"] },
  { id: "oms000025", label: "Case 7", images: ["/images/cases/corrective-jaw-surgery/oms000025/1/gallery@2x-519ac21c.jpg","/images/cases/corrective-jaw-surgery/oms000025/2/gallery@2x-74d2d77b.jpg","/images/cases/corrective-jaw-surgery/oms000025/3/gallery@2x-3bd78407.jpg","/images/cases/corrective-jaw-surgery/oms000025/4/gallery@2x-c01f6eb7.jpg"] },
  { id: "oms000026", label: "Case 8", images: ["/images/cases/corrective-jaw-surgery/oms000026/1/gallery@2x-ed3f2194.jpg","/images/cases/corrective-jaw-surgery/oms000026/2/gallery@2x-0cdca9c0.jpg","/images/cases/corrective-jaw-surgery/oms000026/3/gallery@2x-c5642026.jpg","/images/cases/corrective-jaw-surgery/oms000026/4/gallery@2x-98bf9157.jpg","/images/cases/corrective-jaw-surgery/oms000026/5/gallery@2x-e2cddb23.jpg"] },
  { id: "oms000027", label: "Case 9", images: ["/images/cases/corrective-jaw-surgery/oms000027/1/gallery@2x-60ea71f9.jpg","/images/cases/corrective-jaw-surgery/oms000027/2/gallery@2x-f3fa9812.jpg","/images/cases/corrective-jaw-surgery/oms000027/3/gallery@2x-cb2e5c3b.jpg"] },
  { id: "oms000028", label: "Case 10", images: ["/images/cases/corrective-jaw-surgery/oms000028/1/gallery@2x-1fc8c938.jpg","/images/cases/corrective-jaw-surgery/oms000028/2/gallery@2x-b3fc0b3e.jpg","/images/cases/corrective-jaw-surgery/oms000028/3/gallery@2x-5f1dd89e.jpg","/images/cases/corrective-jaw-surgery/oms000028/4/gallery@2x-1320d10a.jpg"] },
  { id: "oms000029", label: "Case 11", images: ["/images/cases/corrective-jaw-surgery/oms000029/1/gallery@2x-0b27ed7d.jpg","/images/cases/corrective-jaw-surgery/oms000029/2/gallery@2x-b1d8e618.jpg","/images/cases/corrective-jaw-surgery/oms000029/3/gallery@2x-9d18c870.jpg","/images/cases/corrective-jaw-surgery/oms000029/4/gallery@2x-fdf75e83.jpg","/images/cases/corrective-jaw-surgery/oms000029/5/gallery@2x-284d2d34.jpg"] },
  { id: "oms000030", label: "Case 12", images: ["/images/cases/corrective-jaw-surgery/oms000030/1/gallery@2x-4bf276b6.jpg","/images/cases/corrective-jaw-surgery/oms000030/2/gallery@2x-c08c5858.jpg","/images/cases/corrective-jaw-surgery/oms000030/3/gallery@2x-c1a640ac.jpg","/images/cases/corrective-jaw-surgery/oms000030/4/gallery@2x-0991b433.jpg","/images/cases/corrective-jaw-surgery/oms000030/5/gallery@2x-b6cf9c1e.jpg","/images/cases/corrective-jaw-surgery/oms000030/6/gallery@2x-93e26c17.jpg"] },
  { id: "oms000031", label: "Case 13", images: ["/images/cases/corrective-jaw-surgery/oms000031/1/gallery@2x-b2329413.jpg","/images/cases/corrective-jaw-surgery/oms000031/2/gallery@2x-b608bc29.jpg","/images/cases/corrective-jaw-surgery/oms000031/3/gallery@2x-bee5efe0.jpg","/images/cases/corrective-jaw-surgery/oms000031/4/gallery@2x-57e62785.jpg","/images/cases/corrective-jaw-surgery/oms000031/5/gallery@2x-375d8150.jpg","/images/cases/corrective-jaw-surgery/oms000031/6/gallery@2x-19e6c3d5.jpg"] },
  { id: "oms000032", label: "Case 14", images: ["/images/cases/corrective-jaw-surgery/oms000032/1/gallery@2x-999514bd.jpg","/images/cases/corrective-jaw-surgery/oms000032/2/gallery@2x-faacbbdd.jpg","/images/cases/corrective-jaw-surgery/oms000032/3/gallery@2x-9ae41ca8.jpg","/images/cases/corrective-jaw-surgery/oms000032/4/gallery@2x-4aa04b82.jpg","/images/cases/corrective-jaw-surgery/oms000032/5/gallery@2x-78f1a890.jpg"] },
  { id: "oms000033", label: "Case 15", images: ["/images/cases/corrective-jaw-surgery/oms000033/1/gallery@2x-04a50ab9.jpg","/images/cases/corrective-jaw-surgery/oms000033/2/gallery@2x-8538f84b.jpg","/images/cases/corrective-jaw-surgery/oms000033/3/gallery@2x-0676ff17.jpg","/images/cases/corrective-jaw-surgery/oms000033/4/gallery@2x-34994b71.jpg","/images/cases/corrective-jaw-surgery/oms000033/5/gallery@2x-0b5376c2.jpg","/images/cases/corrective-jaw-surgery/oms000033/6/gallery@2x-4c7524ad.jpg"] },
  { id: "oms000034", label: "Case 16", images: ["/images/cases/corrective-jaw-surgery/oms000034/1/gallery@2x-1d281548.jpg","/images/cases/corrective-jaw-surgery/oms000034/2/gallery@2x-3e88ed95.jpg","/images/cases/corrective-jaw-surgery/oms000034/3/gallery@2x-85769200.jpg","/images/cases/corrective-jaw-surgery/oms000034/4/gallery@2x-c39c542a.jpg","/images/cases/corrective-jaw-surgery/oms000034/5/gallery@2x-a9454f17.jpg","/images/cases/corrective-jaw-surgery/oms000034/6/gallery@2x-4f11c78e.jpg"] },
  { id: "oms000035", label: "Case 17", images: ["/images/cases/corrective-jaw-surgery/oms000035/1/gallery@2x-dcd6be85.jpg","/images/cases/corrective-jaw-surgery/oms000035/2/gallery@2x-9361a7be.jpg","/images/cases/corrective-jaw-surgery/oms000035/3/gallery@2x-2cc4f8b1.jpg","/images/cases/corrective-jaw-surgery/oms000035/4/gallery@2x-05e724f3.jpg","/images/cases/corrective-jaw-surgery/oms000035/5/gallery@2x-e3017221.jpg","/images/cases/corrective-jaw-surgery/oms000035/6/gallery@2x-215bcc27.jpg"] },
  { id: "oms000036", label: "Case 18", images: ["/images/cases/corrective-jaw-surgery/oms000036/1/gallery@2x-af6142c7.jpg","/images/cases/corrective-jaw-surgery/oms000036/2/gallery@2x-76d2c17e.jpg","/images/cases/corrective-jaw-surgery/oms000036/3/gallery@2x-af369f3b.jpg","/images/cases/corrective-jaw-surgery/oms000036/4/gallery@2x-d40ebc12.jpg","/images/cases/corrective-jaw-surgery/oms000036/5/gallery@2x-5af0b266.jpg"] },
  { id: "oms000037", label: "Case 19", images: ["/images/cases/corrective-jaw-surgery/oms000037/1/gallery@2x-f447f0c0.jpg","/images/cases/corrective-jaw-surgery/oms000037/2/gallery@2x-f97e8ca3.jpg","/images/cases/corrective-jaw-surgery/oms000037/3/gallery@2x-464d8b27.jpg","/images/cases/corrective-jaw-surgery/oms000037/4/gallery@2x-69c1555e.jpg","/images/cases/corrective-jaw-surgery/oms000037/5/gallery@2x-a3b425a4.jpg","/images/cases/corrective-jaw-surgery/oms000037/6/gallery@2x-4efcc5d9.jpg"] },
  { id: "oms000038", label: "Case 20", images: ["/images/cases/corrective-jaw-surgery/oms000038/1/gallery@2x-293555c2.jpg","/images/cases/corrective-jaw-surgery/oms000038/2/gallery@2x-b045c6cc.jpg","/images/cases/corrective-jaw-surgery/oms000038/3/gallery@2x-ea5acd85.jpg","/images/cases/corrective-jaw-surgery/oms000038/4/gallery@2x-51f19beb.jpg","/images/cases/corrective-jaw-surgery/oms000038/5/gallery@2x-f1bd526a.jpg","/images/cases/corrective-jaw-surgery/oms000038/6/gallery@2x-fe95f54b.jpg"] },
  { id: "oms000039", label: "Case 21", images: ["/images/cases/corrective-jaw-surgery/oms000039/1/gallery@2x-4099cbc4.jpg","/images/cases/corrective-jaw-surgery/oms000039/2/gallery@2x-a656168b.jpg","/images/cases/corrective-jaw-surgery/oms000039/3/gallery@2x-b72eb63c.jpg","/images/cases/corrective-jaw-surgery/oms000039/4/gallery@2x-96945820.jpg","/images/cases/corrective-jaw-surgery/oms000039/5/gallery@2x-84fb9b31.jpg","/images/cases/corrective-jaw-surgery/oms000039/6/gallery@2x-ed8788de.jpg"] },
  { id: "oms000040", label: "Case 22", images: ["/images/cases/corrective-jaw-surgery/oms000040/1/gallery@2x-1f4a7e04.jpg","/images/cases/corrective-jaw-surgery/oms000040/2/gallery@2x-f2e694c9.jpg","/images/cases/corrective-jaw-surgery/oms000040/3/gallery@2x-a791baa8.jpg","/images/cases/corrective-jaw-surgery/oms000040/4/gallery@2x-4d0d5856.jpg","/images/cases/corrective-jaw-surgery/oms000040/5/gallery@2x-3ee92a92.jpg","/images/cases/corrective-jaw-surgery/oms000040/6/gallery@2x-3c6cfbb9.jpg"] },
  { id: "oms000041", label: "Case 23", images: ["/images/cases/corrective-jaw-surgery/oms000041/1/gallery@2x-1b309979.jpg","/images/cases/corrective-jaw-surgery/oms000041/2/gallery@2x-98c15de3.jpg","/images/cases/corrective-jaw-surgery/oms000041/3/gallery@2x-a2ca2aae.jpg","/images/cases/corrective-jaw-surgery/oms000041/4/gallery@2x-1c5ec8be.jpg","/images/cases/corrective-jaw-surgery/oms000041/5/gallery@2x-c40d0442.jpg","/images/cases/corrective-jaw-surgery/oms000041/6/gallery@2x-df95a962.jpg"] },
  { id: "oms000042", label: "Case 24", images: ["/images/cases/corrective-jaw-surgery/oms000042/1/gallery@2x-e327c977.jpg","/images/cases/corrective-jaw-surgery/oms000042/2/gallery@2x-dee013e9.jpg","/images/cases/corrective-jaw-surgery/oms000042/3/gallery@2x-f1919b6c.jpg","/images/cases/corrective-jaw-surgery/oms000042/4/gallery@2x-ce876191.jpg","/images/cases/corrective-jaw-surgery/oms000042/5/gallery@2x-4b670dc4.jpg","/images/cases/corrective-jaw-surgery/oms000042/6/gallery@2x-4e75d471.jpg"] },
  { id: "oms000043", label: "Case 25", images: ["/images/cases/corrective-jaw-surgery/oms000043/1/gallery@2x-3395e22c.jpg","/images/cases/corrective-jaw-surgery/oms000043/2/gallery@2x-b1c58462.jpg","/images/cases/corrective-jaw-surgery/oms000043/3/gallery@2x-e4f2db54.jpg","/images/cases/corrective-jaw-surgery/oms000043/4/gallery@2x-bbf60832.jpg","/images/cases/corrective-jaw-surgery/oms000043/5/gallery@2x-59439ad5.jpg","/images/cases/corrective-jaw-surgery/oms000043/6/gallery@2x-b653ddab.jpg"] },
  { id: "oms000044", label: "Case 26", images: ["/images/cases/corrective-jaw-surgery/oms000044/1/gallery@2x-7389fe77.jpg","/images/cases/corrective-jaw-surgery/oms000044/2/gallery@2x-057161a7.jpg","/images/cases/corrective-jaw-surgery/oms000044/3/gallery@2x-d0856dbf.jpg","/images/cases/corrective-jaw-surgery/oms000044/4/gallery@2x-54829d16.jpg","/images/cases/corrective-jaw-surgery/oms000044/5/gallery@2x-8e6c3b6a.jpg"] },
  { id: "oms000045", label: "Case 27", title: "Orthognathic Surgery With Bone Grafting", description: "Maxillary hypoplasia, Class III malocclusion, chin & nasal deviation. Le Fort I osteotomy with bone grafting to maxilla.", images: ["/images/cases/corrective-jaw-surgery/oms000045/1/gallery@2x-ab1233ad.jpg","/images/cases/corrective-jaw-surgery/oms000045/2/gallery@2x-169c8a85.jpg","/images/cases/corrective-jaw-surgery/oms000045/3/gallery@2x-fb0a216b.jpg","/images/cases/corrective-jaw-surgery/oms000045/4/gallery@2x-29ef8f91.jpg","/images/cases/corrective-jaw-surgery/oms000045/5/gallery@2x-e99905e3.jpg"] },
  { id: "oms000046", label: "Case 28", title: "Corrective Jaw Surgery — Complete Face Makeover", description: "Severe maxillary asymmetry, Class II malocclusion. Le Fort I (3-piece), BSSO, bone grafting, rhinoplasty, and autologous fat transfer.", images: ["/images/cases/corrective-jaw-surgery/oms000046/1/gallery@2x-1de479d3.jpg","/images/cases/corrective-jaw-surgery/oms000046/2/gallery@2x-92e0b6c0.jpg","/images/cases/corrective-jaw-surgery/oms000046/3/gallery@2x-339e668a.jpg","/images/cases/corrective-jaw-surgery/oms000046/4/gallery@2x-6e10b165.jpg","/images/cases/corrective-jaw-surgery/oms000046/5/gallery@2x-57a5de45.jpg","/images/cases/corrective-jaw-surgery/oms000046/6/gallery@2x-9cc8d29f.jpg"] },
  { id: "oms000047", label: "Case 29", title: "Maxillomandibular Advancement with Genioplasty", description: "Maxillary hypoplasia, mandibular deficiency, Class III malocclusion. Le Fort I (3-piece, 10mm advancement), BSSO, genioplasty.", images: ["/images/cases/corrective-jaw-surgery/oms000047/1/gallery@2x-09728224.jpg","/images/cases/corrective-jaw-surgery/oms000047/2/gallery@2x-0f0db188.jpg","/images/cases/corrective-jaw-surgery/oms000047/3/gallery@2x-f8db8eb2.jpg","/images/cases/corrective-jaw-surgery/oms000047/4/gallery@2x-fda6d09f.jpg","/images/cases/corrective-jaw-surgery/oms000047/5/gallery@2x-3f3270f6.jpg","/images/cases/corrective-jaw-surgery/oms000047/6/gallery@2x-885e8ea1.jpg"] },
  { id: "oms000048", label: "Case 30", title: "Face Lengthening & Advancement — Aesthetic Jaw Surgery", description: "Short face syndrome, collapsed midface, Class I malocclusion. Le Fort I (3-piece), BSSO advancement, genioplasty lengthening.", images: ["/images/cases/corrective-jaw-surgery/oms000048/1/gallery@2x-c4d70b2c.jpg","/images/cases/corrective-jaw-surgery/oms000048/2/gallery@2x-a1cab86d.jpg","/images/cases/corrective-jaw-surgery/oms000048/3/gallery@2x-c2ecbc1f.jpg","/images/cases/corrective-jaw-surgery/oms000048/4/gallery@2x-0326f963.jpg","/images/cases/corrective-jaw-surgery/oms000048/5/gallery@2x-54fc9703.jpg"] },
  { id: "oms000049", label: "Case 31", title: "Correction of Class II Malocclusion", description: "Asymmetric deformity of upper and lower jaw, Class II skeletal occlusion. BSSO, Le Fort I osteotomy, genioplasty.", images: ["/images/cases/corrective-jaw-surgery/oms000049/1/gallery@2x-dbf9a0f8.jpg","/images/cases/corrective-jaw-surgery/oms000049/2/gallery@2x-88276f2e.jpg","/images/cases/corrective-jaw-surgery/oms000049/3/gallery@2x-f37124fe.jpg","/images/cases/corrective-jaw-surgery/oms000049/4/gallery@2x-e94796df.jpg","/images/cases/corrective-jaw-surgery/oms000049/5/gallery@2x-f9f15636.jpg"] },
  { id: "oms000050", label: "Case 32", title: "Class II Occlusion Anomaly — Corrective Jaw Surgery", description: "Asymmetric deformity of maxilla and mandible, Class II skeletal malocclusion. BSSO, Le Fort I osteotomy, genioplasty.", images: ["/images/cases/corrective-jaw-surgery/oms000050/1/gallery@2x-6781cce7.jpg","/images/cases/corrective-jaw-surgery/oms000050/2/gallery@2x-759e36c4.jpg","/images/cases/corrective-jaw-surgery/oms000050/3/gallery@2x-a2fced22.jpg","/images/cases/corrective-jaw-surgery/oms000050/4/gallery@2x-2ca4dcd1.jpg","/images/cases/corrective-jaw-surgery/oms000050/5/gallery@2x-402ec600.jpg"] },
  { id: "oms000051", label: "Case 33", title: "Correction of Asymmetric Class II Occlusion", description: "Maxillary hypoplasia asymmetry, mandibular hyperplasia, Class III malocclusion, TMJ disorder. BSSO, Le Fort I, genioplasty.", images: ["/images/cases/corrective-jaw-surgery/oms000051/1/gallery@2x-169f3eb2.jpg","/images/cases/corrective-jaw-surgery/oms000051/2/gallery@2x-0d180ee1.jpg","/images/cases/corrective-jaw-surgery/oms000051/3/gallery@2x-ac8c18ca.jpg","/images/cases/corrective-jaw-surgery/oms000051/4/gallery@2x-6d5a473b.jpg","/images/cases/corrective-jaw-surgery/oms000051/5/gallery@2x-32b23c90.jpg"] },
  { id: "oms000052", label: "Case 34", title: "Class II Occlusion Anomaly — Maxillomandibular Advancement", description: "Asymmetric deformity of maxilla and mandible, Class II skeletal occlusion. Le Fort I, BSSO, genioplasty, total advancement.", images: ["/images/cases/corrective-jaw-surgery/oms000052/1/gallery@2x-cef57059.jpg","/images/cases/corrective-jaw-surgery/oms000052/2/gallery@2x-39848b9d.jpg","/images/cases/corrective-jaw-surgery/oms000052/3/gallery@2x-e2f7d0a1.jpg","/images/cases/corrective-jaw-surgery/oms000052/4/gallery@2x-479206d4.jpg","/images/cases/corrective-jaw-surgery/oms000052/5/gallery@2x-9d359eeb.jpg"] },
];

const implantCases: CaseData[] = [
  { id: "di000001", label: "Case 1", title: "All-on-4 and Teeth-in-a-Day Technique", description: "Complete full arch rehabilitation using the All-on-4 immediate load protocol. Four strategically placed implants supporting a fixed provisional prosthesis delivered same day.", images: ["/images/cases/dental-implants/di000001/1/gallery@2x-1126239b.jpg","/images/cases/dental-implants/di000001/2/gallery@2x-9d33407b.jpg","/images/cases/dental-implants/di000001/3/gallery@2x-4755e9c4.jpg","/images/cases/dental-implants/di000001/4/gallery@2x-1fc239f1.jpg"] },
  { id: "di000002", label: "Case 2", title: "Full Mouth Dental Implants with Bone Grafting", description: "Extensive bone grafting with bilateral sinus lifts followed by multiple implant placement and full mouth prosthetic rehabilitation.", images: ["/images/cases/dental-implants/di000002/1/gallery@2x-b475e4b3.jpg","/images/cases/dental-implants/di000002/2/gallery@2x-58eb4305.jpg","/images/cases/dental-implants/di000002/3/gallery@2x-e53f3866.jpg","/images/cases/dental-implants/di000002/4/gallery@2x-b88f904f.jpg"] },
  { id: "di000003", label: "Case 3", title: "Single Tooth Extraction and Immediate Implant", description: "Extraction of a failing tooth with immediate implant placement and temporary crown in a single visit.", images: ["/images/cases/dental-implants/di000003/1/gallery@2x-db7c65c2.jpg","/images/cases/dental-implants/di000003/2/gallery@2x-d5dfc1da.jpg"] },
  { id: "di000004", label: "Case 4", title: "All-on-6 Upper and Lower Full Arch Restoration", description: "Comprehensive full mouth restoration with six implants per arch. Organic bone grafting and sinus augmentation performed prior to immediate loading with fixed prosthetics.", images: ["/images/cases/dental-implants/di000004/1/gallery@2x-f68c3df5.jpg","/images/cases/dental-implants/di000004/2/gallery@2x-bf7d9bc3.jpg","/images/cases/dental-implants/di000004/3/gallery@2x-6ce6c677.jpg","/images/cases/dental-implants/di000004/4/gallery@2x-ca172cc5.jpg","/images/cases/dental-implants/di000004/5/gallery@2x-6c6dd27f.jpg","/images/cases/dental-implants/di000004/6/gallery@2x-7b22401b.jpg"] },
  { id: "di000005", label: "Case 5", title: "Immediate Implants and Teeth All-On-4", description: "Same-day teeth using the All-on-4 protocol. Remaining failing teeth extracted, four implants placed per arch, and immediate fixed provisional delivered the same day.", images: ["/images/cases/dental-implants/di000005/1/gallery@2x-9923c0e8.jpg","/images/cases/dental-implants/di000005/2/gallery@2x-63b92ca3.jpg"] },
  { id: "di000006", label: "Case 6", title: "Immediate Implants After Jaw Trauma", description: "Emergency implant placement following traumatic jaw injury. Bone fragments stabilized with grafting material and implants placed to restore function and aesthetics.", images: ["/images/cases/dental-implants/di000006/1/gallery@2x-deb220f6.jpg","/images/cases/dental-implants/di000006/2/gallery@2x-94113dd4.jpg"] },
  { id: "di000007", label: "Case 7", title: "Full Arch Implants with Sinus Lift", description: "Bilateral sinus augmentation with organic bone graft followed by full arch implant placement and fixed prosthetic rehabilitation.", images: ["/images/cases/dental-implants/di000007/1/gallery@2x-c76993ff.jpg","/images/cases/dental-implants/di000007/2/gallery@2x-2681867e.jpg"] },
  { id: "di000008", label: "Case 8", title: "Teeth-in-a-Day — Complete Smile Makeover", description: "Full mouth extraction with immediate All-on-4 implant placement. Patient walked in with failing dentition and left with a complete fixed smile the same day.", images: ["/images/cases/dental-implants/di000008/1/gallery@2x-599ba9c9.jpg","/images/cases/dental-implants/di000008/2/gallery@2x-3bb6c4ef.jpg"] },
  { id: "di000009", label: "Case 9", title: "Implant-Supported Bridge — Posterior Teeth", description: "Multiple posterior implants placed to support a fixed bridge, restoring chewing function and eliminating the need for a removable partial denture.", images: ["/images/cases/dental-implants/di000009/1/gallery@2x-dfb8a211.jpg","/images/cases/dental-implants/di000009/2/gallery@2x-27cc66cc.jpg"] },
  { id: "di000010", label: "Case 10", title: "Full Mouth Restoration with Holistic Bone Grafting", description: "Advanced full mouth rehabilitation using holistic bone grafting techniques. Natural bone graft materials used to regenerate sufficient bone volume for implant placement.", images: ["/images/cases/dental-implants/di000010/1/gallery@2x-8d2e0357.jpg","/images/cases/dental-implants/di000010/2/gallery@2x-88019b6b.jpg"] },
];

const cosmeticCases: CaseData[] = [
  { id: "fcs000001", label: "Case 1", title: "Scarless Mole Removal from the Nose", description: "Precise excision of a prominent nasal mole using advanced scarless surgical technique. No visible scarring, natural result.", images: ["/images/cases/facial-cosmetic-surgery/fcs000001/1/gallery@2x-8e293739.jpg","/images/cases/facial-cosmetic-surgery/fcs000001/2/gallery@2x-20910af7.jpg","/images/cases/facial-cosmetic-surgery/fcs000001/3/gallery@2x-95d964d6.jpg","/images/cases/facial-cosmetic-surgery/fcs000001/4/gallery@2x-a409dfe0.jpg"] },
  { id: "fcs000002", label: "Case 2", title: "Neck Scarless Mole Removal", description: "Removal of a large neck mole using minimally invasive technique with no visible scarring post-healing.", images: ["/images/cases/facial-cosmetic-surgery/fcs000002/1/gallery@2x-deb50b84.jpg"] },
  { id: "fcs000003", label: "Case 3", title: "Dermal Fillers — Juvederm Facial Rejuvenation", description: "Non-surgical facial rejuvenation using Juvederm dermal fillers to restore volume, smooth wrinkles, and enhance facial contours.", images: ["/images/cases/facial-cosmetic-surgery/fcs000003/1/gallery@2x-a8f1f25e.jpg"] },
  { id: "fcs000004", label: "Case 4", title: "Juvederm Lip Fillers — Natural Enhancement", description: "Lip augmentation with Juvederm filler for natural-looking volume enhancement, improved symmetry, and defined lip borders.", images: ["/images/cases/facial-cosmetic-surgery/fcs000004/1/gallery@2x-7b89404d.jpg","/images/cases/facial-cosmetic-surgery/fcs000004/2/gallery@2x-32d085a7.jpg","/images/cases/facial-cosmetic-surgery/fcs000004/3/gallery@2x-3bb43f40.jpg","/images/cases/facial-cosmetic-surgery/fcs000004/4/gallery@2x-3be58dde.jpg"] },
  { id: "fcs000005", label: "Case 5", title: "Face Lift with Upper and Lower Eyelid Surgery", description: "Comprehensive facial rejuvenation combining rhytidectomy (face lift) with upper and lower blepharoplasty (eyelid surgery) for a naturally youthful appearance.", images: ["/images/cases/facial-cosmetic-surgery/fcs000005/1/gallery@2x-5a50101b.jpg","/images/cases/facial-cosmetic-surgery/fcs000005/2/gallery@2x-a2007315.jpg","/images/cases/facial-cosmetic-surgery/fcs000005/3/gallery@2x-c3f137d8.jpg","/images/cases/facial-cosmetic-surgery/fcs000005/4/gallery@2x-e27e6f5d.jpg"] },
  { id: "fcs000006", label: "Case 6", title: "Asian Eyelid Correction — Double Eyelid Surgery", description: "Asian blepharoplasty (double eyelid surgery) creating a natural supratarsal crease for wider, more defined eyes while preserving ethnic features.", images: ["/images/cases/facial-cosmetic-surgery/fcs000006/1/gallery@2x-1b475bf7.jpg"] },
];

type Category = "jaw" | "implants" | "cosmetic";

const categories: { key: Category; label: string; count: number; cases: CaseData[] }[] = [
  { key: "jaw", label: "Corrective Jaw Surgery", count: jawCases.length, cases: jawCases },
  { key: "implants", label: "Dental Implants", count: implantCases.length, cases: implantCases },
  { key: "cosmetic", label: "Facial Cosmetic", count: cosmeticCases.length, cases: cosmeticCases },
];

function CaseGallery({ caseData, categoryLabel }: { caseData: CaseData; categoryLabel: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const count = caseData.images.length;

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
        <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
          {caseData.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="relative group overflow-hidden cursor-pointer"
            >
              <Image
                src={src}
                alt={`${caseData.label} — Photo ${i + 1}`}
                width={400}
                height={500}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/70 to-transparent pt-6 pb-2 px-2">
                <span className="text-white text-[10px] sm:text-xs font-semibold">
                  {i === 0 ? "Before" : i === count - 1 ? "After" : `Step ${i + 1}`}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="px-5 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-dark">
                {caseData.title || caseData.label}
              </p>
              <p className="text-xs text-muted">{categoryLabel} &bull; {caseData.label} &bull; {count} photos</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted shrink-0 ml-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Click to enlarge
            </div>
          </div>
          {caseData.description && (
            <p className="mt-1.5 text-xs text-muted/80 leading-relaxed">
              {caseData.description}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={caseData.images[lightbox] ?? ""}
                alt={`${caseData.label} — Photo ${lightbox + 1}`}
                width={1200}
                height={1500}
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                  disabled={lightbox === 0}
                  className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-medium disabled:opacity-30 hover:bg-white/20 transition-colors"
                >
                  &larr; Prev
                </button>
                <span className="text-white text-sm font-medium text-center">
                  {caseData.title || caseData.label} &mdash;{" "}
                  {lightbox === 0 ? "Before" : lightbox === count - 1 ? "After" : `Step ${lightbox + 1}`}{" "}
                  ({lightbox + 1}/{count})
                </span>
                <button
                  onClick={() => setLightbox(Math.min(count - 1, lightbox + 1))}
                  disabled={lightbox === count - 1}
                  className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-medium disabled:opacity-30 hover:bg-white/20 transition-colors"
                >
                  Next &rarr;
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {caseData.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === lightbox ? "border-primary scale-110" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState<Category>("jaw");
  const [showAll, setShowAll] = useState(false);

  const activeCat = categories.find((c) => c.key === activeCategory)!;
  const visibleCases = showAll ? activeCat.cases : activeCat.cases.slice(0, 6);

  return (
    <section id="before-after" className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Documented Patient Outcomes
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Before &amp; After
            <br />
            <span className="gradient-text">Case Gallery</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Review {jawCases.length + implantCases.length + cosmeticCases.length} real patient cases — including corrective jaw surgery, dental implants, and facial cosmetic procedures performed by Dr. Antipov.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setShowAll(false); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-md"
                    : "text-muted hover:text-dark"
                }`}
              >
                {cat.label}
                <span className={`ml-1.5 text-xs ${activeCategory === cat.key ? "text-white/70" : "text-muted/60"}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {visibleCases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <CaseGallery caseData={c} categoryLabel={activeCat.label} />
            </motion.div>
          ))}
        </div>

        {/* Show more / less */}
        {activeCat.cases.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              {showAll
                ? "Show Less"
                : `Show All ${activeCat.cases.length} Cases`}
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <ConsultationModal>
            <button
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              Schedule Your Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </ConsultationModal>
        </motion.div>
      </div>
    </section>
  );
}
