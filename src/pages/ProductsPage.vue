<template>
    <Filter />
    <Loader v-if='isLoading' />
    <Error v-else-if='error' :error='error'/>
    <ProductsList :products="filterPoroducts" v-else/>
</template>
  
<script>
    import ProductsList from '@/components/ProductsList';
    import Loader from '@/components/Loader';
    import Error from '@/components/Error';
    import Filter from '@/components/Filter';
    import { mapActions, mapState, mapGetters } from 'vuex';

    export default {
        components: { ProductsList, Loader, Error, Filter },
        methods: {
            ...mapActions({
                fetchProducts: 'products/fetchProducts',
                fetchCategories: 'products/fetchCategories',
            }),
        },
        mounted() {
            this.fetchProducts();
            this.fetchCategories();
        },
        computed: {
            ...mapState({
                isLoading: state => state.products.isLoading,
                error: state => state.products.error,
            }),
            ...mapGetters({
                filterPoroducts: 'products/filterPoroducts',
            })
        }
    }
</script>
  