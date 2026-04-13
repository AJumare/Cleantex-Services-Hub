import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import CarpetUpholsteryPage from "@/pages/services/CarpetUpholsteryPage";
import DeepCleaningPage from "@/pages/services/DeepCleaningPage";
import FumigationPage from "@/pages/services/FumigationPage";
import PostConstructionPage from "@/pages/services/PostConstructionPage";
import LaundryPage from "@/pages/services/LaundryPage";
import ResidentialCleaningPage from "@/pages/services/ResidentialCleaningPage";
import JanitorialPage from "@/pages/services/JanitorialPage";
import StaffOutsourcingPage from "@/pages/services/StaffOutsourcingPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/services/carpet-upholstery" component={CarpetUpholsteryPage} />
        <Route path="/services/deep-cleaning" component={DeepCleaningPage} />
        <Route path="/services/fumigation-pest-control" component={FumigationPage} />
        <Route path="/services/post-construction" component={PostConstructionPage} />
        <Route path="/services/laundry" component={LaundryPage} />
        <Route path="/services/residential-cleaning" component={ResidentialCleaningPage} />
        <Route path="/services/janitorial" component={JanitorialPage} />
        <Route path="/services/cleaning-staff-outsourcing" component={StaffOutsourcingPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
