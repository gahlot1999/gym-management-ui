export type BillingPlan = 'monthly' | 'yearly';

export type PlanConfig = {
  planName: 'Beginner Plan' | 'Premium Plan' | 'Elite Plan';
  planDesc: string;
  pricing: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  theme?: 'dark' | 'light';
};

export type PlanCardProps = PlanConfig & {
  activePlan: BillingPlan;
};

export type HeaderProps = {
  activePlan: string;
  setActivePlan: React.Dispatch<React.SetStateAction<BillingPlan>>;
};