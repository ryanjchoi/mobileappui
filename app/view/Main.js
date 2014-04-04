Ext.define('Ary.view.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'main',
	requires : [ 'Ext.TitleBar' ],
	config : {
		tabBarPosition : 'bottom',

		items : [{
		    title : '한글 문장',
 			iconCls : 'home',
			styleHtmlContent : true,
			scrollable : true,
	
			items : [{
	            xtype: 'toolbar',
	            docked: 'top',
	            title: '한글 문장',
	            items: [{
                	xtype: 'button',
                    hidden: true,
                    id: 'backButton',
                    itemId: 'mybutton1',
                    ui: 'back',
                    text: 'Back'
                },{
                    xtype: 'spacer'
                },{
                    xtype: 'button',
                    itemId: 'addButton',
                    text: 'Add'
                }]
            },{
				xtype : 'formpanel',
				height : 352,
				items : [{
					xtype : 'container',
					height : 50,
					html : '동사(v)와 주어(s)를 찾아보세요.',
					style : 'text-align: center;',
					width : '100%'
				},{
					xtype : 'container',
					height : 30,
					html : '그는 자기의 방안에 있다.',
					style : 'text-align: center;',
					width : '100%'
				},{
					xtype : 'textfield',
					name : 'verb',
					label : '동사',
					placeHolder : '',
					required : true,
					clearIcon : true
				},{
					xtype : 'textfield',
					name : 'subject',
					label : '주어',
					placeHolder : '',
					required : true,
					clearIcon : true
				},{
					xtype : 'button',
					id : 'SaveButton',
					itemId : 'mybutton1',
					margin : 10,
					text : '확인'
				},{
					xtype : 'button',
					id : 'CancelButton',
					itemId : 'mybutton2',
					margin : 10,
					text : '취소'
				}]
            }]
		},{
			title : '영어 문장',
 			iconCls : 'action',
			styleHtmlContent : true,
			scrollable : true,
	
			items : [{
	            xtype: 'toolbar',
	            docked: 'top',
	            title: '영어 문장',
	            items: [{
                    xtype: 'button',
                    hidden: true,
                    id: 'backButton',
                    itemId: 'mybutton1',
                    ui: 'back',
                    text: 'Back'
                },{
                    xtype: 'spacer'
                },{
                    xtype: 'button',
                    itemId: 'addButton',
                    text: 'Add'
                }]
            },{
				xtype : 'formpanel',
				height : 352,
				items : [{
					xtype : 'container',
					height : 50,
					html : '영어 문장에서 동사(v)와 주어(s)를 찾아보세요.',
					style : 'text-align: center;',
					width : '100%'
				},{
					xtype : 'container',
					height : 30,
					html : 'He is in his room.',
					style : 'text-align: center;',
					width : '100%'
				},{
					xtype : 'textfield',
					name : 'subject',
					label : 'Subject',
					placeHolder : '',
					required : true,
					clearIcon : true
				},{
					xtype : 'textfield',
					name : 'verb',
					label : 'Verb',
					placeHolder : '',
					required : true,
					clearIcon : true
				},{
					xtype : 'button',
					id : 'SaveButton',
					itemId : 'mybutton1',
					margin : 10,
					text : '확인'
				},{
					xtype : 'button',
					id : 'CancelButton',
					itemId : 'mybutton2',
					margin : 10,
					text : '취소'
				}]
			}]
		}]
	}
});
