import extracted from "../../content/extracted.json";

export const person = {
  name: "डॉ घनश्याम अनुरागी",
  roles: ["पूर्व सांसद", "अध्यक्ष जिला पंचायत, जालौन"],
  party: "भारतीय जनता पार्टी",
  title: "डॉ घनश्याम अनुरागी - पूर्व सांसद, अध्यक्ष जिला पंचायत जालौन, भाजपा",
  description:
    "डॉ घनश्याम अनुरागी एक भारतीय राजनीतिज्ञ और भारत की संसद के सदस्य हैं। वर्तमान में वे भारतीय जनता पार्टी से जिला पंचायत जालौन के अध्यक्ष हैं।",
};

export const nav = [
  { href: "/", label: "होम" },
  { href: "/about", label: "जीवनी" },
  { href: "/gallery", label: "तस्वीरें" },
  { href: "/videos", label: "वीडियो" },
  { href: "/media", label: "मीडिया" },
  { href: "/apni-rasoi", label: "अपनी रसोई" },
  { href: "/contact", label: "संपर्क" },
];

export const contact = {
  address:
    "3338, अलौकिक भवन, पटेल नगर - राजेंद्र नगर लिंक रोड, जिला पंचायत के पास, ऑफिसर्स कॉलोनी, उरई, उत्तर प्रदेश 285001",
  mapUrl: "https://goo.gl/maps/Guf6AaWxfRd4e6og7",
  phone: "+91 94151 44666",
  phoneHref: "tel:+919415144666",
  email: "contact@ghanshyamanuragi.in",
};

export const socials = [
  { label: "X (Twitter)", href: "https://twitter.com/MpAnuragi", key: "x" },
  { label: "Instagram", href: "https://instagram.com/dr.ghanshyamanuragi/", key: "instagram" },
  { label: "Facebook", href: "https://facebook.com/profile.php?id=100071100211491", key: "facebook" },
];

export const timeline = [
  { year: 1995, text: "निर्वाचित ग्राम प्रधान (खेड़ा शिलाजीत, थाना-जरिया, जिला-हमीरपुर)" },
  { year: 2000, text: "निर्वाचित जिला पंचायत सदस्य (जलालपुर क्षेत्र)" },
  { year: 2000, text: "निर्वाचित अध्यक्ष जिला पंचायत (हमीरपुर)" },
  { year: 2009, text: "निर्वाचित सांसद (जालौन-45)" },
  { year: 2010, text: "मनोनीत राष्ट्रीय उपाध्यक्ष, अखिल भारतीय कोली (कोरी) समाज" },
  { year: 2021, text: "निर्वाचित जिला पंचायत सदस्य (रेंढर, जालौन)" },
  { year: 2021, text: "निर्वाचित अध्यक्ष जिला पंचायत (जालौन)" },
  { year: 2021, text: "मनोनीत प्रदेश अध्यक्ष, जिला पंचायत संगठन (उत्तर प्रदेश)" },
  { year: 2021, text: "मनोनीत कार्यकारी राष्ट्रीय अध्यक्ष, अखिल भारतीय कोली (कोरी) समाज" },
];

export const rasoi = {
  slogan: ["घनश्याम अनुरागी ने ठाना है", "हर भूखे को भोजन खिलाना है"],
  // First paragraph is the Chanakya shloka (two lines).
  shloka: extracted.rasoiParas[0].filter((l) => !l.startsWith("*")),
  paras: extracted.rasoiParas.slice(1),
};

export const biography = extracted.aboutParas;

// 79 local clips; the five below are the ones the 2023 home page featured.
export const homeVideos = [73, 74, 77];
export const allVideos = Array.from({ length: 79 }, (_, i) => i + 1);
export const videoSrc = (n: number) => `/videos/anuragi_videos_${n}.mp4`;

export const galleryList = extracted.gallery;
export const mediaList = extracted.media;
