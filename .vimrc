syntax on

" tabs settings. explanding all tabs to be 4 spaces. settings apply for all files except makefiles.
set tabstop=4
set shiftwidth=4
set smarttab
set expandtab
set autoindent
autocmd FileType make set noexpandtab shiftwidth=8 softtabstop=0

set term=builtin_ansi
colorscheme delek

set number
