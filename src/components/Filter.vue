<template>
    <select class='filter-container' @change='changeOption'>
        <option disabled value=''>Select a filter</option>
        <option value=''>All products</option>
        <option 
            v-for='category in categories'
            :key='category'
            :value='category'
        >{{ upperCaseFirst(category) }}</option>
    </select>
</template>
  
<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                categories: state => state.products.categories,
            }),
        },
        methods: {
            ...mapActions({
                selectFilter: 'products/selectFilter',
            }),
            changeOption(event) { 
                this.selectFilter(event.target.value);
            },
            upperCaseFirst(str) {
                if (!str) return str;
                    return str[0].toUpperCase() + str.slice(1);
            },
        },
    }
</script>
  
<style lang='scss' scoped>
    .filter-container {
        width: 30%;
        margin-bottom: 20px;
        padding: 10px;
        border: 2px solid #6e6e6e;
        border-radius: 8px;
        outline: none;
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        &:hover {
            border-color: #7dd3fc; 
        }
    }
</style>