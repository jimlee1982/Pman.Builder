//<script type="text/javascript">

// Auto generated file - created by app.Builder.js- do not edit directly (at present!)

Pman.Dialog.BuilderAddTable = {

    dialog : false,
    callback:  false,

    show : function(data, cb)
    {
        if (!this.dialog) {
            this.create();
        }

        this.callback = cb;
        this.data = data;
        this.dialog.show(this.data._el);
        if (this.form) {
           this.form.reset();
           this.form.setValues(data);
           this.form.fireEvent('actioncomplete', this.form,  { type: 'setdata', data: data });
        }

    },

    create : function()
    {
        var _this = this;
        this.dialog = Roo.factory({
            xtype: 'LayoutDialog',
            xns: Roo,
            listeners : {
                show : function (_self)
                {
                    _this.grid.ds.load({});
                }
            },
            closable : false,
            collapsible : false,
            height : 500,
            resizable : false,
            title : "Select columns to use",
            width : 700,
            items : [
                {
                    xtype: 'GridPanel',
                    xns: Roo,
                    listeners : {
                        activate : function() {
                            _this.panel = this;
                            if (_this.grid) {
                                _this.grid.ds.load({});
                            }
                        }
                    },
                    background : false,
                    fitContainer : true,
                    fitToframe : true,
                    region : 'center',
                    tableName : 'Images',
                    title : "Images",
                    grid : {
                        xtype: 'Grid',
                        xns: Roo.grid,
                        listeners : {
                            render : function() 
                            {
                                _this.grid = this; 
                                //_this.dialog = Pman.Dialog.FILL_IN
                                if (_this.panel.active) {
                                   this.ds.load({});
                                }
                            },
                            cellclick : function (_self, ri, ci , e)
                            {
                               if (ci > 1) {return; }
                               
                                var rec = this.ds.getAt(ri);
                                var di = this.cm.getDataIndex(ci);
                                rec.set(di, (rec.data[di] * 1) ? 0 : 1);
                                 rec.commit();
                                 
                                  
                                  
                            }
                        },
                        autoExpandColumn : 'desc',
                        loadMask : true,
                        dataSource : {
                            xtype: 'Store',
                            xns: Roo.data,
                            listeners : {
                                beforeload : function (_self, options)
                                {
                                    if (typeof(_this.data) == 'undefined') {
                                        return false;
                                    
                                    }
                                    options.params = options.params || {};
                                    options.params.table = _this.data.table;
                                }
                            },
                            remoteSort : true,
                            sortInfo : { field : 'filename', direction: 'ASC' },
                            proxy : {
                                xtype: 'HttpProxy',
                                xns: Roo.data,
                                method : 'GET',
                                url : baseURL + '/Builder/ERM.php'
                            },
                            reader : {
                                xtype: 'JsonReader',
                                xns: Roo.data,
                                id : 'id',
                                root : 'data',
                                totalProperty : 'total',
                                fields : [
                                    { name: 'use', type: 'int'} , 
                                    { name: 'use_ex', type: 'int'}, 
                                    'table', 'column', 'ctype', 'desc', 'columnshort'
                                ]
                            }
                        },
                        toolbar : {
                            xtype: 'Toolbar',
                            xns: Roo,
                            items : [
                                {
                                    xtype: 'Button',
                                    xns: Roo.Toolbar,
                                    listeners : {
                                        click : function()
                                        {
                                            
                                        }
                                    },
                                    cls : 'x-btn-text-icon',
                                    text : "Add",
                                    icon : Roo.rootURL + 'images/default/dd/drop-add.gif'
                                },
                                {
                                    xtype: 'Button',
                                    xns: Roo.Toolbar,
                                    listeners : {
                                        click : function()
                                        {
                                            // Pman.genericDelete(_this, 'Images'); 
                                        }
                                    },
                                    cls : 'x-btn-text-icon',
                                    text : "Delete",
                                    icon : rootURL + '/Pman/templates/images/trash.gif'
                                }
                            ]
                        },
                        colModel : [
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'use',
                                header : 'Use',
                                width : 50,
                                renderer : function(v) {  
                                    var state = v> 0 ?  '-checked' : '';
                                
                                    return '<img class="x-grid-check-icon' + state + '" src="' + Roo.BLANK_IMAGE_URL + '"/>';
                                }
                            },
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'use_ex',
                                header : 'Display/Expand',
                                width : 100,
                                renderer : function(v) {  
                                    var state = v> 0 ?  '-checked' : '';
                                
                                    return '<img class="x-grid-check-icon' + state + '" src="' + Roo.BLANK_IMAGE_URL + '"/>';
                                                
                                 }
                            },
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'table',
                                header : 'Table',
                                width : 100,
                                renderer : function(v) { return String.format('{0}', v); }
                            },
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'column',
                                header : 'Column',
                                width : 150,
                                renderer : function(v,x,r) { 
                                    if (r.data.table == _this.data.table) {
                                    
                                        return String.format('{0}', v); 
                                    }
                                    return String.format('.....{0}', r.data.columnshort); 
                                }
                            },
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'ctype',
                                header : 'Type',
                                width : 50,
                                renderer : function(v) {
                                
                                    v = v*1;
                                
                                        
                                
                                        if ((v & 8) > 0 && (v & 4) > 0) return 'DATETIME';
                                        if ((v & 8) > 0)  return 'TIME';
                                        if ((v & 4) > 0)  return 'DATE';        
                                        if ((v & 16) > 0)  return 'BOOL';                
                                        if ((v & 2) > 0)  return 'STRING';                
                                        if ((v & 1) > 0) return 'NUMBER';                
                                        return v;
                                
                                 }
                            },
                            {
                                xtype: 'ColumnModel',
                                xns: Roo.grid,
                                dataIndex : 'desc',
                                header : 'Description',
                                width : 200,
                                renderer : function(v) { return String.format('{0}', v); }
                            }
                        ]
                    }
                }
            ],
            center : {
                xtype: 'LayoutRegion',
                xns: Roo
            },
            buttons : [
                {
                    xtype: 'Button',
                    xns: Roo,
                    listeners : {
                        click : function (_self, e)
                        {
                            _this.dialog.hide();
                        }
                    },
                    text : "Cancel"
                },
                {
                    xtype: 'Button',
                    xns: Roo,
                    listeners : {
                        click : function (_self, e)
                        {
                            // do some checks?
                             
                            
                            _this.dialog.el.mask("Saving");
                            _this.form.doAction("submit");
                        
                        }
                    },
                    text : "Next"
                }
            ]
        });
    }
};