<template>
    <div class="LoginInput">
        <input 
            :value='value'
            :type="type ? type : 'text'"
            :placeholder="placeholder ?  placeholder : '请输入账号' "
            @input="$emit('change', $event)">
    </div>
</template>

<script >
import './LoginInput.scss';
export default {
    props:['type', 'value', 'placeholder'],
}
</script>