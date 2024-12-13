"use client";

import { I18nProvider } from "@react-aria/i18n";
import { AppProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { DURATION_TOAST, FULL_Z_INDEX } from "../helpers/constants";
import { NextUIProvider } from "./nextUI.provider";
import { ThemeProvider } from "./theme.provider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <I18nProvider locale="pt-BR">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                zIndex: FULL_Z_INDEX,
              },
              success: {
                duration: DURATION_TOAST,
                style: {
                  zIndex: FULL_Z_INDEX,
                },
              },
              error: {
                duration: DURATION_TOAST,
                style: {
                  zIndex: FULL_Z_INDEX,
                },
              },
              loading: {
                style: {
                  zIndex: FULL_Z_INDEX,
                },
              },
            }}
          />
          {children}
          <AppProgressBar height="12px" color="#32CD32" shallowRouting />
        </I18nProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};
