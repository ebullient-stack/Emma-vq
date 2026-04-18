export type PlanId = 'daily' | 'weekly' | 'monthly'

export const subscriptionPlans = {
  daily: {
    id: 'daily',
    name: 'Daily Plan',
    price: 2.99,
    currency: 'USD',
    interval: 'day',
    displayPrice: '$2.99 / day',
  },

  weekly: {
    id: 'weekly',
    name: 'Weekly Plan',
    price: 9.99,
    currency: 'USD',
    interval: 'week',
    displayPrice: '$9.99 / week',
  },

  monthly: {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19.99,
    currency: 'USD',
    interval: 'month',
    displayPrice: '$19.99 / month',
  },
}