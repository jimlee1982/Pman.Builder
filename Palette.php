<?php 

require_once 'Pman.php';
class Pman_Builder_Palette extends Pman 
{
    // generic list we do not care who looks at it..
    function getAuth()
    {
        return true;
    }
    
    function get($sub)
    {
        if (empty($sub)) {
            return $this->roousage();
        }
        // list of properties or events.
        // gets xns+xtype+list
        
        // 
        
    }
    function roousage() // list of what elements, can have what as children..
    {
        
        // use file..
        // get this directly from roo?
        
        
        $lines = file(dirname(__FILE__).'/RooUsage.txt');
        $s = -1;
        $res = array();
        $left = array();
        foreach($lines as $l) {
            
            $l = preg_replace('#//.*#', '', $l);
            $l = trim($l);
            if (!strlen(trim($l))){
                continue;
            }
            if (preg_match('/left:$/', $l)) {
                $s = 0;
                $left = array();
                continue;
            }
            if (preg_match('/right:$/', $l)) {
                $s = 1;
                continue;
            }
            switch($s) {
                case 0:
                    $left[] = $l;
                    
                    continue;
                case 1:
                    if (!isset($res[$l])) {
                        $res[$l] = array(); 
                    }
                    foreach($left as $ll) {
                        $res[$l][$ll] = true; 
                    }
                    continue;
                default:
                    continue;
            }
            
            
        }
        $ret = array();
        ksort($res);
        foreach($res as $k=>$v) {
            $ret[] = array( 
                'name' => $k,
                'parents' =>  array_keys($v) 
            );
        }
        $this->jdata($ret);
        //echo '<PRE>';print_R($ret);exit;
    }
    
}