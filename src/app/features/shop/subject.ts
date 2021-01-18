import { Product } from './../products/entity/product';
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

export const $addToCart = new ReplaySubject<Product>();
export const $removeFromCart = new ReplaySubject<Product>();
export const $productCountInCart = new Subject<number>();
