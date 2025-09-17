"use client"

import { useState } from "react"
import Button from "./Button"

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
      <nav
        className="flex gap-x-4 mb-8"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab) => (
          <Button
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
            variant={activeTab === tab.id ? "primary" : "secondary"}
          >
            {tab.label}
          </Button>
        ))}
      </nav>

      <div className="mt-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
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
