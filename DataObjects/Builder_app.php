<?php
/**
 * Table Definition for builder_app
 */
require_once 'DB/DataObject.php';

class Pman_Builder_DataObjects_Builder_app extends DB_DataObject 
{
    ###START_AUTOCODE
    /* the code below is auto generated do not remove the above tag */

    public $__table = 'builder_app';                     // table name
    public $id;                              // int(11)  not_null primary_key auto_increment
    public $app;                             // string(64)  not_null
    public $davurl;                          // string(128)  not_null
    public $davwrite;                        // int(2)  not_null

    
    /* the code above is auto generated do not remove the tag below */
    ###END_AUTOCODE
    // * - beforeDelete() -- return false for fail and set DO->err;

    function beforeDelete()
    {
        $x = DB_DataObject::factory('Builder');
        $x->app = $this->app;
        if ($x->count()) {
            $this->err = "Modules exist with this name!";
            return false;
        }
        return true;
    }
    
}
