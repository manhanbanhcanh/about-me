import {
  Youtube,
  Instagram,
  Facebook,
  AudioLines,
  Twitter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CardData = {
  id: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};

export const cards: CardData[] = [
  {
    id: "youtube",
    colSpan: 1,
    rowSpan: 1,
    icon: Youtube,
    title: "banhcanh.",
    description: "youtube.com",
    link: "https://www.youtube.com/@manhanbanhcanh",
  },
  {
    id: "instagram",
    colSpan: 2,
    rowSpan: 1,
    icon: Instagram,
    title: "@manhanbanhcanh",
    description: "instagram.com",
    link: "https://www.instagram.com/manhanbanhcanh/",
  },
  {
    id: "facebook",
    colSpan: 1,
    rowSpan: 1,
    icon: Facebook,
    title: "banhcanh",
    description: "facebook.com",
    link: "https://www.facebook.com/ogducmanh/",
  },
  {
    id: "spotify",
    colSpan: 1,
    rowSpan: 1,
    icon: AudioLines,
    title: "day la tieng viet",
    description: "44 songs",
    link: "https://open.spotify.com/playlist/3xm2AnAbg0sn1xk7q1qfl1",
  },
  {
    id: "spotify",
    colSpan: 1,
    rowSpan: 1,
    icon: AudioLines,
    title: "day la tieng anh",
    description: "19 songs",
    link: "https://open.spotify.com/playlist/7DO1SGXuEbinBXsbQSrhsa",
  },
  {
    id: "twitter",
    colSpan: 2,
    rowSpan: 1,
    icon: Twitter,
    title: "manhanbanhcanh",
    description: "x.com",
    link: "<Twitter />",
  },
];
