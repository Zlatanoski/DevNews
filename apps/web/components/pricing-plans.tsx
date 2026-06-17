import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import { Check } from "lucide-react"

import { plans } from "@/components/digest-data"

export function PricingPlans() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative flex min-h-full flex-col",
            plan.highlighted &&
              "border-emerald-700 shadow-md dark:border-emerald-500"
          )}
        >
          {plan.highlighted ? (
            <div className="absolute right-4 top-4 rounded-full bg-emerald-700 px-2.5 py-1 text-xs font-medium text-white dark:bg-emerald-500 dark:text-emerald-950">
              Recommended
            </div>
          ) : null}
          <CardHeader>
            <CardTitle className="text-xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="pt-5">
              <span className="text-4xl font-semibold">{plan.price}</span>
              {plan.cadence ? (
                <span className="text-muted-foreground">{plan.cadence}</span>
              ) : null}
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-emerald-700 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full">
              {plan.name === "Free" ? "Start Free Trial" : "Get Started"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
