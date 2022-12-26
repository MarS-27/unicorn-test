<template>
    <button class='button'>
        <slot></slot>
    </button>
</template>
  
<style lang='scss' scoped>
    .button {
        width: 100%;
        padding: 8px 12px;
        text-align: center;
        border-radius: 8px;
        font-size: 18px;
        border: none;
        background-color: #dcdcdc;
        cursor: pointer;
        
        &:hover {
            background-color: #7dd3fc;
        }
    }
</style>