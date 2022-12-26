import {createStore} from 'vuex';
import {productsModule} from '@/store/productsModule'


export default createStore({
    modules: {
        products: productsModule,
    }
})