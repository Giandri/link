// Icon identifiers — resolved to actual components on the client side
export type IconName =
  | "Globe"
  | "Instagram"
  | "Youtube"
  | "Facebook"
  | "Twitter"
  | "Threads"
  | "TikTok"
  | "WhatsApp"
  | "Mail"
  | "Phone"
  | "MapPin"
  | "FileText"
  | "AlertCircle";

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: IconName;
  iconColor?: string;
  description?: string;
}

export interface ProfileInfo {
  name: string;
  subtitle: string;
  avatarSrc: string;
  backgroundSrc: string;
}

export const profileInfo: ProfileInfo = {
  name: "BWS Bangka Belitung",
  subtitle:
    "Jl. Mentok, Km. 4 Pangkalpinang, Kace Timur,\nKab. Bangka, Kep. Bangka Belitung.",
  avatarSrc: "/images/BWS BABEL.jpg",
  backgroundSrc: "/images/bg-2.png",
};

// "Link - Layanan"
export const serviceLinks: LinkItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp Call Center | BWSBB",
    url: "https://wa.me/6285378524345",
    icon: "WhatsApp",
    iconColor: "#000",
  },
  {
    id: "website",
    label: "Website | Portal",
    url: "https://sda.pu.go.id/balai/bwsbabel/",
    icon: "Globe",
    iconColor: "#555",
  },
  {
    id: "pengaduan",
    label: "Nomor Pengaduan | BWSBB",
    url: "https://wa.me/6281171711414",
    icon: "Phone",
    iconColor: "#555",
  },
  {
    id: "whistleblowing",
    label: "Whistleblowing System | KemenPU",
    url: "https://wispu.pu.go.id/",
    icon: "AlertCircle",
    iconColor: "#000",
  },
];

// "Link - Sosial Media"
export const socialLinks: LinkItem[] = [
  {
    id: "tiktok",
    label: "Tiktok",
    url: "https://www.tiktok.com/@pu_sda_babel",
    icon: "TikTok",
    iconColor: "#000000",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/pu_sda_babel/",
    icon: "Instagram",
    iconColor: "#000",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/pu.sda.babel",
    icon: "Facebook",
    iconColor: "#000",
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/pu_sda_babel",
    icon: "Twitter",
    iconColor: "#000000",
  },
  {
    id: "threads",
    label: "Threads",
    url: "https://www.threads.com/@pu_sda_babel",
    icon: "Threads",
    iconColor: "#000000",
  },
  {
    id: "youtube",
    label: "Youtube",
    url: "https://www.youtube.com/@pu_sda_babel",
    icon: "Youtube",
    iconColor: "#000",
  },
];
