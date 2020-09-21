### 下载
http://www.sublimetext.com
### package control
ctrl+`
```python
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```
### js build
```shell
git clone https://github.com/tanepiper/SublimeText-Nodejs.git ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/Nodejs
```

### 配置

控制台

```shell
alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"
```

```
"open_files_in_new_window": false, //同一个界面打开
```
### 插件
