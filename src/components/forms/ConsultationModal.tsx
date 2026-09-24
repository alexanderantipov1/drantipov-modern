"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MultiStepConsultationForm } from "./MultiStepConsultationForm"

interface ConsultationModalProps {
  children: React.ReactNode
}

export function ConsultationModal({ children }: ConsultationModalProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isRu = pathname === "/ru" || pathname?.startsWith("/ru/")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent closeLabel={isRu ? "Закрыть" : "Close"} className="max-w-lg max-h-[90vh] overflow-hidden p-0 rounded-2xl border-0 shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{isRu ? "Записаться на консультацию" : "Book Consultation"}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <MultiStepConsultationForm onClose={() => setOpen(false)} locale={isRu ? "ru" : "en"} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
