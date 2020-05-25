<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		 wx.login({
			
		      success: function(res) {
		        var code = res.code;
		        if (code) {
		          console.log('获取用户登录凭证：' + code);
				 //  uni.showToast({
				 //  	title:'获取用户登录凭证：' + code,
					// duration:1000,
					// icon:'none'
				 //  }); 
				  let that = this;
				  // console.log(e)
				  // 获取用户信息
				  wx.getSetting({
				    success(res) {
				      // console.log("res", res)
				      if (res.authSetting['scope.userInfo']) {
				        console.log("已授权=====")
				        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
				        wx.getUserInfo({
				          success:function(res) {
				            console.log("获取用户信息成功", res)
				            uni.navigateTo({
				            	url:'index',
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
						uni.navigateTo({
							url:'mainpage',
							animationType:'zoom-fade-out',
							animationDuration:2000
						})
				  //       uni.showToast({
						// 	title:'请授权：' + code,
						// 	duration:1000,
						// 	icon:'none'
						// }); 
				      }
				    }
				  })
		        } else {
		          console.log('获取用户登录态失败：' + res.errMsg);
				 //  uni.showToast({
				 //  	title:'获取用户登录态失败：' + res.errMsg,
					// duration:2000
				 //  });
		        }
		      }
		    });
	},
	onShow: function() {
		
		console.log('App Show');
		// uni.request({
		// 	url:'http://quickbuy.icbc.com.cn/icbc/msy/drainservice/drainageDistributionServices/doDistribution',
		//     data: {
		//         qrcodeId: '1'
		//     },
		// 	method:'GET',
		//     success: (res) => {
		//         console.log('接口调用成功');
		//     }
		// });
		
	},
	onHide: function() {
		console.log('App Hide');
	},
	
};
</script>

<style>
@import "./common/uni.css";
@import "./common/common.css";
</style>
