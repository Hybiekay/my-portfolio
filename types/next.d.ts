// types/next.d.ts
import type { OriginalPageProps } from "next";

declare module "next" {
    export type PageProps = {
        params: Record<string, string>;
        searchParams?: Record<string, string | string[]>;
    };
}