<template>
    <div class='error-container'>
        <div class='error-container__img'>
            <svg width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9d2001" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"/>
                <path fill="#9d2001" d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"/>
            </svg>
        </div>
        <h4 class='error-container__info-code'>
            {{error}}
        </h4>
        <p class='error-container__message'>
            Oops, something's wrong!
        </p>
    </div>
</template>
  
<script>
    export default {
        props: {
            error: {
                type: Number,
                required: true,
            }
        }
    }
</script>
  
<style lang='scss' scoped>
    .error-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #6e6e6e;
        border-radius: 8px;
        background-color: #ffffff;
    }

    .error-container__img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 90pxpx;
        background-color: #ffd4b3;
        border-radius: 8px;
    }
    
    .error-container__info-code {
        font-weight: 700;
        font-size: 80px;
        text-align: center;
    }
    
    .error-container__message {
        font-size: 30px;
        text-align: center;
    } 
</style>