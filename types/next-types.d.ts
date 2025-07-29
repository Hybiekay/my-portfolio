// types/next-types.d.ts
declare module '.next/types/app/projects/[slug]/page' {
    export type PageProps = {
        params: {
            slug: string;
        };
    };
}