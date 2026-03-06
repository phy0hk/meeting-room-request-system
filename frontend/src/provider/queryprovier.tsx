import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const QueryProvier = ({ children }: { children: ReactNode }) => {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};
export default QueryProvier;
