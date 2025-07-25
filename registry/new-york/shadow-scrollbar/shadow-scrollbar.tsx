import React, { Children } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Props = { className?: string; children: string };

export default function ShadowScrollBar({ className, children }: Props) {
  return <ScrollArea className={cn("", className)}>{children}</ScrollArea>;
}
