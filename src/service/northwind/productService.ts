// import { AxiosInstance } from 'axios';
import AuthAware from '../auth-aware/AuthAware';
import ProductModel from '../../models/product/product';
import Category from '../../models/category/category';

export default class ProductService extends AuthAware {
    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await this.axiosInstance.get<ProductModel[]>(
            `${import.meta.env.VITE_REST_SERVER_URL}/products`
        )
        return response.data
    }

    public async getAllCategories(): Promise<Category[]> {
        const response = await this.axiosInstance.get<Category[]>(
            `${import.meta.env.VITE_REST_SERVER_URL}/categories`
        )
        return response.data
    }
}