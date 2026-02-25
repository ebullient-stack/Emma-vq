"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  ShoppingBag,
  Users,
  MessageSquare,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Store,
  Package,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from an API
const vendorData = {
  id: 1,
  name: "Global Harvest Co.",
  storeUrl: "global-harvest",
  stats: {
    totalSales: "$24,500",
    totalOrders: 156,
    pendingOrders: 8,
    totalCustomers: 42,
    unreadMessages: 3,
    productViews: 1245,
    conversionRate: "3.2%",
  },
  recentOrders: [
    { id: "ORD-5523", customer: "John Smith", date: "2023-06-15", amount: "$450.00", status: "completed" },
    { id: "ORD-5522", customer: "Sarah Johnson", date: "2023-06-14", amount: "$1,200.00", status: "processing" },
    { id: "ORD-5521", customer: "Michael Brown", date: "2023-06-14", amount: "$320.00", status: "completed" },
    { id: "ORD-5520", customer: "Emily Davis", date: "2023-06-13", amount: "$780.00", status: "completed" },
    { id: "ORD-5519", customer: "Robert Wilson", date: "2023-06-12", amount: "$150.00", status: "cancelled" },
  ],
  lowStockProducts: [
    { id: 1, name: "Fresh Apples", stock: 5, minStock: 10 },
    { id: 6, name: "Cashew Nuts", stock: 8, minStock: 15 },
  ],
}

export default function VendorDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {vendorData.name}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button asChild variant="outline">
            <Link href={`/vendors/${vendorData.storeUrl}`}>
              <Store className="h-4 w-4 mr-2" />
              View My Store
            </Link>
          </Button>
          <Button asChild>
            <Link href="/vendor-dashboard/add-product">Add New Product</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                <h3 className="text-2xl font-bold">{vendorData.stats.totalSales}</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Orders</p>
                <h3 className="text-2xl font-bold">{vendorData.stats.totalOrders}</h3>
                <p className="text-xs text-muted-foreground mt-1">{vendorData.stats.pendingOrders} pending</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-full">
                <ShoppingBag className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customers</p>
                <h3 className="text-2xl font-bold">{vendorData.stats.totalCustomers}</h3>
              </div>
              <div className="p-2 bg-green-50 rounded-full">
                <Users className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Messages</p>
                <h3 className="text-2xl font-bold">{vendorData.stats.unreadMessages}</h3>
                <p className="text-xs text-muted-foreground mt-1">Unread messages</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded-full">
                <MessageSquare className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Ads</p>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-xs text-muted-foreground mt-1">3 expiring soon</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-full">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Your sales performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
              <BarChart3 className="h-10 w-10 text-muted" />
              <span className="ml-2 text-muted-foreground">Chart will be displayed here</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alert</CardTitle>
            <CardDescription>Products that need restocking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vendorData.lowStockProducts.map((product) => (
                <div key={product.id} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Stock: {product.stock} (Min: {product.minStock})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Inventory
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="mb-6">
          <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          <TabsTrigger value="ads">My Ads</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Manage your recent customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium">Customer</th>
                      <th className="text-left py-3 px-4 font-medium">Date</th>
                      <th className="text-left py-3 px-4 font-medium">Amount</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorData.recentOrders.map((order) => (
                      <tr key={order.id} className="border-b last:border-0">
                        <td className="py-3 px-4">
                          <Link href="#" className="text-primary hover:underline">
                            {order.id}
                          </Link>
                        </td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">{order.amount}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === "completed"
                                ? "bg-green-50 text-green-700"
                                : order.status === "processing"
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-red-50 text-red-700"
                            }`}
                          >
                            {order.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {order.status === "processing" && <AlertCircle className="h-3 w-3 mr-1" />}
                            {order.status === "cancelled" && <AlertCircle className="h-3 w-3 mr-1" />}
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Orders
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="ads">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>My Ads</CardTitle>
                  <CardDescription>Manage your posted advertisements</CardDescription>
                </div>
                <Button asChild>
                  <Link href="/post-ad">Post New Ad</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Mock ad data */}
                {[
                  { id: 1, title: "Premium Coffee Beans", status: "active", views: 245, expires: "15 days" },
                  { id: 2, title: "Fresh Avocados", status: "pending", views: 0, expires: "Review pending" },
                  { id: 3, title: "Tractor for Hire", status: "active", views: 89, expires: "7 days" },
                ].map((ad) => (
                  <div key={ad.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{ad.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {ad.views} views • Expires in {ad.expires}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={ad.status === "active" ? "default" : "secondary"}>{ad.status}</Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Your store's performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Product Views</h4>
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <span className="text-sm font-medium ml-4">{vendorData.stats.productViews}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Conversion Rate</h4>
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <span className="text-sm font-medium ml-4">{vendorData.stats.conversionRate}</span>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-10 w-10 text-muted" />
                  <span className="ml-2 text-muted-foreground">Detailed analytics will be displayed here</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
