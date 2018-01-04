set nocompatible              " 去除VI一致性,必须
filetype off                  " 必须

" 设置包括vundle和初始化相关的runtime path
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" 让vundle管理插件版本,必须
Plugin 'VundleVim/Vundle.vim'

" nerdtree
Plugin 'scrooloose/nerdtree'

" Fugitive: Git 集成，强烈推荐！
Plugin 'tpope/vim-fugitive'

" Solarized: 非常流行的配色。
Plugin 'altercation/vim-colors-solarized'

" Airline: 小巧美观的状态栏。
Plugin 'bling/vim-airline'

" Tabular: 自动对齐。
Plugin 'godlygeek/tabular'

" kristijanhusak/vim-hybrid-material 一种高亮方案 
Plugin 'kristijanhusak/vim-hybrid-material'

" 你的所有插件需要在下面这行之前
call vundle#end()            " 必须
filetype plugin indent on    " 必须 加载vim自带和插件相应的语法和文件类型相关脚本

" 显示行号
set nu!

" 自动打开NERDTree
autocmd vimenter * NERDTree

" 启用高亮
syntax enable
set background=dark
colorscheme hybrid_reverse

" 忽视插件改变缩进,可以使用以下替代:
"filetype plugin on
"
" 简要帮助文档
" :PluginList       - 列出所有已配置的插件
" :PluginInstall    - 安装插件,追加 `!` 用以更新或使用 :PluginUpdate
" :PluginSearch foo - 搜索 foo ; 追加 `!` 清除本地缓存
" :PluginClean      - 清除未使用插件,需要确认; 追加 `!` 自动批准移除未使用插件
"
" 查阅 :h vundle 获取更多细节和wiki以及FAQ
" 将你自己对非插件片段放在这行之后
