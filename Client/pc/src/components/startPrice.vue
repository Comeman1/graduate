<template>
<!-- 发起众筹模块 -->
    <div class="process">
            <div class="frame">
             <div class="substance">
               <div class="sidebar clearfix ">
                   <ul class="active" >
                       <li   @click="help"  :class="[name?bgc:bg]">帮助中心</li>
                       <li @click="exchange" >公司资质</li>
                       <li @click="show">项目发起规范</li>
                       <li @click="col" >服务协议</li>
                       <li @click="deg">用户注册服务</li>
                       <li @click="connect">联系我们</li>
                       <li >关于众筹</li>
                   </ul>
               </div>
            <div class="maincomp">
              <div :class="{block:isblock}" >
            <div class="top clearfix">
             <ul>
               <li >常见注册问题</li>
               <li class="first">奖励众筹支持者</li>
               <li >奖励众筹发起者</li>
             </ul>
            </div>
            <div class="content" >
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="1、众筹是什么？" name="1" class="notxt">
                  <div class="textstyle">众筹译自crowdfunding，即大众筹资。当代众筹指通过互联网发布筹款项目并筹集资金。只要是网友喜欢的项目，
                    都可以通过众筹方式获得项目启动的第一笔资金，或者获得项目发展的第一批粉丝用户。</div>
                </el-collapse-item>
                <el-collapse-item title="2、如何成为注册用户？" name="2" class="notxt">
                  <div >
                  <div class="textstyle">1、点击“快速注册”，通过手机号码进行注册；</div>
                        <p>2、点击“快速注册”，通过邮箱进行注册；（仅支持pc端）</p>
                      <p>  3、点击“登录”，无需注册，通过手机短信登录；</p>
                      <p>  4、通过新浪微博、微信（仅支持app）、QQ进行账号关联登录。</p>
                      </div>
                </el-collapse-item>
                <el-collapse-item title="3、手机号码注册时，为什么收不到验证码？" name="3" class="notxt">
                  <div class="textstyle">
                    <p>1、请确认您的手机是否对此类系统短信进行拦截设置，需解除设置；</p>
                    <p>2、曾向运营商投诉，拒收此类短信，可联系众筹网查询原因。</p>
                  </div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="4、忘记账号是否可以查询？" name="4" class="notxt">
                  <div class="textstyle">
                很抱歉，我们无法查询注册账号，建议您再尝试一下，或者重新注册，
                若您曾经支持过项目，会按正常流程办理，不会对您造成任何影响。
                  </div>
              </el-collapse-item>
              <el-collapse-item title="5、如何更换注册账号？" name="4" class="notxt">
                  <div class="textstyle">如果为手机注册用户，您可以打开众筹网app，点击右下角“我的”，进入“个人中心”，点击头像，进入“个人资料”，选择“手机”，按提示输入当前绑定的手机号，通过验证后，根据提示输入新绑定的手机号，并输入获取的验证码，验证通过后，即为更换成功。
                    新绑定的手机号码必须为未注册过众筹网的手机号码。 邮箱注册的用户暂时无法更换注册账号。</div>
              </el-collapse-item>
                <el-collapse-item title="6、网站提示密码错误，怎么办？" name="4" class="notxt">
                  <div class="textstyle">请点击登录下方找回密码</div>
              </el-collapse-item>
              </el-collapse>
            </div>
            </div>
            <div :style="{display: see}"> 
              <img src="../assets/licen.png" alt="">
            </div>

   <div id="box" :class="{box:isbox}">
			
				<ul id="heads">
				
					<li>出版</li>
					<li>公益</li>
					<li>农业</li>
					<li>艺术</li>
					<li>娱乐</li>
					<li>区块链</li>
					<li>注意事项</li>
					</ul>
	</div>

		
			<div id="content" :class="{box:isbox}">
			
				<div class="tab" style="display:block;">
					<p>
						<b>出版</b>：是以国家正规出版物为核心的众筹平台。旨在搭建一个高效、安全、快捷的互联网众筹平台，充分实现资本的合理流动和资源的优化配置。多少人都梦想希望自已的作品能出版，无论你是图书出版机构还是个人写作爱好者，那就来众筹网出版频道吧！愿在我们的共同配合下，您的作品能够更快更好分享给更多的读者。
					</p>

					<p>
						<b>出版众筹支持的项目类型</b><br /> 出版：经过正规出版社审核并进入出版流程折作品。
						<br/> 周边：笔记本、台历、明信片及图书相关周边。
						<br/> 画册：摄影集、画册。
						<br/> 活动：活动沙龙、培训课程、读者见面会。
						<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b><br /> 无正规出版计划的作品、大陆以外出版作品。
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>法人代表身份证复印件</li>
							<li>营业执照</li>
							<li>税务登记证</li>
							<li>组织机构代码证</li>
							<li>出版物经营许可证</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b><br /> 
						发起方需为以下机构或个人：<br /> 
						出版社。<br /> 
						出版公司<br /> 
						图书策划工作室<br /> 
						个人写作爱好者<br />
					</p>
					
				</div>
			
				<div class="tab"> 
					<p>
						<b>公益</b>：公益众筹，为公益创新而生。众筹网公益众筹，秉承着可持续、衍生性、创造力的公益理念，面向公益机构和个人，提供一站式策划、筹资、运营服务。公益众筹以其独特的方式提升了公益活动的体验与参与感，提高公益项目的透明度，成为创意公益的市场，可以为企业提供先进、优质的CSR服务。
					</p>
					<p>
						<b>公益众筹支持的项目类型</b><br /> 
						支教助学：大学生、社会团体对边远地区的学校进行支教活动<br/> 
						青年创新：青年人以创新的方式实现公益理想<br/> 
						绿色环保：保护、改善环境，践行环保理念，提倡绿色生活<br/> 
						儿童关爱：关爱少年儿童，对他们提供身体和精神上的关怀<br/>
						社会企业：鼓励社会企业创新，用商业手段贡献社会价值<br/> 
						动物保护：保护珍稀动物，改善其生存的环境，进行人道主义关怀<br/> 
						扶老助孤：扶助老弱病残群体，帮助他们自力更生<br/>
						妇女家庭：关爱妇女健康和安全，关注家庭生活<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b> 
						<ol style="margin-left: 40px;">

							<li>苦情类项目 </li>
							<li>疾病救助类 </li>
							<li>灾难救助类 </li>
							<li>个人旅游类</li>
							<li>宗教类</li>
						</ol>
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>对于个人发起的项目，需提供身份证等；</li>
							<li>非营利性基金会、社会团体或民办非企业单位，需要提供法人登记证书及税务登记证；</li>
							<li>境外成立的的公益机构在国内的分支机构或办事处，需要提供具备中国大陆法律效力的相关身份认证文件</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b>
						<ol style="margin-left: 40px;">
							<li>项目上线后，相关项目经理和运营经理会对项目进展进行实时监测。</li>
							<li>
								监督项目发起人完成以下几点要求：<br/>
      							建立微信群，邀请每一位投资人入群进行和沟通；<br/>
    							在关键时间节点，对项目进展进行更新；<br/>
      							36小时内对话题区的留言进行回应，解答用户提出的疑问。</li>
							<li>项目成功后，项目经理会根据以上要求的完成情况联系发起人进行结算或采取其他行动。</li>
						</ol>
					</p>
				</div>
			
				<div class="tab"> 
				<p>
						<b>农业</b>：是以国家正规出版物为核心的众筹平台。旨在搭建一个高效、安全、快捷的互联网众筹平台，充分实现资本的合理流动和资源的优化配置。多少人都梦想希望自已的作品能出版，无论你是图书出版机构还是个人写作爱好者，那就来众筹网出版频道吧！愿在我们的共同配合下，您的作品能够更快更好分享给更多的读者。
					</p>

					<p>
						<b>农业众筹支持的项目类型</b><br /> 出版：经过正规出版社审核并进入出版流程折作品。
						<br/> 周边：笔记本、台历、明信片及图书相关周边。
						<br/> 画册：摄影集、画册。
						<br/> 活动：活动沙龙、培训课程、读者见面会。
						<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b><br /> 无正规出版计划的作品、大陆以外出版作品。
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>法人代表身份证复印件</li>
							<li>营业执照</li>
							<li>税务登记证</li>
							<li>组织机构代码证</li>
							<li>出版物经营许可证</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b><br /> 
						发起方需为以下机构或个人：<br /> 
						出版社。<br /> 
						出版公司<br /> 
						图书策划工作室<br /> 
						个人写作爱好者<br />
					</p>
				</div>
				<div class="tab"> 
				<p>
						<b>艺术</b>：艺术众筹，为公益创新而生。众筹网公益众筹，秉承着可持续、衍生性、创造力的公益理念，面向公益机构和个人，提供一站式策划、筹资、运营服务。公益众筹以其独特的方式提升了公益活动的体验与参与感，提高公益项目的透明度，成为创意公益的市场，可以为企业提供先进、优质的CSR服务。
					</p>
					<p>
						<b>艺术众筹支持的项目类型</b><br /> 
						支教助学：大学生、社会团体对边远地区的学校进行支教活动<br/> 
						青年创新：青年人以创新的方式实现公益理想<br/> 
						绿色环保：保护、改善环境，践行环保理念，提倡绿色生活<br/> 
						儿童关爱：关爱少年儿童，对他们提供身体和精神上的关怀<br/>
						社会企业：鼓励社会企业创新，用商业手段贡献社会价值<br/> 
						动物保护：保护珍稀动物，改善其生存的环境，进行人道主义关怀<br/> 
						扶老助孤：扶助老弱病残群体，帮助他们自力更生<br/>
						妇女家庭：关爱妇女健康和安全，关注家庭生活<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b> 
						<ol style="margin-left: 40px;">

							<li>苦情类项目 </li>
							<li>疾病救助类 </li>
							<li>灾难救助类 </li>
							<li>个人旅游类</li>
							<li>宗教类</li>
						</ol>
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>对于个人发起的项目，需提供身份证等；</li>
							<li>非营利性基金会、社会团体或民办非企业单位，需要提供法人登记证书及税务登记证；</li>
							<li>境外成立的的公益机构在国内的分支机构或办事处，需要提供具备中国大陆法律效力的相关身份认证文件</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b>
						<ol style="margin-left: 40px;">
							<li>项目上线后，相关项目经理和运营经理会对项目进展进行实时监测。</li>
							<li>
								监督项目发起人完成以下几点要求：<br/>
      							建立微信群，邀请每一位投资人入群进行和沟通；<br/>
    							在关键时间节点，对项目进展进行更新；<br/>
      							36小时内对话题区的留言进行回应，解答用户提出的疑问。</li>
							<li>项目成功后，项目经理会根据以上要求的完成情况联系发起人进行结算或采取其他行动。</li>
						</ol>
					</p>
				</div>
			
				<div class="tab"> 
					<p>
						<b>娱乐</b>：是以国家正规出版物为核心的众筹平台。旨在搭建一个高效、安全、快捷的互联网众筹平台，充分实现资本的合理流动和资源的优化配置。多少人都梦想希望自已的作品能出版，无论你是图书出版机构还是个人写作爱好者，那就来众筹网出版频道吧！愿在我们的共同配合下，您的作品能够更快更好分享给更多的读者。
					</p>

					<p>
						<b>娱乐众筹支持的项目类型</b><br /> 出版：经过正规出版社审核并进入出版流程折作品。
						<br/> 周边：笔记本、台历、明信片及图书相关周边。
						<br/> 画册：摄影集、画册。
						<br/> 活动：活动沙龙、培训课程、读者见面会。
						<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b><br /> 无正规出版计划的作品、大陆以外出版作品。
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>法人代表身份证复印件</li>
							<li>营业执照</li>
							<li>税务登记证</li>
							<li>组织机构代码证</li>
							<li>出版物经营许可证</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b><br /> 
						发起方需为以下机构或个人：<br /> 
						出版社。<br /> 
						出版公司<br /> 
						图书策划工作室<br /> 
						个人写作爱好者<br />
					</p>
				</div>
				<div class="tab"> 
				<p>
						<b>区块链众筹</b>：公益众筹，为公益创新而生。众筹网公益众筹，秉承着可持续、衍生性、创造力的公益理念，面向公益机构和个人，提供一站式策划、筹资、运营服务。公益众筹以其独特的方式提升了公益活动的体验与参与感，提高公益项目的透明度，成为创意公益的市场，可以为企业提供先进、优质的CSR服务。
					</p>
					<p>
						<b>区块链众筹支持的项目类型</b><br /> 
						支教助学：大学生、社会团体对边远地区的学校进行支教活动<br/> 
						青年创新：青年人以创新的方式实现公益理想<br/> 
						绿色环保：保护、改善环境，践行环保理念，提倡绿色生活<br/> 
						儿童关爱：关爱少年儿童，对他们提供身体和精神上的关怀<br/>
						社会企业：鼓励社会企业创新，用商业手段贡献社会价值<br/> 
						动物保护：保护珍稀动物，改善其生存的环境，进行人道主义关怀<br/> 
						扶老助孤：扶助老弱病残群体，帮助他们自力更生<br/>
						妇女家庭：关爱妇女健康和安全，关注家庭生活<br/>
					</p>
					<p>
						<b>暂不接受以下分类</b> 
						<ol style="margin-left: 40px;">

							<li>苦情类项目 </li>
							<li>疾病救助类 </li>
							<li>灾难救助类 </li>
							<li>个人旅游类</li>
							<li>宗教类</li>
						</ol>
					</p>
					<p>
						<b>需要提供的资质（扫描件且需盖章/签字）</b>
						<ol style="margin-left: 40px;">
							<li>对于个人发起的项目，需提供身份证等；</li>
							<li>非营利性基金会、社会团体或民办非企业单位，需要提供法人登记证书及税务登记证；</li>
							<li>境外成立的的公益机构在国内的分支机构或办事处，需要提供具备中国大陆法律效力的相关身份认证文件</li>
						</ol>
					</p>

					<p>
						<b>项目要求</b>
						<ol style="margin-left: 40px;">
							<li>项目上线后，相关项目经理和运营经理会对项目进展进行实时监测。</li>
							<li>
								监督项目发起人完成以下几点要求：<br/>
      							建立微信群，邀请每一位投资人入群进行和沟通；<br/>
    							在关键时间节点，对项目进展进行更新；<br/>
      							36小时内对话题区的留言进行回应，解答用户提出的疑问。</li>
							<li>项目成功后，项目经理会根据以上要求的完成情况联系发起人进行结算或采取其他行动。</li>
						</ol>
					</p>
				
				</div>
			
				<div class="tab"> 
					<p>
						<b>以下类别的项目和内容将不被允许在此发布：</b>
						<ol style="margin-left: 40px;">
							<li>违反国家法律法规，危害国家安全，损害国家荣誉和利益，破坏国家统一</li>
							<li>与种族、党派、民族仇恨相关，涉及宗教信仰，甚至宣扬邪教和封建迷信</li>
							<li>侵犯他人专利，商标，版权，商业秘密，形象权等</li>
							<li>含有淫秽、色情、赌博、暴力、武器</li>
							<li>含有虚假、侵害他人隐私、粗俗等道德上令人反感的内容</li>
							<li>洗浴和美容护肤产品相关（个人）</li>
							<li>保健品、营养补充剂相关</li>
							<li>药物、医疗器械相关</li>
							<li>彩票相关</li>
							<li>烟草制品、毒品、类似毒品的物质、吸毒用具等相关</li>
							<li>建设网站、开网店</li>
							<li>项目或回报中涉及股权、债券、回购、返现、分红、利息形式等</li>
						</ol>
					</p>
				</div>
				</div>





		<div class="deal"  :class="{coll:iscol}">
			<p>
				众筹网（网址:http://www.zhongchou.cn）是北京网信众筹网络科技有限公司旗下经营的网站。本协议双方为北京网信众筹网络科技有限公司（简称“众筹网”）与众筹网项目发起人（简称“您”或“用户”）。在您使用众筹网提供的服务之前，请务必认真阅读本协议的全部内容。本协议一经您点击确认并同意接受，即在您与众筹网之间产生法律效力。
			</p>
			<div>
				<p class="col">一、 定义</p>
				<ol>
					<li>项目发起人：在众筹网平台注册并发起众筹项目的单位或个人；</li>
					<li>项目投资人：在众筹网平台注册并投资某众筹项目的单位或个人。</li>
					<li>保证金：项目发起人在众筹网平台发起的项目，由众筹网作为代收款方，收取项目投资人基于项目投资明细单而支付的众筹金额。项目众筹成功后，众筹网留存项目众筹总金额的30%作为保证金，在项目发起人兑现对项目投资人的回报承诺后，众筹网将该保证金返还给项目发起人。如果项目发起人未兑现对项目投资人的回报承诺，则众筹网有权直接支配该保证金以用于兑现对项目投资人的回报承诺。</li>
					<li>资金支付渠道费：为保证众筹资金安全，众筹项目项下资金均通过第三方支付公司代为划转，由此产生的支付渠道费由项目发起人负担，项目众筹成功后，众筹网将扣除项目众筹总金额的3%作为资金支付渠道费，并支付给第三方支付机构。如众筹项目不成功，则不收取该笔费用。另，如众筹项目已众筹成功，但由于发起人原因无法履行回报的，发起人需向众筹网支付相当于筹资总金额的3%的资金支付手续费。</li>
				</ol>
			</div>
				<div>
				<p class="col">二、本协议的构成及效力</p>
				<ol>
					<li>所有众筹网已经发布的或将来发布的各类规则，作为本协议不可分割的一部分，与本协议具有同等的法律效力。</li>
					<li>众筹网有权根据需要适时修订本协议及各类规则，并在网站上公示。变更后的协议和规则一经在众筹网站上公示，即发生法律效力。</li>
					<li>在使用众筹网提供的服务之前，请务必认真阅读本协议的全部内容。如您对本协议有任何疑问，应向众筹网咨询。本协议生效后，您不应以未阅读或不接受本协议的内容为由，主张本协议无效或要求撤销本协议</li>
					<li>您应该按照本协议约定行使权利并履行义务。如您不能接受本协议的约定，包括但不限于不能接受修订后的协议及各类规则，则您应立即停止使用众筹网针对项目发起人提供的服务。如您继续使用众筹网针对项目发起人提供的服务，则表示您同意并接受本协议及各类规则的约束。</li>
				</ol>
			</div>
			<div>
				<p class="col">三、项目发起人的资格</p>
				<ol>
					<li>作为项目发起人，您应为众筹网的注册用户，完全理解并接受本协议。</li>
					<li>作为项目发起人的单位应为依法成立并登记备案的企业法人或其他组织；作为项目发起人的个人，应为年满18周岁并具有完全民事行为能力和民事权利能力的自然人，如项目发起人未满18周岁，应由其监护人代为履行本协议权利和义务。</li>
					<li>您应拥有在中国大陆地区开户并接收人民币汇款的银行卡或支付宝账户。</li>
					<li>您应妥善保管在众筹网的用户名和密码，凡使用您的用户名和密码登陆众筹网进行的一切操作，均视为您本人的行为，一切责任由您本人承担。</li>
				</ol>
			</div>
			<div>
				<p class="col">四、您发起的众筹项目应符合以下要求</p>
				<ol>
					<li>您在众筹网上发起的项目，应明确具体的开始时间和结束时间。截止项目结束时间，如项目众筹金额低于预定众筹金额，则项目众筹失败；如项目众筹金额等于或大于预定众筹金额，则项目众筹成功。</li>
					<li>你不应抄袭、盗用他人的成果发起众筹项目，创意类产品必须为原创。</li>
					<li>您发起的项目不得包含非法、色情、淫秽、暴力等内容，不得含有攻击性、侮辱性言论，不得含有违反国家法律法规、政策的内容及其他众筹网认为不适宜的内容。</li>
					<li>您在众筹网上发起的项目不得涉及种族主义、宗教极端主义、恐怖主义等内容。</li>
				</ol>
			</div>
			<div>
				<p class="col">五、项目回报</p>
				<ol>
					<li>您在发起项目时，应明确项目众筹成功后的回报时间。</li>
					<li>您承诺，如项目众筹成功，及时兑现对项目投资人承诺的回报；如项目众筹失败，同意众筹网将众筹款项及时退还项目投资人，并由您就项目众筹失败的原因等对项目投资人作出解释。</li>
					<li>如您在兑现对项目投资人的回报过程中，与第三方（包括但不限于物流公司）发生纠纷，一切责任由您本人承担，与众筹网无关。</li>
					<li>如您与项目投资人在兑现回报过程中发生纠纷，一切责任由您本人承担，如因此给众筹网造成经济或名誉损失，您应赔偿损失、恢复名誉。</li>
				</ol>
			</div>
			<div>
				<p class="col">六、协议终止</p>
				<ol>
					<li>
						1、以下任一情形出现，本协议即终止<br />
 						（1）您发起的项目违反了国家法律法规、政策或众筹网的平台使用规则或本协议约定，众筹网停止为您提供服务的；<br />
 						（2）您本人不同意接受本协议约定（含众筹网发布的各类规则），并停止使用众筹网针对项目发起人提供的服务的；<br />
 						（3）您不符合本协议约定的项目发起人应具备的资格的；<br />
 						（4）其他原因导致本协议终止的。
					</li>
					<li>本协议终止后，不影响您因在本协议终止前的行为应承担的义务和责任。</li>

				</ol>
			</div>
			<div>
				<p class="col">七、本协议的解释权归北京网信众筹网络科技有限公司所有。</p>
				
			</div>

</div>
      	<div class="degi" :class="{deg:isdeg}">
			<h2 style="text-align: center;">用户注册服务协议</h2>
			<p>
				众筹网( <span style="color: cornflowerblue;">www.zhongchou.cn</span> )是北京网信众筹网络科技有限公司（简称“众筹网”）运营的网络平台，本协议的双方是众筹网的注册用户（简称“您”或“用户”）与众筹网。在您注册并使用“众筹网”提供的各项服务之前，请您务必仔细阅读并透彻理解本协议条款。如果您同意注册并使用“众筹网”提供的服务，视为您已经认真阅读、理解并完全接受了本协议全部内容，本协议即时在您与众筹网之间发生法律效力。
			</p>
			
			<div>
				<p>以下为本协议内容：</p>
				<ol>
					<li>您应是具有完全民事权利能力和民事行为能力的自然人，或依法设立并有效存续的单位（包括企业法人及其他组织）。</li>
					<li>您应妥善保管您的登录用户名和密码，使用您的用户名和密码登陆众筹网进行的任何操作，将视为您本人的操作，一切后果由您本人承担。如果您的用户名或密码泄露，您应立即通知众筹网，以避免可能的损失。</li>
					<li>您在注册时及在使用众筹网提供的服务时提供的相关资料及信息应真实、准确、有效、完整，且不存在误导陈述，不侵害其他人的知识产权及合法权益。前述资料及信息包括：您在注册或登录过程中、在任何公共信息区域（包括但不限于项目展示页、留言栏或反馈区）或通过任何电邮形式或手机短信向众筹网或其他用户提供的所有内容。</li>
					<li>为更好地保护您的合法权益并向您提供优质、高效的服务，众筹网可能将您的信息应用在以下方面</li>
					<li>众筹网将针对您参与的奖励式众筹项目向您发送相关电子邮件或短信，同时也会将此类邮件或短信的发送控制在最低限度，如果您不选择退订系类邮件或短信，视为您接受众筹网继续向您发送此类邮件或短信。</li>
					<li>众筹网作为众筹信息发布平台，为项目发起人及有意为项目提供众筹支持的人提供信息发布服务。众筹网仅对项目发起人发起的项目进行形式审查，不对项目信息的真实性承担实质性审核责任。在您对项目发起人通过众筹网发布的项目提供众筹支持时，应认真阅读有关该项目的一切信息。<b>如果您确定为某项目提供众筹支持，视为您已经完全理解并接受该项目的相关内容及风险，一切后果由您本人承担，众筹网不承担任何责任。</b></li>
					<li>众筹网不保证您通过众筹网发布的所有项目均能够众筹成功，也不保证您发起的项目的最终筹款金额。针对奖励式众筹项目，如项目众筹失败，众筹网会协助项目发起人将众筹金额无息返还给项目支持人，项目发起人或项目支持人均不得要求众筹网承担任何责任。</li>
					<li>如项目发起人通过众筹网发布的奖励式众筹项目众筹成功，则众筹网会协助、监督项目发起人兑现对项目支持人的回报，如项目发起人与项目支持人因此产生纠纷，应双方协商解决，众筹网可提供必要的协助，但任何一方均不得要求众筹网承担任何责任。</li>
					<li>众筹网应对您提供的信息履行保密义务，非为本协议约定之目的或按照法律、法规、有权机关的要求进行信息披露外，未经您事先书面同意，众筹网不应向任何第三方披露您的信息。</li>
					<li>您在使用众筹网提供的服务时应遵守中华人民共和国相关法律法规、不得将本服务用于任何非法目的，也不得以任何非法方式使用本服务。</li>
					<li>当您存在包括但不限于下列情形之一时，众筹网有权立即终止向您提供服务而无需承担任何责任，并有权要求您赔偿众筹网因此遭受的一切损失：</li>
					<li>用户选择将其在众筹网的注册账号与用户在与众筹网合作的第三方的注册帐号进行绑定的，如发生下列任何一种情形，众筹网有权解除用户的绑定，且无需对用户或任何第三方承担任何责任：</li>
					<li>众筹网并不对上述任何由第三方提供的功能、软件、服务或内容进行任何保证性的、或连带性的承诺或担保，由此产生的任何纠纷、争议或损害，由用户与第三方自行解决，众筹网不承担任何责任；</li>
					<li>众筹网是本平台的所有权及知识产权权利人。</li>
					<li>您理解并同意，众筹网不对因下述任一情况导致的您的任何损害承担赔偿责任，包括但不限于利润、商誉、使用、数据等方面的损失或其他无形损失的损害赔偿 (无论众筹网是否已被告知该等损害赔偿发生的可能性)：</li>
					<li>因以下任一情形导致您无法使用全部或部分服务时，众筹网不承担任何责任，该情形包括但不限于</li>
					<li>众筹网依据本协议约定中止或终止向您提供服务后，并不能免除您在中止或终止前实施的行为应承担的任何法律后果。</li>
					<li>本协议的成立、生效、履行，均适用中华人民共和国法律解释。</li>
					<li>众筹网发布的各类规则、协议、条款等，构成本协议不可分割的组成部分。众筹网有权随时调整本协议的内容，并在众筹网公布，如您不能接受变更后的协议内容，请立即停止使用众筹网提供的服务。如您继续使用众筹网提供的服务，视为您理解并接受调整后的本协议。</li>
					<li>双方在履行本协议的过程中，如发生争议，应协商解决。协商不成的，应提交北京市朝阳区人民法院诉讼解决。</li>
					<li>您同意，在发生并购时，众筹网在本协议和所有纳入协议的条款和规则项下的所有或者部分权利和义务，可由众筹网自行酌情决定向第三方进行转让。</li>
			
				</ol>
			</div>
	</div>

<div class="lianxi" :class="{connect:isconnect}">
			<h3 class="biaoti">公司联系方式</h3>
			<div class="clear">
				<div class="left">
					<p>客服电话：400-010-6810</p>
	
					<p>微信客服：公众账号"zhongchouwang"-个人中心－客服</p>
	
					<p>工作时间：周一至周五 09:30－18:30（国家法定假日除外）</p>
	
					<p>公司地址：北京市朝阳区霄云路28号院2号楼网信大厦</p>
				</div>
				<div class="right">
					<p>客服邮箱：zhongchoukf@ucfgroup.com</p>
					<p>商务合作邮箱：zhongchoukf@ucfgroup.com</p>
					<p>媒体合作邮箱：zhangshanshan3@ucfgroup.com</p>
				</div>
			</div>
		</div>

    </div>




    </div>
</div>
</div>
</template>
<script>
export default {
  name: "startPrice",
  data() {
    return {
      activeNames: ["1"],
      isblock: true,
      see: "none",
      name: true,
      bgc:'bgc',
      isbox:true,
      iscol:true,
      isdeg:true,
      isconnect:true
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    exchange() {
      this.isblock = true;
      this.see = "block";
      this.isbox = true;
      this.iscol = true;
      this.isdeg = true;
       this.isconnect = true
    },
    help() {
      this.isblock = false;this.see = "none";
        this.isbox = true;
      this.iscol = true;
      this.isdeg = true;
       this.isconnect = true
    },
    show(){
      this.isblock = true;
       this.see = "none";
      this.isbox = false;
        this.iscol = true;
        this.isdeg = true;
         this.isconnect = true
    },
    col(){
       this.isblock = true;
       this.see = "none";
      this.isbox = true;
      this.iscol = false;
      this.isdeg = true;
       this.isconnect = true
    },
    deg(){
         this.isblock = true;
       this.see = "none";
      this.isbox = true;
      this.iscol = true;
      this.isdeg = false;
      this.isconnect = true
    },
    connect(){
      this.isblock = true;
       this.see = "none";
      this.isbox = true;
      this.iscol = true;
      this.isdeg = true;
      this.isconnect = false
    }
  },
  mounted() {
     this.isblock = false;
    	var lis = document.getElementById("heads").getElementsByTagName("li");  
			var divs = document.getElementById("content").getElementsByTagName("div");  
			for(var i = 0; i < lis.length; i++) {   
				lis[i].index = i;	   
				lis[i].onmousemove = function() {      
					for(var j = 0; j < lis.length; j++) {        
						lis[j].className = "";       
					}    
					this.className = "hover";       
					for(var i = 0; i < divs.length; i++) {        
						divs[i].style.display = "none";       
					}      
					divs[this.index].style.display = "block"; 
				}  
			}
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box,.coll, .deg,.connect{
  display: none;
}
.clearfix::after {
  content: "";
  width: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}
.process {
  width: 100%;
  height: 100%;
}
.frame {
  width: 1345px;
  height: 1300px;
  background-color: #eceff1;
}
.substance {
  width: 1024px;
  height: 100%;
  margin: auto;
  border: 1px solid transparent;
}
.sidebar {
  margin-top: 30px;
  width: 220px;
  height: 360px;
  background-color: #fff;
  padding-top: 20px;
  border-radius: 3px;
  float: left;
  border: 1px solid #ddd;
}
.sidebar > ul > li {
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
}

.sidebar > ul > li:hover {
  background-color: #71aaf8;
  cursor: pointer;
  color: #fff;
}
.bgc {
  background-color: #71aaf8;
}
.maincomp {
  width: 780px;
  min-height: 350px;
  background-color: #fff;
  border: 1px solid　#ddd;
  margin-left: 245px;
  margin-top: 30px;
  border-radius: 3px;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 50px;
}
.top ul li {
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.top ul li:hover {
  background-color: rgb(231, 225, 225);
}
.notxt {
  padding-left: 20px;
}
.textstyle {
  word-break: break all;
  text-align: left;
}
.first {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.block {
  display: none;
}
.license {
  padding-top: 20px;
}
	#box {
				width: 783px;
				height: 640px;
        margin-top:20px;
				position: relative;
			}
			
			#heads {
				letter-spacing: -8px;
				padding: 0px;
				font-size: 16px;
				margin-top: -21px;
        text-align: left;
			}
			
			#heads li {
				list-style: none;
				display: inline-block;
				width: 100px;
				height: 50px;
				border: 1px solid gainsboro;
				background-color: white;
				letter-spacing: normal;
				line-height: 50px;
				text-align: center;
				font-weight: bold;
				cursor: pointer;
			}
      		#heads li:hover{
            background-color: #eee;
          }
			
			#content {
				width: 780px;
				height: 580px;
				
			}
			
			.tab {
				width: 780px;
				display: none;
				position: absolute;
				margin-top: -595px;
				/* margin-left: 283px; */
			}
			.tab p {
				margin-left: 20px;
				margin-top: 15px;
        text-align: left;
			}
			.hover {
				border: 2px solid red;
			}
	.deal{
				width: 780px;
        text-align: left;
        padding-left:10px;
			}
			.col{
				font-size: 18px;
				color: deepskyblue;
			}
      .degi{
				width: 780px;
        text-align: left;
        padding-left:10px;
			}
     
      	.lianxi{
				width: 780px;
        padding-top:20px;
        text-align: left;
			}
			.left{
					display: inline-block;
					margin-left: 20px;
					
			}
			.right{
				/* float: right; */
				margin-left: 14px;
				margin-top: 20px;
			
			}
			.clear{
				clear: both;
				font-size: 14px;
			}
			.biaoti{
				margin-left: 20px;
				font-weight: normal;
			}
</style>
