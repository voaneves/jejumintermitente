import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom"; // IMPORTANTE: Importar o Outlet

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* O Outlet é o espaço onde a página atual (Index, NotFound) será desenhada */}
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
