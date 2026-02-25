"use client"

import Link from "next/link"
import { Home, Search, BarChart, MapPin, FileText, Share2, Megaphone, FileBarChart, Grid } from "lucide-react"

export default function Sidebar() {

  const menu = [
    { title: "Home", icon: Home },
    { title: "SEO", icon: Search },
    { title: "Traffic", icon: BarChart },
    { title: "Local", icon: MapPin },
    { title: "Content", icon: FileText },
    { title: "Social", icon: Share2 },
    { title: "Ads", icon: Megaphone },
    { title: "Reports", icon: FileBarChart },
    { title: "Apps", icon: Grid },
  ]

  return (
    <div className="h-screen w-20 bg-gray-100 flex flex-col items-center pt-6 gap-6">

      {menu.map((item, index) => {
        const Icon = item.icon
        return (
          <Link
            key={index}
            href="#"
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            <Icon size={22} />
            <span className="text-xs mt-1">{item.title}</span>
          </Link>
        )
      })}

    </div>
  )
}