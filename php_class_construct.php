<?php
class MyDestructableClass {
   function __construct() {
       print "In constructor\n";
       $this->name = "MyDestructableClass";
   }

   function __destruct() {
       print "Destroying " . $this->name . "\n";
   }
}

$obj1 = new MyDestructableClass();

$obj2 = new MyDestructableClass();

$obj3 = new MyDestructableClass();