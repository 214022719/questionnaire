<template>
	<view class="uni-page-body">
		<view class="uni-container">
			<text class="uni-common-mt">问卷标题</text>
			<view>
				<view class="uni-form-item uni-column">
					<input class="uni-input" focus placeholder="为了给您提供更好的服务,希望能花一分钟时间填写问卷" />
				</view>
			</view>
			<text class="uni-common-mt">问卷列表</text>
			<view>
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
						 <view class="uni-list-cell-navigate uni-navigate-right">
							  {{item}}
						 </view>
					</view>
				</view>
				<button class="add-question-button" type="default" >按钮</button>
			</view>
			<text class="uni-common-mt">结束语</text>
			<view>
				<view class="uni-form-item uni-column">
					<input class="uni-input"  placeholder="问卷到此结束,感谢您的支持" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:['请输入您的家庭住址','请选择您的性别','请输入您的联系方式'],
			}
		}
	}
</script>

<style>
	.add-question-button{
		backgroun: trans;
	}
	
</style>
