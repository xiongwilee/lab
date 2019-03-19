<?php

$test = '';
$result = explode('|',$test);
echo(json_encode($result));

$test1 = [];
echo(json_encode($test1));

$test2 = 'test';
$result = explode('|',$test2);
echo(json_encode($result));

echo(json_encode(['测试']));

$result = [ 'banners' => 'test1'];
$result['banners'] = [ 'test0' . $result['banners'] ];
echo(json_encode($result));

$arr = [['test'=>1], ['test'=>2]];
foreach($arr as $key => $item) {
	$arr[$key]['test']='3';
}
echo(json_encode($arr));

$test = 7E-10;
echo($test);
