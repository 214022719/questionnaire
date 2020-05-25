<template>
	<view>

<!-- 图文卡片模式 -->
<view>
<uni-card
	title="空白模板"
    mode="style"
    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
	@click="clickCreateQuestionnaire('')"
>
</uni-card>
</view>
<uni-card
	title="员工满意度调查"
    mode="style"
    :is-shadow="true"
    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
>
</uni-card>
<uni-card
	title="节假日出行调查"
    mode="style"
    :is-shadow="true"
    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
>
</uni-card>
<uni-card
	title="网课问卷调查"
    mode="style"
    :is-shadow="true"
    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
>
</uni-card>
<uni-card
	title="在线办公打卡"
    mode="style"
    :is-shadow="true"
    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
>
</uni-card>

</view>
</template>
<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {uniCard},
		data() {
			return {
				
			}
		},
		methods: {
			clickCreateQuestionnaire:function(questionnaireId){
				if(questionnaireId==''){
					console.log("创建空问卷");
					uni.navigateTo({
						url:'addQuestionnaire',
						animationType:'zoom-fade-out',
						animationDuration:2000
					})
				}
			}
		}
	}
</script>

<style scoped>
</style>
