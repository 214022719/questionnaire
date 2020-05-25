<template>
    <view class="content">
		<view class='userinfo'>
			<open-data style="width" type="userAvatarUrl"></open-data>
			<open-data type="userNickName"></open-data>
		</view>
         <view class="uni-list">
             <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
                  <view class="uni-list-cell-navigate uni-navigate-right">
                       {{item}}
                  </view>
             </view>
         </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
			list:['我创建的问卷'],
          
            current: 0,
			webViewSrc:'https://pingjia.icbc.com.cn/icbc/rating/fitment/evaluation.jsp?cisNo=&qId=ICBCWJ-20200205-3745&type=view&srcType=null&67f977b1ad597511737fff13a2909c1614c41391=0',
			webviewStyles: {
			                    progress: {
			                        color: '#FF3333'
			                    }
			                },
			ifShow:false
        }
    },
    methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.target.value) {
                    this.current = i;
                    break;
                }
            }
        },
		routeTo:function(){
			this.$data.ifShow=true;
		},
    }
	
}
</script>

<style>
	/* 以下样式用于 hello uni-app 演示所需 */
	   page {
	       background-color: #F4F5F6;
	       height: 100%;
	       font-size: 28rpx;
	       line-height: 1.8;
	   }
	   .uni-header-logo {
	       padding: 30rpx;
	       flex-direction: column;
	       justify-content: center;
	       align-items: center;
	       margin-top: 10rpx;
	   }
	   .uni-header-image {
	       width: 100px;
	       height: 100px;
	   }
	   .uni-hello-text {
	       color: #7A7E83;
	   }
	   .uni-hello-addfile {
	       text-align: center;
	       line-height: 300rpx;
	       background: #FFF;
	       padding: 50rpx;
	       margin-top: 10px;
	       font-size: 38rpx;
	       color: #808080;
	   }
	   .userinfo{
		   width:30%;
		   display:flex;
		   align-items:center;
	   }
</style>
