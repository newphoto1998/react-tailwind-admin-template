import React from "react"
import { Container } from "@/components/shared/main/Container"

interface SectionTitleProps {
  preTitle?: string
  title: string
  align?: "left" | "center"
  children?: React.ReactNode
}

export function SectionTitle(props: Readonly<SectionTitleProps>) {
  return (
    <Container
      classname={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  )
}