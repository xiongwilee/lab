<?php
$target_query_params = [];
parse_str("test=test&test1=test1&test=test2", $target_query_params);
// parse_str("test", $target_query_params);
var_dump($target_query_params);
