Ext.define(
				'Ary.view.Main',
				{
					extend : 'Ext.tab.Panel',
					xtype : 'main',
					requires : [ 'Ext.TitleBar', 'Ext.Video' ],
					config : {
						tabBarPosition : 'bottom',

						items : [
								{
									title : '한글 문장',
				 					iconCls : 'home',
									styleHtmlContent : true,
									scrollable : true,

									items : [ {
										xtype : 'formpanel',
										height : 352,
										items : [
												{
													docked : 'top',
													xtype : 'titlebar',
													title : '한글 문장에서 동사(v)와 주어(s)를 찾아보세요.'
												},
												{
													xtype : 'container',
													height : 90,
													html : '그는 자기의 방안에 있다.',
													margin : '\'0 0 5 0\'',
													style : 'text-align: center;',
													width : '100%'
												}, {
													xtype : 'textfield',
													name : 'verb',
													label : '동사',
													placeHolder : '',
													required : true,
													clearIcon : true
												}, {
													xtype : 'textfield',
													name : 'subject',
													label : '주어',
													placeHolder : '',
													required : true,
													clearIcon : true
												}, {
													xtype : 'button',
													id : 'SaveButton',
													itemId : 'mybutton1',
													margin : 10,
													text : '확인'
												}, {
													xtype : 'button',
													id : 'CancelButton',
													itemId : 'mybutton2',
													margin : 10,
													text : '취소'
												} ]
									} ]
								},

								{
									title : '영어 문장',
				 					iconCls : 'action',
									styleHtmlContent : true,
									scrollable : true,

									items : [ {
										xtype : 'formpanel',
										height : 352,
										items : [
												{
													docked : 'top',
													xtype : 'titlebar',
													title : '영 문장에서 동사(v)와 주어(s)를 찾아보세요.'
												},
												{
													xtype : 'container',
													height : 90,
													html : 'He is in his room.',
													margin : '\'0 0 5 0\'',
													style : 'text-align: center;',
													width : '100%'
												}, {
													xtype : 'textfield',
													name : 'subject',
													label : '주어',
													placeHolder : '',
													required : true,
													clearIcon : true
												}, {
													xtype : 'textfield',
													name : 'verb',
													label : '동사',
													placeHolder : '',
													required : true,
													clearIcon : true
												}, {
													xtype : 'button',
													id : 'SaveButton',
													itemId : 'mybutton1',
													margin : 10,
													text : '확인'
												}, {
													xtype : 'button',
													id : 'CancelButton',
													itemId : 'mybutton2',
													margin : 10,
													text : '취소'
												} ]
									} ]
								}/*{
									title : 'Get Started',
									iconCls : 'action',

									items : [
											{
												docked : 'top',
												xtype : 'titlebar',
												title : 'Getting Started'
											},
											{
												xtype : 'video',
												url : 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
												posterUrl : 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
											} ]
								}*/ ]
					}
				});
