import { IProduct } from '../interfaces/iproduct';

//TODO ask Ed to change API to always return array of products so that resposne is always the same.
export class ProductsPayload {
    success: boolean;
    data: IProduct;
    datas: IProduct[];
}

export class ProductsArrayPayload {
    success: boolean;
    data: IProduct[];
}