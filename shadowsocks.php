<?php
$url = 'https://www.google.com';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_PROXY, '127.0.0.1:1086');		// 代理本地ip:端口
curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);	// socks5
curl_setopt($ch, CURLOPT_TIMEOUT, 30); 					// 设置超时
 
$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo curl_errno($ch);
}
var_dump($result);
