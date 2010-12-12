//<script type="text/javascript">

// Auto generated file - created by app.Builder.js- do not edit directly (at present!)



// register the module first
Pman.on('beforeload', function()
{
    Pman.register({
        modKey : '001-Pman.Tab.BuilderTop',
        module : Pman.Tab.BuilderTop,
        region : 'center',
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
                                    icon : Roo.rootURL + 'images/default/dd/drop-add.gif',
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
                        listeners : {
                            select : function (combo, record, index)
                            {
                                _this.filesel.reset();
                               _this.filesel.fireEvent('select', false);
                            
                            },
                            render : function (_self)
                            {
                                _this.modsel = this;
                            }
                        },
                        allowBlank : true,
                        alwaysQuery : true,
                        displayField : 'app',
                        editable : false,
                        forceSelection : true,
                        listWidth : 300,
                        loadingText : "Searching...",
                        minChars : 2,
                        pageSize : 40,
                        queryParam : 'query[name]',
                        selectOnFocus : true,
                        tpl : '<div class="x-grid-cell-text x-btn button"><b>{app}</b></div>',
                        triggerAction : 'all',
                        typeAhead : true,
                        valueField : 'id',
                        width : 100,
                        store : {
                            xtype: 'Store',
                            xns: Roo.data,
                            remoteSort : true,
                            sortInfo : { field : 'app' , direction : 'ASC' },
                            proxy : {
                                xtype: 'HttpProxy',
                                xns: Roo.data,
                                method : 'GET',
                                url : baseURL + '/Roo/Builder_app.php'
                            },
                            reader : {
                                xtype: 'JsonReader',
                                xns: Roo.data,
                                id : 'id',
                                root : 'data',
                                totalProperty : 'total',
                                fields : [
                                    {
                                        'name': 'id',
                                        'type': 'int'
                                    },
                                    {
                                        'name': 'name',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'btype',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'json',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'app',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'module',
                                        'type': 'string'
                                    }
                                ]
                            }
                        }
                    },
                    {
                        xtype: 'Button',
                        xns: Roo.Toolbar,
                        text : "Manage Parts ",
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
                                            if (!_this.modsel.lastData || !_this.modsel.lastData.id) {
                                                Roo.MessageBox.alert("Error", "Select Module");
                                                return false;
                                            }
                                            
                                            _this.filesel.reset();
                                            Pman.Tab.BuilderTree.clearAll();
                                            Pman.Tab.BuilderTree.setCurrentNode(Pman.Tab.BuilderTree.tree.root,true);
                                            
                                            var bp = Pman.Tab.BuilderPanel;
                                            bp.redraw.defer(100,bp,[true]);
                                        
                                        }
                                    },
                                    icon : Roo.rootURL + 'images/default/dd/drop-add.gif',
                                    text : "New Part"
                                },
                                {
                                    xtype: 'Item',
                                    xns: Roo.menu,
                                    text : "Delete"
                                }
                            ]
                        }
                    },
                    {
                        xtype: 'ComboBox',
                        xns: Roo.form,
                        listeners : {
                            select : function (combo, record, index)
                            {
                               //cb.lastData = rec.data;
                                var bt = Pman.Tab.BuilderTree;
                                if (!rec) {
                                    bt.clearAll();
                                    bt.setCurrentNode(bt.tree.root,true);
                                    var bp = Pman.Tab.BuilderPanel;
                                    bp.redraw.defer(100,bp,[true]);
                                    return;
                                }
                                
                                bt.loadJSON.defer(10, bt, [rec.data.json]);
                            
                            
                            },
                            render : function (_self)
                            {
                                _this.filesel = this;
                            }
                        },
                        allowBlank : true,
                        alwaysQuery : true,
                        displayField : 'name',
                        editable : false,
                        forceSelection : true,
                        listWidth : 400,
                        loadingText : "Searching...",
                        minChars : 2,
                        pageSize : 40,
                        queryParam : 'query[name]',
                        selectOnFocus : true,
                        tpl : '<div class="x-grid-cell-text x-btn button"><b>{name}</b></div>',
                        triggerAction : 'all',
                        typeAhead : true,
                        valueField : 'id',
                        width : 200,
                        store : {
                            xtype: 'Store',
                            xns: Roo.data,
                            listeners : {
                                beforeload : function (_self, options)
                                {
                                     o.params = o.params || {}; 
                                   // o.params.btype = 'FORM';
                                    if (!_this.modsel.lastData || !_this.modsel.lastData.id) {
                                        Roo.MessageBox.alert("Error", "Select Module");
                                        return false;
                                    }
                                    o.params.app = _this.modsel.lastData.app;
                                
                                }
                            },
                            remoteSort : true,
                            sortInfo : { field : 'name' , direction : 'ASC' },
                            proxy : {
                                xtype: 'HttpProxy',
                                xns: Roo.data,
                                method : 'GET',
                                url : baseURL + '/Roo/Builder.php'
                            },
                            reader : {
                                xtype: 'JsonReader',
                                xns: Roo.data,
                                id : 'id',
                                root : 'data',
                                totalProperty : 'total',
                                fields : [
                                    {
                                        'name': 'id',
                                        'type': 'int'
                                    },
                                    {
                                        'name': 'name',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'btype',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'json',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'app',
                                        'type': 'string'
                                    },
                                    {
                                        'name': 'module',
                                        'type': 'string'
                                    }
                                ]
                            }
                        }
                    },
                    {
                        xtype: 'Button',
                        xns: Roo.Toolbar,
                        listeners : {
                            click : function (_self, e)
                            {
                                this.save();
                            },
                            render : function (_self)
                            {
                               _this.saveBtn = this;
                            }
                        },
                        cls : 'x-btn-text-icon',
                        icon : rootURL + '/Pman/templates/images/save.gif',
                        text : "Save",
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
                                          _this.saveBtn.save(false,0);
                                        }
                                    },
                                    icon : rootURL + '/Pman/templates/images/save.gif',
                                    text : "Save a copy as"
                                },
                                {
                                    xtype: 'Item',
                                    xns: Roo.menu,
                                    listeners : {
                                        click : function (_self, e)
                                        {
                                           _this.saveBtn.save(
                                             function() {
                                            
                                          } );
                                        }
                                    },
                                    text : "Show JSON"
                                }
                            ]
                        }
                    },
                    {
                        xtype: 'Separator',
                        xns: Roo.Toolbar
                    }
                ]
            }
        });
        this.layout = this.panel.layout;

    }
});
