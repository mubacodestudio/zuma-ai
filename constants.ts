import * as icon from "lucide-react"

export const tools = [
    {
      label: 'Conversation',
      icon: icon.MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Music Generation',
      icon: icon.Music,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation',
      icon: icon.ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: icon.VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: icon.Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
  ];