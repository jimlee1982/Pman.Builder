<?php

// quick way to build SQL based on a form design..
// might have uses later...

require_once 'Pman.php';

class Pman_Builder_FormToSQL extends Pman {
    
    function getAuth(){
        if (!HTML_FlexyFramework::get()->cli) {
            die("not cli");
        }
        return true;
    }
    
    function get($file)
    {
        $ar = json_decode(file_get_contents($file));
        $this->walk($o);
        
    }
    
    function walk($o) 
    {
        
        
        
        foreach($o as $k=>$v) {
            if (is_array($v)) {
                foreach($v as $oo) {
                    $this->walk($o);
                }
                
                continue;
            }
            if (is_object($v)) {
                $this->walk($v);
                continue;
            }
        }
        
    }
    
    
}