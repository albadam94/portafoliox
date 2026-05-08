"use client";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";

export default function Providers({ children, messages, locale }) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextIntlClientProvider>
  );
}