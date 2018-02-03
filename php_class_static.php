<?php
class Person
{
	//下面是人的静态成员属性
	public static $static1 = "static1";

	public static function func1(){
		echo self::$static1 . "father \n";
		echo self::$static2 . "father \n";
	}
}

class Test extends Person
{
	public static $static2 = "static2";
	public static $pre1 = ['pre1'];
	public static $pre2;

	public static function mer($pre2){
		self::$pre2 = (array)$pre2;
		return array_merge(self::$pre1, self::$pre2);
	}

	public static function func2(){
		echo self::$static1 . "current \n";
		echo self::$static2 . "current \n";
	}
}

var_dump(Test::mer(['testtest']));
