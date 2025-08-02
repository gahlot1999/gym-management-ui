import { useState } from 'react';
import Header from './Header';
import PlanCard from './PlanCard';
import type { BillingPlan, PlanConfig } from './types';

const gymPlans: PlanConfig[] = [
  {
    planName: 'Beginner Plan',
    planDesc: 'Ideal for newcomers starting their fitness journey.',
    pricing: {
      monthly: 2000,
      yearly: 20000,
    },
    features: [
      'Access to all gym equipment',
      '1 Personal Training session/month',
      'Group classes (Yoga/Zumba) - 2/week',
      'Locker facility',
    ],
    theme: 'light',
  },
  {
    planName: 'Premium Plan',
    planDesc:
      'Perfect for regular gym-goers who want more attention and flexibility.',
    pricing: {
      monthly: 3000,
      yearly: 30000,
    },
    features: [
      'Unlimited access to gym equipment',
      '4 Personal Training sessions/month',
      'Unlimited Group classes',
      'Locker + Shower facility',
    ],
    theme: 'dark',
  },
  {
    planName: 'Elite Plan',
    planDesc: 'Best suited for fitness enthusiasts with advanced goals.',
    pricing: {
      monthly: 5000,
      yearly: 50000,
    },
    features: [
      '24/7 gym access',
      '8 Personal Training sessions/month',
      'Diet & Workout consultation',
      'Priority access to classes',
      'Dedicated locker + towel service',
      'Sauna & Recovery room access',
    ],
    theme: 'light',
  },
];

function Services() {
  const [activePlan, setActivePlan] = useState<BillingPlan>('monthly');

  return (
    <div className='bg-white text-black py-18'>
      <section
        id='services'
        className='max-w-[1200px] m-auto grid gap-12 scroll-mt-16'
      >
        <Header activePlan={activePlan} setActivePlan={setActivePlan} />
        <div className='grid grid-cols-3 gap-12'>
          {gymPlans.map((plan, i) => (
            <PlanCard
              key={i}
              planName={plan.planName}
              planDesc={plan.planDesc}
              pricing={plan.pricing}
              features={plan.features}
              theme={i % 2 === 0 ? 'light' : 'dark'}
              activePlan={activePlan}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
