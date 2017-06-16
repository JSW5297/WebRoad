<?php
/**
 * Created by PhpStorm.
 * User: Svend
 * Date: 16-9-11
 * Time: 下午7:22
 */
header('Content-Type:text/event-stream');

for($i = 0; $i<100;$i++){
    echo "event:newDate\n";
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}