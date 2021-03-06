//<script type="text/javascript">

// Auto generated file - created by app.Builder.js- do not edit directly (at present!)



// register the module first
Pman.on('beforeload', function()
{
    Pman.register({
        part :  ["Builder","Palette"],
        modKey : '001-Pman.Tab.BuilderPalette',
        module : Pman.Tab.BuilderPalette,
        region : 'center',
        parent : Pman.Tab.BuilderTab,
        name : "Pman.Tab.BuilderPalette",
        disabled : false, 
        permname: '' 
    });
});

Pman.Tab.BuilderPalette = new Roo.util.Observable({

    panel : false,
    disabled : false,
    parentLayout:  false,

    add : function(parentLayout, region)
    {

        var _this = this;
        this.parentLayout = parentLayout;

        this.panel = parentLayout.addxtype({
            xtype: 'GridPanel',
            xns: Roo,
            listeners : {
                activate : function() {
                    _this.panel = this;
                    if (_this.grid) {
                       _this.grid.ds.load({})
                    }
                }
            },
            background : true,
            fitContainer : true,
            fitToframe : true,
            region : 'east',
            tableName : 'palette',
            title : "palette",
            grid : {
                xtype: 'Grid',
                xns: Roo.grid,
                listeners : {
                    render : function() 
                    {
                        _this.grid = this; 
                        //_this.dialog = Pman.Dialog.FILL_IN
                        if (_this.panel.active) {
                           this.ds.load({})
                        }
                        if (_this.ss) {
                            return;
                        }
                        _this.ss =   Roo.util.CSS.createStyleSheet(
                    '.pman-builder-palete-hide { display: none; } ' + "\n" 
                    , Roo.id())
                        
                        
                        
                    },
                    rowclass : function (gridview, rowcfg)
                    {
                        var sn = Pman.Builder.Tree.currentNodeType();
                      //  Roo.log(rowcfg);
                        if (!sn) {
                            sn = '*top';
                        }
                        var cls = 'pman-builder-palete-hide';
                       
                     
                        Roo.each(rowcfg.record.json.parents, function(n) {
                            if (n == sn || n.split(':').shift() == sn) 
                                cls = '';
                                return true;
                            }
                         );
                         //Roo.log(cls);
                         rowcfg.rowClass = cls;
                        // what is the currently selected element..
                     
                    }
                },
                autoExpandColumn : 'name',
                ddGroup : 'component',
                enableDrag : true,
                loadMask : true,
                dataSource : {
                    xtype: 'Store',
                    xns: Roo.data,
                    remoteSort : true,
                    sortInfo : { field : 'name', direction: 'ASC' },
                    proxy : {
                        xtype: 'HttpProxy',
                        xns: Roo.data,
                        method : 'GET',
                        url : baseURL + '/Builder/Palette.php'
                    },
                    reader : {
                        xtype: 'JsonReader',
                        xns: Roo.data,
                        id : 'id',
                        root : 'data',
                        totalProperty : 'total',
                        fields : [
                            
                            {
                                'name': 'name',
                                'type': 'string'
                            }
                        ]
                    }
                },
                colModel : [
                    {
                        xtype: 'ColumnModel',
                        xns: Roo.grid,
                        dataIndex : 'name',
                        header : 'Name',
                        width : 200,
                        renderer : function(v) { return String.format('{0}', v); }
                    }
                ],
                sm : {
                    xtype: 'RowSelectionModel',
                    xns: Roo.grid,
                    singleSelect : true
                }
            }
        });
        this.layout = this.panel.layout;

    }
});
