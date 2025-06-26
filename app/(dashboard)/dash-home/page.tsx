"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/pageheader";
import { SidebarInset } from "@/components/ui/sidebar"; // Optional
import { format } from "date-fns";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const Dashboard = () => {
  const [userName, setUserName] = useState("User"); // Replace this with actual auth/user data
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <SidebarInset>
      <PageHeader title="Dashboard" />

      <div className="px-4 py-6 w-full max-w-5xl mx-auto space-y-6">
        {/* Greeting */}
        <div className="text-2xl font-semibold text-muted-foreground">
          {greeting}, <span className="text-primary">{userName}</span> 👋
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>👗 Virtual Wardrobe</CardTitle>
            </CardHeader>
            <CardContent>
              Upload and manage your outfits in one place.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🧠 AI Stylist</CardTitle>
            </CardHeader>
            <CardContent>
              Get personalized outfit suggestions anytime.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📊 My Stats</CardTitle>
            </CardHeader>
            <CardContent>
              See how many styles you've explored and used.
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Dashboard;
