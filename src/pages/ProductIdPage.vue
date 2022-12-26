<template>
    <Loader v-if='isLoading' />
    <Error v-else-if='error' :error='error'/>
    <div class='productById' v-else>
        <p class='productById__title'>{{ productById.title }}</p>
        <div class='productById__info'>
            <img class='productById__img' :src='productById.image' :alt='productById.title'/>
            <div class='productById'>
                <p class='productById__description'>{{ productById.description }}</p>
                <hr>
                <p class='productById__price'><strong>Price: </strong>{{ productById.price }} $</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    import Error from '@/components/Error';
    import { mapState, mapActions } from 'vuex';

    export default {
        components: {Loader, Error},
        methods: {
            ...mapActions({
                fetchProductById: 'products/fetchProductById',
            }),
        },
        mounted() {
            const productId = this.$route.params.id; 
            this.fetchProductById(productId);
        },
        computed: {
            ...mapState({
                isLoading: state => state.products.isLoading,
                productById: state => state.products.productById,
                error: state => state.products.error,
            }),
        }, 
    }
</script>

<style lang="scss" scoped>
    .productById {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    .productById__title {
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .productById__info {
        display: flex;
        font-size: 24px;
    }

    .productById__img {
        width: auto;
        height: 300px;
        object-fit: contain;
        border: 2px solid #6e6e6e;
        border-radius: 8px;
        margin-right: 10px;
        padding: 8px; 
        background-color: #ffffff;
    }

    .productById__description {
        margin-bottom: 10px;
    }
</style>