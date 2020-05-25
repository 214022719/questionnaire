<template>
	<view>
			<button open-type="getUserInfo" @getuserinfo="getUserInfo"> 授权获取头像昵称 </button>
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">授权获取手机号</button>
	</view>
</template>
<script>
	export default{
		data() {
		    return {
				ifShow:false
			}
		},
		methods:{
			getPhoneNumber:function(e){
				console.log(e.detail);
			},
			getUserInfo: function(e) {
			    let that = this;
			    wx.getSetting({
			      success(res) {
			        // console.log("res", res)
			        if (res.authSetting['scope.userInfo']) {
			          console.log("已授权=====")
			          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
			          wx.getUserInfo({
			            success:function(res) {
			              console.log("获取用户信息成功", res)
			              uni.switchTab({
			              	url:'/pages/index/index',
							animationType:'zoom-fade-out',
							animationDuration:2000
			              })
			            },
			            fail(res) {
			              console.log("获取用户信息失败", res)
			            }
			          })
					  }
			         else {
			          console.log("未授权=====")
			          that.showSettingToast("请授权")
			        }
			      }
			    })
			  },
			  showSettingToast: function(e) {
			      wx.showModal({
			        title: '提示！',
			        confirmText: '去设置',
			        showCancel: false,
			        content: e,
			        success: function(res) {
			          if (res.confirm) {
			            console.log('ads');
			          }
			        }
			      })
			    }
		},
		mounted(){
			
		}
	}
</script>
<style>
	
</style>