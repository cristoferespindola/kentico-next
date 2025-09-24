"use client"

import { useState } from "react"
import Button from "./Button"
import { twMerge } from "tailwind-merge"

type TabItem = {
  id: string
  label: string
  icon?: React.ReactNode
  content: React.ReactNode
}

type Props = {
  tabs: TabItem[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: Props) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className="w-full">
      <div className="-mx-4">
        <nav
          className="flex gap-x-4 mb-8 overflow-x-auto flex-nowrap px-4 scrollbar-hide"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
              variant={activeTab === tab.id ? "primary" : "secondary"}
            >
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>

      <div className="mt-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={twMerge(activeTab === tab.id ? "block" : "hidden")}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
