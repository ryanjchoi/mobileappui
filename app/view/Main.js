Ext.define('Ary.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                /*items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '한글 문장에서 동사(v)와 주어(s)를 찾아보세요.'
                },*/
                

                /*html: [
                    "그는 자기의 방안에 있다."
                ].join(""),*/
                
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '한글 문장에서 동사(v)와 주어(s)를 찾아보세요.'
                },{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '그는 자기의 방안에 있다.'
                },{
                	xtype: 'textfield',
                	name: 'verb',
                	label: '동사',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                },{
                	xtype: 'textfield',
                	name: 'subject',
                	label: '주어',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                },{
                	xtype: 'textfield',
                	name: 'complement',
                	label: '보어',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                },{
                	xtype: 'textfield',
                	name: 'object',
                	label: '목적어',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                },{
                	xtype: 'textfield',
                	name: 'modifiers',
                	label: '수식어1',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                },{
                	xtype: 'textfield',
                	name: 'modifiers',
                	label: '수식어2',
                	placeHolder: '',
                	required: true,
                	clearIcon: true
                }]

            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
