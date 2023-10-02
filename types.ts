import Stripe from'stripe';

export interface UserDetails {
id: string;
first_name: string;
full_name?: string;
avatar_url?: string;
billing_adress: string;
payment_method: string;
last_name: string;
}

export interface Subscription {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    quantity?: number;
    price_id?: string;
    created:string;
    cancel_at_period_end?: boolean
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    canceled_at?: string;
    cancel_at?: string;
    prices?: Price;
    trial_start: string;
    trial_end: string;

    }

export interface Product{
    id: string;
    name: string;
    description?: string;
    img_url?: string;
    active: boolean;
    metadata: Stripe.Metadata;
}

 export interface Price{
id: string;
product_id?:string;
active?:string;
description?:string;
current?:string;
unit_amount?:string;
currency?: string;
type?: Stripe.Price.Type;
interval?: Stripe.Price.Recurring.Interval;
interval_conter?: number;
trial_period_days?: number | null;
metadata: Stripe.Metadata;
product: Product;
 }   