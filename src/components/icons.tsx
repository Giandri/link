import type { IconName } from "@/data/links";
import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function SvgIcon({
  children,
  size = 24,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ──────────────── Brand icons (Lucide removed these in v1.0+) ──────────────── */

function InstagramIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </SvgIcon>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none" viewBox="-2 -2 28 28">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </SvgIcon>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </SvgIcon>
  );
}

function TwitterIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none" viewBox="-1 -1 26 26">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </SvgIcon>
  );
}

function ThreadsIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none" viewBox="-2 -2 28 28">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
    </SvgIcon>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none" viewBox="-2 -2 28 28">
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.002.032v.011a3.617 3.617 0 0 1-1.808 2.874 3.556 3.556 0 0 1-1.882.533 3.611 3.611 0 0 1-3.609-3.616 3.611 3.611 0 0 1 3.609-3.616c.376 0 .738.058 1.08.165v-3.943a7.466 7.466 0 0 0-1.08-.079c-4.102 0-7.433 3.339-7.433 7.452 0 2.484 1.222 4.685 3.095 6.038A7.398 7.398 0 0 0 8.844 24c4.103 0 7.434-3.339 7.434-7.452V9.21a9.905 9.905 0 0 0 5.722 1.825V7.098s-2.033.075-3.679-1.536z" />
    </SvgIcon>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none" viewBox="-2 -2 28 28">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </SvgIcon>
  );
}

/* ──────────────── Standard icons (stroke-based) ──────────────── */

function GlobeIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </SvgIcon>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </SvgIcon>
  );
}

function AlertCircleIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </SvgIcon>
  );
}

function MailIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </SvgIcon>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </SvgIcon>
  );
}

function FileTextIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </SvgIcon>
  );
}

function MoreVerticalIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </SvgIcon>
  );
}

/* ──────────────── Registry ──────────────── */

const iconMap: Record<IconName, React.ComponentType<IconProps>> = {
  Globe: GlobeIcon,
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Threads: ThreadsIcon,
  TikTok: TikTokIcon,
  WhatsApp: WhatsAppIcon,
  Mail: MailIcon,
  Phone: PhoneIcon,
  MapPin: MapPinIcon,
  FileText: FileTextIcon,
  AlertCircle: AlertCircleIcon,
};

export function Icon({
  name,
  ...props
}: IconProps & { name: IconName }) {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} />;
}

export { MoreVerticalIcon };
