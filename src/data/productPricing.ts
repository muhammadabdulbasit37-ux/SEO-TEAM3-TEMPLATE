export type ProductPlanId = 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  /** Shown on the checkout card, and used as the preselected plan. */
  recommended?: boolean;
  badge?: string;
}

const standardPlans: ProductPlan[] = [
  { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / month' },
  {
    id: 'lifetime',
    label: 'Lifetime',
    priceUsd: 150,
    priceNote: 'USD · one-time',
    recommended: true,
    badge: 'Best value',
  },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return standardPlans;
}

export function getFeaturedPlan(productSlug: string): ProductPlan | undefined {
  const plans = getProductPlans(productSlug);
  return plans.find((plan) => plan.recommended) ?? plans[0];
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
