import {
  PLAN_PRICES,
  formatMoney,
  monthlyFromYearly,
  monthsFree,
  type Locale,
  type PlanCode,
  type PricingContent,
} from '../data/pricingContent';

export interface PriceDisplay {
  /** The figure that carries the card. */
  headline: string;
  /** "/ month", or "forever" on the free tier. Absent on a quoted tier. */
  period?: string;
  /** The full monthly rate, struck through beside the headline. */
  struck?: string;
  /** "Billed 2 490 € per year". */
  billed?: string;
  /** "2 months free" — the count is derived, never authored. */
  bonus?: string;
}

/**
 * A tier with a yearly price is shown at its yearly-price-per-month, because
 * that is the lowest figure it can actually be had for. The full monthly rate
 * stays legible beside it, struck through, and the yearly total sits below —
 * so the headline is the cheapest true number, not a number without a caveat.
 *
 * The months-free count comes out of the two amounts. Writing "2 months free"
 * as a string somewhere would survive a change of scale and start lying.
 */
export function planPrice(
  code: PlanCode,
  locale: Locale,
  c: PricingContent['plans'],
  quotePrice?: string,
): PriceDisplay {
  const { monthly, yearly } = PLAN_PRICES[code];

  if (monthly === null) return { headline: quotePrice ?? '' };
  if (monthly === 0) return { headline: formatMoney(0, locale), period: c.freePeriod };
  if (!yearly) return { headline: formatMoney(monthly, locale), period: c.perMonth };

  const perMonthOnYearly = monthlyFromYearly(code)!;
  const free = monthsFree(code);

  return {
    headline: formatMoney(perMonthOnYearly, locale),
    period: c.perMonth,
    struck: formatMoney(monthly, locale),
    billed: c.billedYearly.replace('{total}', formatMoney(yearly, locale)),
    bonus: free > 0 ? c.monthsFree.replace('{count}', String(free)) : undefined,
  };
}
