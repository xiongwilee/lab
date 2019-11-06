package main

import "fmt"

func main() {
	numChan := make(chan int)
	exitChan := make(chan struct{})

	go func() {
		for i := 1; i <= 101; i = i + 2 {
			result, ok := <-numChan
			if ok && result <= 100 {
				fmt.Println("goroutine0 : ", result)
			}
			numChan <- i
		}
	}()
	go func() {
		defer close(exitChan)
		for i := 0; i <= 100; i = i + 2 {
			numChan <- i
			result, ok := <-numChan
			if ok && result <= 100 {
				fmt.Println("goroutine1 : ", result)
			}
		}
	}()

	<-exitChan
}
