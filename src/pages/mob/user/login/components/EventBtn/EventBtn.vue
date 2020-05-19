<template>
    <div class="mLogin_EventBtn">
        <p>{{ text ? text : '登录'}}</p>
    </div>
</template>

<script>
import './EventBtn.scss';
export default {
    props:['text']
}
</script>