<template>
    <div class='products-list'>
        <ProductItem
            v-for="product in products"
            :product="product"
            :key="product.id"
        />
    </div>
</template>
  
<script>
    import ProductItem from '@/components/ProductItem';
    
    export default {
        components: { ProductItem },
        props: {
            products: {
                type: Array,
                required: true,
            }
        }
    }
</script>
  
<style lang='scss' scoped>
    .products-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    @media (max-width: 1024px) {
        .products-list {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 768px) {
        .products-list {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 524px) {
        .products-list {
            display: block;
        }
    }
</style>