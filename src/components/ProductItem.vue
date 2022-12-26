<template>
    <div class='product-card' @click="$router.push(`/product/${product.id}`)">
        <img class='product-card__img' :src="product.image" :alt="product.title" />
        <p class='product-card__title'>{{ product.title }}</p>
        <p class='product-card__price'><strong>Price: </strong>{{ product.price }} $</p>
        <Button @click.stop='showDescription'>Description</Button>
        <p class='product-card__description' v-if="descriptionVisible">{{ product.description }}</p>
    </div>
</template>

<script>
    import Button from '@/components/Button';
    export default {
        components: { Button },
        data() {
            return {
                descriptionVisible: false,
            }
        },
        props: {
            product: {
                type: Object,
                required: true,
            }
        },
        methods: {
            showDescription() {
                !this.descriptionVisible ? this.descriptionVisible = true : this.descriptionVisible = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    $card-bg: #ffffff;

    @mixin card-styles {
        border: 2px solid #6e6e6e;
        padding: 10px;
        background-color: $card-bg;
        border-radius: 8px;
    } 

    .product-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        @include card-styles;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            box-shadow: 0px 0px 8px 3px #9ac4c4;
        }
    }

    .product-card__title {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;
    }

    .product-card__img {
        width: 100%;
        height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .product-card__price {
        margin-bottom: 10px;
    }

    .product-card__description {
        position: absolute;
        @include card-styles;
        top: 102%;
        z-index: 1;
        left: 0;
    }

    @media (max-width: 524px) {
        .product-card {
            margin-bottom: 10px;
        }
    }
</style>