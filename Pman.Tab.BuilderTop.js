//<script type="text/javascript">

// Auto generated file - created by app.Builder.js- do not edit directly (at present!)



// register the module first
Pman.on('beforeload', function()
{
    Pman.register({
        modKey : '001-Pman.Tab.BuilderTop',
        module : Pman.Tab.BuilderTop,
        region : 'north',
        parent : Pman.Tab.BuilderTab,
        name : "Pman.Tab.BuilderTop",
        disabled : false, 
        permname: '' 
    });
});

Pman.Tab.BuilderTop = new Roo.util.Observable({

    panel : false,
    disabled : false,
    parentLayout:  false,

    add : function(parentLayout, region)
    {

        var _this = this;
        this.parentLayout = parentLayout;

        this.panel = parentLayout.addxtype({
            xtype: 'ContentPanel',
            xns: Roo,
            background : true,
            fitToFrame : true,
            region : 'north',
            toolbar : {
                xtype: 'Toolbar',
                xns: Roo,
                items : [
                    {
                        xtype: 'Button',
                        xns: Roo.Toolbar,
                        text : "Manage Modules",
                        menu : {
                            xtype: 'Menu',
                            xns: Roo.menu,
                            items : [
                                {
                                    xtype: 'Item',
                                    xns: Roo.menu,
                                    listeners : {
                                        click : function (_self, e)
                                        {
                                            Pman.Dialog.BuilderAppEdit.show({
                                                 id : 0
                                            },function(data) {
                                                if (data) {
                                                   _this.modsel.setFromData(data);
                                                }
                                            });
                                        
                                        }
                                    },
                                    text : "Create"
                                },
                                {
                                    xtype: 'Item',
                                    xns: Roo.menu,
                                    listeners : {
                                        click : function (_self, e)
                                        {
                                         
                                            if (!_this.modsel.lastData || !_this.modsel.lastData.id) {
                                                Roo.MessageBox.alert("Error", "Select Module");
                                                return false;
                                            }
                                            Pman.Dialog.BuilderAppEdit.show( _this.modsel.lastData ,function(data) {
                                                if (data) {
                                                    _this.modsel.setFromData(data);
                                                }
                                            });
                                        
                                        }
                                    },
                                    text : "Edit"
                                },
                                {
                                    xtype: 'Item',
                                    xns: Roo.menu,
                                    listeners : {
                                        click : function (_self, e)
                                        {
                                           
                                        
                                        }
                                    },
                                    text : "Delete"
                                }
                            ]
                        }
                    },
                    {
                        xtype: 'ComboBox',
                        xns: Roo.form,
                        allowBlank : true,
                        displayField : 'app',
                        editable : false,
                        selectOnFocus : true,
                        typeAhead : true,
                        valueField : 'id',
                        width : 100,
                        forceSelection : true
                    }
                ]
            }
        });
        this.layout = this.panel.layout;

    }
});
