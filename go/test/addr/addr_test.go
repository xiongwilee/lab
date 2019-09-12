package main

import "testing"

func TestAdd(t *testing.T) {

	assertCorrectMessage := func(t *testing.T, got, want int) {
		t.Helper()
		if got != want {
			t.Errorf("got '%d' want '%d'", got, want)
		}
	}

	t.Run("验证加法计算", func(t *testing.T) {
		got := Add(1, 2)
		want := 3

		assertCorrectMessage(t, got, want)
	})

}
