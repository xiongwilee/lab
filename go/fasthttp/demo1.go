package main

import (
    "fmt"

    "github.com/valyala/fasthttp"
)

// RequestHandler 类型，使用 RequestCtx 传递 HTTP 的数据
func httpHandle(ctx *fasthttp.RequestCtx) {
    fmt.Fprintf(ctx, "hello fasthttp") // *RequestCtx 实现了 io.Writer
}

func main() {
    // 一定要写 httpHandle，否则会有 nil pointer 的错误，没有处理 HTTP 数据的函数
    if err := fasthttp.ListenAndServe("0.0.0.0:12345", httpHandle); err != nil {
        fmt.Println("start fasthttp fail:", err.Error())
    }
}