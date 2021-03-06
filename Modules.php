<?php

require_once 'Pman.php';

class Pman_Builder_Modules extends Pman
{
  
    // getAuth - everyone allowed in...
    function getAuth() {
        if (!$this->hasPerm('Builder.Builder', 'S')) {
            $this->jerr("Permission denied");
        }
        
        
    }
    
    function get()
    {
        // should just list the enabled modules.. - in theory we can not create modules???
        
        // or should this be totally database related...
        
        
        $this->init();
        $enabled =  array('Core') ;
        $enabled = !empty($this->appModules) ?  array_merge($enabled, explode(',',  $this->appModules)) :  $enabled;
        
        sort($enabled);
        $enabled = array_unique($enabled);
        $ret = array();
        foreach($enabled as $r) {
            $ret[] = array('name' => $r);
        }
        $this->jdata($ret);
        
    }
  
}