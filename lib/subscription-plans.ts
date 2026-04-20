export type PlanId = 'daily' | 'weekly' | 'monthly'

export const subscriptionPlans = {
  daily: {
    id: 'daily',
    name: 'Daily Plan',
    price: 500,
    currency: 'UGX',
    interval: 'day',
    displayPrice: 'UGX500 / day',
  },

  weekly: {
    id: 'weekly',
    name: 'Weekly Plan',
    price: 3500,
    currency: 'UGX',
    interval: 'week',
    displayPrice: 'UGX3500 / week',
  },

  monthly: {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 10000,
    currency: 'UGX',
    interval: 'month',
    displayPrice: 'UGX10000 / month',
  },
}