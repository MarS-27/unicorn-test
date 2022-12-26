import axios from 'axios';
import { FAKESTORE_API } from '@/constants/index';

export const productsModule = {
    namespaced: true,
    state: () => ({
        isLoading: false,
        products: [],
        productById: [],
        categories: [],
        selectCategory: '',
        error: '',
    }),
    getters: {
        filterPoroducts(state) {
            return !state.selectCategory ? state.products : state.products.filter(product => product.category === state.selectCategory);
        },
    },
    mutations: {
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setProducts(state, products) {
            state.products = products;
        },
        setProductById(state, productById) {
            state.productById = productById;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setSelectCategory(state, selectCategory) {
            state.selectCategory = selectCategory;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    actions: {
        async fetchProducts({commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get(FAKESTORE_API);
                commit('setProducts', response.data);
            } catch (error) {
                commit('setError', error.request.status);
            } finally {
                commit('setLoading', false);
            }
        },
        async fetchProductById({commit}, id) {
            try {
                commit('setProductById', []);
                commit('setSelectCategory', '');
                commit('setLoading', true);
                const response = await axios.get(`${FAKESTORE_API}/${id}`);
                commit('setProductById', response.data);
            } catch (error) {
                commit('setError', error.request.status);
            } finally {
                commit('setLoading', false);
            }
        },
        async fetchCategories({commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get(`${FAKESTORE_API}/categories`);
                commit('setCategories', response.data);
            } catch (error) {
                commit('setError', error.request.status);
            } finally {
                commit('setLoading', false);
            }
        },
        selectFilter({commit}, category) {
            commit('setSelectCategory', category);
        }
    }
}