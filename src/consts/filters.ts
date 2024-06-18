import AwardIcon from "@/components/ui/icons/award-icon";
import CertificateIcon from "@/components/ui/icons/certificate-icon";
import GridIcon from "@/components/ui/icons/grid-icon";
import VideoRecorderIcon from "@/components/ui/icons/video-recorder-icon";

export interface IFilter {
  icon: React.ElementType;
  label: string;
}

export const filters: IFilter[] = [
  {
    icon: GridIcon,
    label: "Все",
  },
  {
    icon: CertificateIcon,
    label: "Результаты соревнований",
  },
  {
    icon: VideoRecorderIcon,
    label: "Видео",
  },
  {
    icon: AwardIcon,
    label: "Достижения",
  },
];
