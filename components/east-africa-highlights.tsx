import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Leaf, Coffee, Droplet, Sun } from "lucide-react"
import Link from "next/link"

export default function EastAfricaHighlights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">East African Agricultural Highlights</CardTitle>
        <CardDescription>Key insights and opportunities in the region</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="overflow-hidden">
            <div className="bg-green-50 p-4 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Coffee className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Coffee Production</h3>
                <p className="text-sm text-muted-foreground">Ethiopia, Kenya, Uganda</p>
              </div>
            </div>
            <CardContent className="p-4 pt-3">
              <p className="text-sm">
                East Africa produces some of the world's finest Arabica and Robusta coffee varieties, with Ethiopia
                being the birthplace of coffee.
              </p>
              <div className="mt-3">
                <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">
                  High Growth Potential
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-blue-50 p-4 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Droplet className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Tea Exports</h3>
                <p className="text-sm text-muted-foreground">Kenya, Rwanda, Tanzania</p>
              </div>
            </div>
            <CardContent className="p-4 pt-3">
              <p className="text-sm">
                Kenya is the world's largest exporter of black tea, with Rwanda and Tanzania also producing high-quality
                tea varieties.
              </p>
              <div className="mt-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                  Stable Market
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-yellow-50 p-4 flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sun className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium">Floriculture</h3>
                <p className="text-sm text-muted-foreground">Kenya, Ethiopia, Uganda</p>
              </div>
            </div>
            <CardContent className="p-4 pt-3">
              <p className="text-sm">
                Kenya and Ethiopia are leading global exporters of cut flowers, particularly roses, carnations, and
                summer flowers.
              </p>
              <div className="mt-3">
                <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-100">
                  Export Leader
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-purple-50 p-4 flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">Organic Farming</h3>
                <p className="text-sm text-muted-foreground">Uganda, Tanzania, Rwanda</p>
              </div>
            </div>
            <CardContent className="p-4 pt-3">
              <p className="text-sm">
                Uganda is Africa's largest organic farming country, with Tanzania and Rwanda also seeing significant
                growth in organic production.
              </p>
              <div className="mt-3">
                <Badge variant="outline" className="bg-purple-50 text-purple-600 hover:bg-purple-100">
                  Emerging Trend
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="pt-2">
          <Link href="/east-africa-insights" className="inline-flex items-center text-primary text-sm hover:underline">
            View all East African insights
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
