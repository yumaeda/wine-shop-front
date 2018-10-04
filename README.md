## Installation
1. Install TypeScript & webpack
```bash
sudo npm install -g webpack webpack-cli webpack-dev-server
sudo npm install -g typescript tslint tslint-webpack-plugin
```

2. Compile
```bash
npm run build
```

3. Run test
```bash
npm start
```

## TSX Syntax Highlighting for Vim
1. Install Vundle
```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

2. Prepend below to ~/.vimrc
```vim
set nocompatible
filetype off

" Set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" Let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" TSX plugins
Plugin ‘leafgarland/typescript-vim’
Plugin ‘peitalin/vim-jsx-typescript’

call vundle#end()

filetype plugin indent on
```

3. Run below commands in vim
```vim
:so ~/.vimrc
:PluginInstall
```
