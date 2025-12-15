export function getSubscriptions() {
  return [
    {
      id: "free",
      name: "Free Guardrails",
      price: 0,
      description: "Core financial visibility and safety alerts",
      features: [
        "Subscription visibility",
        "Basic alerts",
        "Monthly summaries"
      ]
    },
    {
      id: "pro",
      name: "Pro Guardrails",
      price: 0,
      comingSoon: true,
      description: "Advanced monitoring and smart insights",
      features: [
        "Spending trends",
        "Smart alerts",
        "Priority updates"
      ]
    },
    {
      id: "premium",
      name: "Premium Guardrails",
      price: 0,
      comingSoon: true,
      description: "Full automation and financial protection",
      features: [
        "Auto-cancel subscriptions",
        "Real-time protection",
        "Premium support"
      ]
    }
  ];
}